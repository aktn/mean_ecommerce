var braintree = require('braintree');
var config = require('../../config/env/development');

var gateway = braintree.connect({

  environment: braintree.Environment.Sandbox,
  merchantId: "vjkrmgstpdb5bpbh",
  publicKey: "7qmdp2gqzqfjj956",
  privateKey: "3760af85f078f0c7c4d3feb7dc19fc41"
  
});

module.exports = gateway;