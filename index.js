const mineflayer = require('mineflayer')
const http = require('http')

// سيرفر وهمي عشان Render ما يوقف البوت
http.createServer((req, res) => {
  res.end('Bot is running!')
}).listen(3000)

function createBot() {
  const bot = mineflayer.createBot({
    host: 'firasdo.aternos.me',
    port: 32401,
    username: 'KeepAliveBot',
    version: '1.21.6',
    auth: 'offline'
  })

  bot.on('spawn', () => {
    console.log('✅ البوت دخل السيرفر!')
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 60000)
  })

  bot.on('kicked', () => {
    console.log('❌ طُرد! إعادة اتصال...')
    setTimeout(createBot, 30000)
  })

  bot.on('error', () => {
    setTimeout(createBot, 30000)
  })

  bot.on('end', () => {
    setTimeout(createBot, 30000)
  })
}

createBot()
