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
<<<<<<< HEAD
=======
        _id: false,
>>>>>>> 810a490da066f3b96a399dd2ac06e8f6f56618c9
        street:String,
        city: String,
        country:String,
    }]
});

// buat model untuk user diatas
const User = mongoose.model('User', userSchema);

// buat data user
<<<<<<< HEAD
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



=======
// const makeUser = async () => {
//     const  user = new User({
//     name: 'Hamdi Azi',
//     })
//     user.addresses.push({
//         street:'123 Main St',
//         city: 'Anytown',
//         country : 'USA'
//     })
//     const res = await user.save()
//      console.log(res)
// }
// makeUser();


// menambah data street  
const addAddress =  async (id) => {
    // buat untuk mencari dan merubah data secara id
    const user  = await User.findById(id)
    user.addresses.push({
        street:'Polonia',
        city: 'Medan' ,
        country : 'IDN' 
    })
    //dengan menggunakan methode save artinya data kita aka diarahkan ke db
    const res = await user.save();
    console.log(res);
}


addAddress('68ff9e2e8e1be23d110dce56');
>>>>>>> 810a490da066f3b96a399dd2ac06e8f6f56618c9
