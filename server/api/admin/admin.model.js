var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var adminSchema = new Schema({
    name : String,
    username : {type: String,  index:{unique:true}},
    email : {type:String},
    role : {type: String},
    password : {type: String,  select:false}
});

adminSchema.pre('save', function(next){
    var admin = this;

    if(!admin.isModified('password')) return(next);

    bcrypt.hash(admin.password, null, null, function(err, hash){
        if(err) return next(err);
        admin.password = hash;
        next();
    });
});

adminSchema.methods.comparePassword = function(password){
    var admin = this;
    return bcrypt.compareSync(password, admin.password);
};

module.exports = mongoose.model('Admin', adminSchema);