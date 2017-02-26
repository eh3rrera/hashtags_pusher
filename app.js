const config = require('./config');
const Twit = require('twit');
const Pusher = require('pusher');

const T = new Twit(config.twitter);

const pusher = new Pusher(config.pusher);

// Get tweets from the hashtags to track
const stream = T.stream('statuses/filter', { track: config.hashtagsToTrack });

stream.on('tweet', (tweet) => {
  const message = {
    message: tweet.text, 
    username: tweet.user.screen_name, 
    name: tweet.user.name, 
  };

  //console.log(tweet);
  console.log(JSON.stringify(message));

  pusher.trigger(config.channel, config.event, message);
});
