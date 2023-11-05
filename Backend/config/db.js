const mongoose = require("mongoose");

//mongoose.connect('mongodb+srv://Kasturi:rcmiTom6ESArONVq@cluster0.sttm2ip.mongodb.net/')
// mongoose.connect('mongodb://127.0.0.1:27017/Book-Store');

mongoose.connect('mongodb+srv://Kasturi:rcmiTom6ESArONVq@cluster0.sttm2ip.mongodb.net/?retryWrites=true&w=majority')


const db = mongoose.connection;

db.on('error',(error)=>{
    console.log('error to connecting with database')
})

db.once('open',function(){
    console.log('Successfully connected to database');
})


// rcmiTom6ESArONVq