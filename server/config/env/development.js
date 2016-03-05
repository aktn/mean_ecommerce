module.exports = {

    mongo:{
        'database'  : 'mongodb://127.0.0.1/mean_shop'
    }, 
    braintree: {
    clientID:       process.env.BRAINTREE_ID || '7qmdp2gqzqfjj956',
    clientSecret:   process.env.BRAINTREE_SECRET || '3760af85f078f0c7c4d3feb7dc19fc41',
    clientMerchant: process.env.BRAINTREE_MERCHANT || 'vjkrmgstpdb5bpbh'
  },
    port      : process.env.PORT || 8080,
    seedDB      : false,
    secret      : 'thisisasupersecretkeyxoxo'
};
