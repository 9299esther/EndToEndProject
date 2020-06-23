module.exports = function products(DL) {

    return {//CRUD
        /*:חיפוש v ביחד
        -ברקוד readOne v
        -תיאור שם v
        -מחירv
        -קטגוריהv
        -מותגv
        -תגיותv
        
        :סינוןV
        -שםV
        -מחיר +-V
        
        */
        create: async (data) => {
            const { barcode } = data
            let dlReaturn = await DL.getOneProductByBarcode(barcode)
            if (!dlReaturn[0])
                return DL.createProducts(data)
            throw 'barcode exists'

        },

        read: () => {
            return DL.getProducts()
        },

        readOneByPrice: ( to) => {
            return DL.getAndFilterAndByPrice( to)
        },

        readOneByCategory: (Category) => {
            return DL.getAndFilterByCategory(Category)
        },

        readOneByBrand: (brand) => {
            return DL.getAndFilterByBrand(brand)
        },

        readOneByTags: (tags) => {
            return DL.getAndFilterByTags(tags)
        },

        readOne: async (data) => {
            let dlReaturn = await DL.getOneProductByBarcode(data)
            if (dlReaturn[0])
                return dlReaturn
            throw 'barcode dos not exist'
        },

        sortByPrice: () => {
            return DL.getAndSortByPrice()
        },

        sortByPriceForomHigh: () => {
            return DL.getAndSortByPriceFromHigh()
        },

        sortByName: () => {
            return DL.getAndSortByName()
        },

        update: async (data) => {
            let dlReaturn = await DL.updatePrice(data)
            if (dlReaturn)
                return dlReaturn
            throw 'barcode dos not exist'

        },

        delete: async (data) => {
            const { barcode } = data
            let dlReaturn = await DL.getOneProductByBarcode(barcode)
            if (dlReaturn[0])
                return DL.deleteItem(barcode)
            throw 'barcode dos not exist'

        }
    }


}