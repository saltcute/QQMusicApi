module.exports = {
  apps : [{
    name: 'QQmusicAPI',
    script: './bin/www', // 直接使用 Node.js 的启动文件
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    cron_restart: '0 4 * * *' // 每天凌晨4点重启
  }]
};