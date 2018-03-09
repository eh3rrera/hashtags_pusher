# hashtags_pusher

A Node.js process that publishes tweets that contains certain hashtags to a Pusher channel. Made to be used with [this iOS app](https://github.com/eh3rrera/twitter-feed-pusher).

You can follow the [tutorial](https://pusher.com/tutorials/twitter-feed-swift/) to build this application or jump straight to the code.

## Getting Started
1. Clone this repository and `cd` into it.
2. Copy `config.sample.js` into a `config.js` file to enter your Twitter and Pusher API keys.
3. Optionally, in this file you can change the hashtags to be tracked too.
4. Execute `npm install` to download dependencies.
5. Execute `node app.js` to start the Node.js process.

### Prerequisites

- [Twitter API access](https://apps.twitter.com/app/new)
- [Pusher account](https://pusher.com/signup)
- [Node.js](https://nodejs.org/en/download/)

## Built With

* [Pusher](https://pusher.com/) - APIs to enable devs building realtime features
* [Node.js](https://nodejs.org) - A JavaScript runtime

## Acknowledgments
* Thanks to [Pusher](https://pusher.com/) for sponsoring this tutorial.

## License
MIT
