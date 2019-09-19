#!/usr/bin/node
const log = console.log;
/*打印CPU架构信息以及操作系统版本信息 */
log("arch:",process.arch);
log("platform",process.platform);
/*打印进程id信息以及nodejs可执行文件的绝对路径信息*/
log("id:",process.pid);
log("execPath:",process.execPath);
/*脚本程序暂停运行 */
//process.stdin.pause();
/*打印 Node.js 版本信息，当前登录用户 id 信息，当前登录用户所属组 id 信息以及当前脚本*/
log("version:",process.version);
log("uid:",process.getuid());
log("gid:",process.getgid());
log("pwd:",process.cwd())
/*打印内存使用情况*/
log("rss: ",process.memoryUsage().rss);// 查看系统的常驻内存大小
log("heapTotal: ",process.memoryUsage().heapTotal);//查看 V8 动态分配的总内存大小
log("heapUsed: ",process.memoryUsage().heapUsed);//查看 v8 动态分配的已用内存大小
log("external: ",process.memoryUsage().external);
/*打印环境变量*/
log("env:",process.env);

