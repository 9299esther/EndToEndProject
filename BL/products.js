module.exports = function products(DL) {

    return {//CRUD
        //todo  validichion
        create: (data) => {
            const { barcode, name, price, department, category, image, brand, tags, description} = data
            return DL.createProducts(data)
        },

        read: (data) => {
            const { barcode, name, price } = data
            return DL.getProducts()
        },

        update: (data) => {
            return DL.updatePrice(data)
        },

        delete: (data) => {
            const { barcode } = data
            return DL.deleteItem(barcode)
        }
    }


}