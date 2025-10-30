// require library mongoose
const mongoose = require('mongoose');

// connect mongoose to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/relation_db').then
((result)=> {
    console.log('connected to mongodb');
}).catch((err)=> {
    console.log(err);
});

// buat schema untuk user
const userSchema = new mongoose.Schema({
    name: String,
    addresses : [{
        street:String,
        city: String,
        country:String,
    }]
});

// buat model untuk user diatas
const User = mongoose.model('User', userSchema);

// buat data user
const makeUser = async () => {
    const  user = new User({
    name: 'Hamdi Azi',
    })
    user.addresses.push({
        street:'123 Main St',
        city: 'Anytown',
        country : 'USA'
    });
     console.log(user);
}
makeUser();



