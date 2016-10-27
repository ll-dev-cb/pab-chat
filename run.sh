#
cd /home/ubuntu/Desktop/pab/
echo start - `date` >> ran.log
java -cp lib/Ab.jar Main bot=super action=chat trace=false
echo stop  - `date` >> ran.log



