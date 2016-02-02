module.exports = {

    mongo:{
        'database'  : 'mongodb://127.0.0.1/mean_shop'
    },
    port      : process.env.PORT || 8000,
    seedDB      : false,
    secret      : 'superSecret'
};
