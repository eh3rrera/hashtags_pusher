# hashtags_pusher

A Node.js process that publishes tweets that contains certain hashtags to a Pusher channel

# Requirements

- [Twitter API access](https://apps.twitter.com/app/new)
- [Pusher account](https://pusher.com/signup)
- [Node.js](https://nodejs.org/en/download/)

# Installation
1. Clone this repository and `cd` into it.
2. Copy `config.sample.js` into a `config.js` file to enter your Twitter and Pusher API keys.
3. Optionally, in this file you can change the hashtags to be tracked too.
4. Execute `npm install` to download dependencies.
5. Execute `node app.js` to start the Node.js process.

# License
MIT