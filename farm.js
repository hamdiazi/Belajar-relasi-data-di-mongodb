// require library mongoose
const mongoose = require('mongoose');


// connect mongoose to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/farm_db').then
((result)=> {
    console.log('connected to mongodb');
}).catch((err)=> {
    console.log(err);
});

// schema untuk data product
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season : {
        type: String,
        enum :['spring', 'summer', 'fall','winter']
    }
});

//  schema farm untuk product
const farmSchema = new mongoose.Schema({
    name:String,
    city: String,
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    }]
});

// model untuk product
const Product = mongoose.model('Product', productSchema);


// model untuk farm
const Farm = mongoose.model('Farm', farmSchema);

// Input data product dengan method/object insertMany
// Product.insertMany([
//     {
//         name : 'Melon',
//         price : 2000,
//         season : 'summer'
//     },
//     {
//         name : 'Water Melon',
//         price : 4000,
//         season : 'summer'
//     },
//        {
//         name : 'Kiwi',
//         price : 6000,
//         season : 'summer'
//     },
// ]);

// memasukan data product ke farm berdasarkan filter 
// const makeFarm = async () => {
//     const farm = new Farm ({
//         name : 'Farm',
//         city : 'Anytown',
//     })
//     const melon = await Product.findOne({name : 'Melon'})
//     farm.products.push(melon);
//     await farm.save();
//     console.log(farm);
// }
// makeFarm();

// function untuk tambah data product berdasarkan "id" dari si farm nya 
// const addProduct = async (id) => {
//     const farm = await Farm.findById(id)
//     const Kiwi = await Product.findOne({name : 'Kiwi'})
//     farm.products.push(Kiwi);
//     await farm.save();
//     console.log(farm);
// }
            // id dari Farm nya 
// addProduct('69033507812a140f09ea014b');

// menampilkan data farm tapi detail product nya tidak tampil hanya id aja
// Farm.findOne({name : 'Farm'}).then((farm) => {
//     console.log(farm);
// }).catch((err) => {
//     console.log(err);
// });


// menampilkan data farm dengan detail product ada name, dan lainnya
Farm.findOne({name : 'Farm'}).populate('products', 'name').then((farm) => {
    console.log(farm);
    // bisa dibuat perulangan
    // for (const product of farm.products) {
    //     console.log(product.name);
    // }
}).catch((err) => {
    console.log(err);
});


