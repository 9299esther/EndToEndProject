const mongoose = require('mongoose')

mongoose.connect(
    process.env.MCS,
    {
        auto_reconnect: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
    , (err) => {
        if (err) throw 'mongo connection problem'
        else console.log('mongo connected');
    })

const productsSchema = {
    date:Date,
    barcode: Number,
    name: String,
    price: Number,
    department: String,
    category: String,
    image: String, 
    brand: String,
    tags: String,
    description: String,
}

const productsModel = mongoose.model('product', productsSchema) //can access the modle through this function

const createProducts = async (data) => {
    return productsModel.create(data)
}

const getProducts = async () => {
    return productsModel.find({}, 'date barcode name price image category description brand tags ')
}


const getAndFilterAndByPrice = ( to) => {
    return productsModel.find({ price: { '$gt': 0, '$lt': to } }, 'barcode name price  brand tags')

}

const getAndFilterByCategory = (category) => {
    return productsModel.find({ category }, 'barcode name price category  brand tags')
}

const getAndFilterByBrand = (brand) => {
    return productsModel.find({ brand }, 'barcode name price category brand tags')
}

const getAndFilterByTags = (tags) => {
    return productsModel.find({ tags }, 'barcode name price category brand tags')
}

const getOneProductByBarcode = (barcode) => {
    if (Number(barcode))
        return productsModel.find({ barcode }, 'barcode name price description')
    return productsModel.find({ description:barcode }, 'barcode name price description')

}

const getAndSortByPrice = async () => {
    return productsModel.find().sort('price')
}

const getAndSortByPriceFromHigh = async () => {
    return productsModel.find().sort([['price',-1]])
}

const getAndSortByName = async () => {
    return productsModel.find().sort('name')
}

const updatePrice = async (update) => {
    return productsModel.findOneAndUpdate({ barcode: update.barcode }, { $set: { price: update.price } }, { runValidators: true, new: true })
}

const deleteItem = async (barcode) => {
    return productsModel.deleteOne({ barcode }, (err) => {
        if (err)
            throw err;
    });
}

    module.exports = { createProducts, getProducts,
         getAndFilterAndByPrice, getAndFilterByCategory,
         getAndFilterByBrand,getAndFilterByTags,
          getOneProductByBarcode,getAndSortByPrice,
          getAndSortByPriceFromHigh,getAndSortByName,
           updatePrice, deleteItem }//יצוא