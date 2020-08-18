const yandexMoney = require('yandex-money-sdk');
const _ = require('lodash');

function promisify(action) {
  return new Promise((res, rej) => {
    action((err, data) => {
      if (err) {
        rej(err);
        return;
      }
      res(data);
    });
  });
}

function Donations() {}

Donations.prototype.init = async function(config) {
  let { apiKey, payment_label } = config.radio.donation;
  this.api = new yandexMoney.Wallet(apiKey);
  this.paymentLabel = payment_label;
  await this.initDonations();
  this.inited = true;
};

Donations.prototype.getOpertaionsList = async function() {
  let data;
  try {
    data = await promisify(
      this.api.operationHistory.bind(this.api, { records: 100, details: true, type: 'deposition', label: this.paymentLabel })
    );
    data = data.operations.map(({ message, amount, amount_currency }) => {
      let messages = message.split('\n');
      let name = messages[1] || 'anonym';
      return {
        name,
        amount,
        currency: amount_currency
      };
    });
    console.log(data);
    return data;
  } catch (e) {
    console.warn(e);
  }
  return [];
};

Donations.prototype.updateDonations = async function() {
  let newDonatios = await this.getOpertaionsList();
  let diff = _.differenceWith(newDonatios, this.donations, _.isEqual);
  let newDonation = diff[0];
  if (newDonation) {
    this.donations.push(newDonation);
    if (!this.topDonator || this.topDonator.amount < newDonation.amount) {
      this.topDonator = newDonation;
    }
    return newDonation;
  }
  return null;
};

Donations.prototype.initDonations = async function() {
  this.donations = await this.getOpertaionsList();
  console.log(this.donations);
  this.topDonator = this.donations.sort((b, a) => a.amount - b.amount)[0];
};

Donations.prototype.getTopDonator = function() {
  return this.topDonator ? `${this.topDonator.name} ${this.topDonator.amount} RUR` : '';
};

Donations.prototype.donations = null;
Donations.prototype.inited = false;
Donations.prototype.topDonator = null;
Donations.prototype.paymentLabel = '';

let service = new Donations();

module.exports = service;
