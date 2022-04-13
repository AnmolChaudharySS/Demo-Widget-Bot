console.log('🚀🚀 GTM Script loaded...')

window.dataLayer = window.dataLayer || []

const data = { event: 'botEvent', botCategory: 'chat', botAction: 'Bot Loaded 🚀🚀' }
dataLayer.push(data)

const openChatButton = document.querySelector('#chat-icon-open-div')
const closeChatButton = document.querySelector('#chat-icon-close-div')
openChatButton.addEventListener('click', () => {
  dataLayer.push({ event: 'chatEvent', botCategory: 'chat', botAction: '🤖 Open Chat' })
  console.log('🤖 Open Chat')
})
closeChatButton.addEventListener('click', () => {
  dataLayer.push({ event: 'chatEvent', botCategory: 'chat', botAction: '❌ Close Chat' })
  console.log('❌ Close Chat')
})
