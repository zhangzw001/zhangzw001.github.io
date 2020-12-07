#!/bin/bash


# 每天2点同步前一天的文件
# /data/logs/logs/jblog.log-20201207 的内容是20201206的日志
# 功能: 用于php artisan  xxxx 读取日志分析

srcDir="/data/logs/logs"
destDir="/data/rsync_logs/tomcat_logs"
filePrefix="jblog.log"
day="$(date '+%Y%m%d')"
srcFileName="${srcDir}/${filePrefix}-${day}"
destFileName="${destDir}/${filePrefix}-${day}"
#锁
rsyncFileLock="/scripts/rsyncFile.Lock"

sshHost="xxxxx"
sshUser="www"
sshKey="/home/www/.ssh/id_rsa"

#文件保留30天
find ${destDir}/ -name "${filePrefix}-*" -mtime +30 -delete

# 创建锁
if [ -f ${rsyncFileLock} ]
then
 echo "$(date '+%F %T') >>> 存在锁 "
 exit 1
fi

touch ${rsyncFileLock}
#保证源文件存在
if [[ $(ssh -i ${sshKey} ${sshUser}@${sshHost} "ls ${srcFileName}|wc -l") == 1 ]]
then
 echo "$(date '+%F %T') >>> 源文件存在, 开始同步"
else
 echo "$(date '+%F %T') >>> 源文件不存在, 停止同步脚本..."
 \rm ${rsyncFileLock}
 exit 1
fi

#确保本地文件正确
checkMd5sum(){
 if [ -f ${destFileName} ]
 then
  md5Src=$(ssh -i ${sshKey} ${sshUser}@${sshHost} "md5sum ${srcFileName}"|awk '{print $1}')
  md5Dest=$(md5sum ${destFileName}|awk '{print $1}')
  if [[ ${md5Src} == ${md5Dest} ]]
  then
   echo "$(date '+%F %T') >>> 本地文件存在,且内容一致,无需同步,请勿重复执行"
   \rm ${rsyncFileLock}
   exit 1
  fi
 fi
}

#同步命令
rysncFile(){
 #限制20M/s
 rsync -av --progress --bwlimit=20000 -e "ssh -i ${sshKey}" ${sshUser}@${sshHost}:${srcFileName} ${destDir}/
 status=$?
 return ${status}
}

checkMd5sum
# 这里就校验邮件通知了, php那边会邮件报警
rysncFile

#删除锁
\rm ${rsyncFileLock}

echo "$(date '+%F %T') >>> 源文件存在, 结束同步"
