module.exports = function products(DL) {

    return {//CRUD
        /*חיפוש
        -ברקוד readOne v
        -תיאור שם v
        
        סינון
        -מחיר
        -קטגוריה
        
        */
        create: async(data) => {
            const { barcode} = data
            let dlReaturn = await DL.getOneProductByBarcode(barcode)
            if (!dlReaturn[0])
                return DL.createProducts(data)
            throw 'barcode exists'
                         
        },

        read: () => {
            return DL.getProducts()
        },

        readOneByPrice:(data)=>{
           return DL.getAndFilterAndByPrice(data)
        },

        readOneByCategory:(Category)=>{
            return DL.getAndFilterByCategory(Category)
        },


        readOne: async (barcode) => {
            let dlReaturn = await DL.getOneProductByBarcode(barcode)
            if (dlReaturn[0])
                return dlReaturn
            throw 'barcode dos not exist'
        },

        update: async (data) => {
            let dlReaturn = await DL.updatePrice(data)
            if (dlReaturn)
                return dlReaturn
            throw 'barcode dos not exist'

        },

        delete: async(data) => {
            const { barcode } = data
            let dlReaturn = await DL.getOneProductByBarcode(barcode)
            if (dlReaturn[0])
                return DL.deleteItem(barcode)
            throw 'barcode exists'
                        
        }
    }


}