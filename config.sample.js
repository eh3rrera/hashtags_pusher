module.exports = {
  twitter: {
    consumer_key        :  '<INSERT_TWITTER_CONSUMER_KEY_HERE>',
    consumer_secret     :  '<INSERT_TWITTER_CONSUMER_SECRET_HERE>',
    access_token        :  '<INSERT_TWITTER_ACCESS_TOKEN_HERE>',
    access_token_secret :  '<INSERT_TWITTER_ACCESS_TOKEN_SECRET_HERE>',
  },

  pusher: {
    appId      : '<INSERT_PUSHER_APP_ID_HERE>',  
    key        : '<INSERT_PUSHER_KEY_ID_HERE>',
    secret     : '<INSERT_PUSHER_SECRET_ID_HERE>',
    encrypted  : true,
  },

  hashtagsToTrack: ['#nodejs', '#swift', '#ios', '#programming'],

  channel: 'hashtags',

  event: 'new_tweet',
}