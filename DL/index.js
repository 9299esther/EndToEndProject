const mongoose = require('mongoose')

mongoose.connect(
    'mongodb+srv://admin:1999@cluster0-qqjcq.mongodb.net/test?retryWrites=true&w=majority',
    { auto_reconnect: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false }
    , (err) => {
        if (err) throw 'mongo connection problem'
        else console.log('mongo connected');//בדיקת חיבור
    })//20:26 mongoDB

const productsSchema = {//26:00
    barcode: Number,
    name: String,
    price: Number,
    department: String,
    category: String,
    image: String, /*URL, *///cnot reed url
    brand: String,
    tags: String,
    description: String,
}

const productsModel = mongoose.model('product', productsSchema) //can access the modle through this function

const createProducts = async (data) => {
    return productsModel.create(data)
}

const getProducts = async () => {//31:27
    return productsModel.find({}, 'barcode name price')//איזה עמודות יוצגו ללא פילטור
}

const updatePrice = async (update) => {
    return productsModel.findOneAndUpdate({barcode: update.barcode},{ $set: { price: update.price } }, { runValidators: true, new: true })
} 

const deleteItem = async (barcode) => {
    return productsModel.deleteOne({ 'barcode': barcode }, (err) => {
        if (err)
            throw err;
        else
            console.log('barcode is deleted');
    });
}
module.exports = { createProducts, getProducts, updatePrice, deleteItem }//יצוא