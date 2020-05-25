module.exports = function products(DL) {

    return {//CRUD
        create: (data) => {
            const { barcode, name, price, description} = data
            return DL.createProducts(data)
        },

        read: (data) => {
            const { barcode, name, price } = data
            return DL.getProducts()
        },

        update: (data) => {
            const { barcode, newPrice } = data
            return DL.updatePrice(barcode, newPrice)
        },

        delete: (data) => {
            const { barcode } = data
            return DL.deleteItem(barcode)
        }
    }


}