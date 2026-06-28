const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'firasdo.aternos.me',
    port: 32401,
    username: 'KeepAliveBot',
    version: '1.21.4',
    auth: 'offline'
  })

  bot.on('spawn', () => {
    console.log('✅ البوت دخل السيرفر!')
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 60000)
  })

  bot.on('kicked', (reason) => {
    console.log('❌ طُرد:', reason)
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
