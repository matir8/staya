'use strict'

require('dotenv').config()
const axios = require('axios')
const BootBot = require('bootbot')

const bot = new BootBot({
  accessToken: process.env.FB_ACCESS_TOKEN,
  verifyToken: process.env.FB_VERIFY_TOKEN,
  appSecret: process.env.FB_APP_SECRET
})

const baseUrl = 'http://localhost:8000/api/v1/'

bot.hear(['hello', 'hi', /hey( there)?/i], (payload, chat) => {
  chat.say('Hello from Staya Chat Bot!')
})

bot.on('attachment', (payload, chat) => {
  let attachment = payload.message.attachments[0]

  if (attachment.type === 'location') {
    let locationTitle = attachment.title

    let locationCoordinates = attachment.payload.coordinates
    let long = locationCoordinates.long
    let lat = locationCoordinates.lat

    let url = baseUrl + `listings?near_long=${long}&near_lat=${lat}`

    axios.get(url)
      .then((resp) => {
        chat.say(`Showing you listings nearby ${locationTitle}...`)

        let chatElements = []
        resp.data.forEach(listing => {
          chatElements.push({
            title: listing.title,
            subtitle: listing.description,
            image_url: listing.images[0].image,
            default_action: {
              type: 'web_url',
              url: 'https://google.com'
            }
          })
        })

        chat.say({
          cards: chatElements
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
})

bot.start()