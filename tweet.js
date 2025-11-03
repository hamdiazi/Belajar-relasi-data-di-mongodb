// require library mongoose
const mongoose = require('mongoose');


// connect mongoose to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/tweet_db').then
((result)=> {
    console.log('connected to mongodb');
}).catch((err)=> {
    console.log(err);
});

// schema untuk user 
const userSchema = new mongoose.Schema({
    username : String,
    likes : Number,
});

// schema untuk tweetnya 
const tweetSchema = new mongoose.Schema({
    text : String,
    likes : Number,
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
})

// membuat model untuk user dan tweet schema diatas
const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);


// membuat data user
// const makeTweet =async () => {
//     const user = new User ({
//         username : 'hamdiazi',
//         age : 27
//     })

// membuat data tweet
//     const tweet = new Tweet ({
//         text : 'Hello Tweet 1',
//         likes : 0
//     })
//     tweet.user = user
//     user.save();
//     tweet.save();
// }
// makeTweet();


// =======================================
// Menambah tweet dengan user yang sama
const makeAnotherTweet = async () => {
    
    // find user berdasarkan filter name
    const user = await User.findOne({
        username : 'hamdiazi'
    });
    
    //
    const tweet = new Tweet({
    text: "Hello Tweet 2",
    like: 0,
    });
    tweet.user = user
    tweet.save();
};
// panggil function makeAnotherTweet
// makeAnotherTweet()


// menampilkan tweets berdasarkan Id dan user dengan method .populate
const showTweets = async () => {
    const tweets = await Tweet.findById('69082725f5c3680ba94015be').populate('user')
    console.log(tweets);
}
showTweets()