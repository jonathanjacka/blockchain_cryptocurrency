const redis = require('redis');

const CHANNELS = {
  TEST: 'TEST',
};

class PubSub {
  constructor() {
    this.publisher = redis.createClient();
    this.subscriber = redis.createClient();

    this.publisher.connect();
    this.subscriber.connect();

    this.subscriber.subscribe(CHANNELS.TEST, (message, channel) =>
      console.log(
        `Message received from channel: ${channel} - Message: ${message}`
      )
    );
  }
}

const testPubSub = new PubSub();
setTimeout(
  () => testPubSub.publisher.publish(CHANNELS.TEST, 'Hello there...'),
  1000
);
