const { google } = require('googleapis');
const _ = require('lodash');

function Subscribers() {}

Subscribers.prototype.init = async function(config) {
  let { clientId, secret, accessToken, refreshToken } = config.radio.subscribers;
  console.log(clientId);
  console.log(secret);
  console.log(accessToken);
  console.log(refreshToken);
  this.clientId = clientId;
  this.secret = secret;
  this.accessToken = accessToken;
  this.refreshToken = refreshToken;
  this.createCreds();
  await this.initSubscribers();
  this.inited = true;
};

Subscribers.prototype.initSubscribers = async function() {
  this.subscribers = await this.getSubscribers();
  this.latestSubscriber = this.subscribers[0];
};

Subscribers.prototype.createCreds = function() {
  const oauth2Client = new google.auth.OAuth2(this.clientId, this.secret, 'https://developers.google.com/oauthplayground');

  oauth2Client.setCredentials({ access_token: this.accessToken, refresh_token: this.refreshToken });
  this.creds = oauth2Client;
};

Subscribers.prototype.getSubscribers = async function() {
  const youtuber = google.youtube({
    version: 'v3',
    auth: this.creds
  });

  const params = {
    part: 'subscriberSnippet',
    mySubscribers: true
  };

  const res = await youtuber.subscriptions.list(params);
  return res.data.items.map(item => (item.subscriberSnippet ? item.subscriberSnippet.title : null)).filter(item => item !== null);
};

Subscribers.prototype.updateSubscribers = async function() {
  let newSubscribers = await this.getSubscribers();
  console.log(newSubscribers);
  newSubscribers = newSubscribers.map(item => (item.subscriberSnippet ? item.subscriberSnippet.title : null)).filter(item => item !== null);
  let diff = _.difference(newSubscribers, this.subscribers);
  console.log(diff);
  let newSubscriber = diff[0];
  if (newSubscriber) {
    this.subscribers.push(newSubscriber);
    this.latestSubscriber = newSubscriber;
    return newSubscriber;
  }
  return null;
};

Subscribers.prototype.newSubscribers = null;
Subscribers.prototype.subscribers = null;
Subscribers.prototype.inited = false;
Subscribers.prototype.latestSubscriber = null;

let service = new Subscribers();

module.exports = service;
