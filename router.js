const BL = require('./BL')
function Router(app) {

    app.get('/', (req, res) => {
        res.send(`<h1>Hello world</h1>`)
    })
    app.post('/prduct', async (req, res) => {//all
        try {
            const { body } = req

            const result = await BL.products.create({
                date:body.data,
                barcode: body.barcode,
                name: body.name,
                price: body.price,
                department: body.department,
                category: body.category,
                image: body.image,
                brand: body.brand,
                tags: body.tags,
                description: body.description
            })
            res.send(result)//http://localhost:1111/prduct //[{...}]
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.get('/prduct', async (req, res) => {
        try {
            const result = await BL.products.read()
            res.send(result) //http://localhost:1111/prduct //[]
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.get('/prductFilter/category/:category', async (req, res) => {//סינון לפי קטגוריה
        try {
            const { category } = req.params
            const result = await BL.products.readOneByCategory(category)
            res.send(result) //http://localhost:1111/prductFilter/category/categoryName 
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.get('/prductFilter/brand/:brand', async (req, res) => {//סינון לפי קטגוריה
        try {
            const { brand } = req.params
            const result = await BL.products.readOneByBrand(brand)
            res.send(result) //http://localhost:1111/prductFilter/brand/brandName 
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.get('/prductFilter/tags/:tags', async (req, res) => {//סינון לפי קטגוריה
        try {
            const { tags } = req.params
            const result = await BL.products.readOneByTags(tags)
            res.send(result) //http://localhost:1111/prductFilter/tags/tagName 
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.get('/prductFilter/price/:to', async (req, res) => {//סינון לפי מחיר
        try {
            const { to } = req.params
            //const { from,to } = req.body
            const result = await BL.products.readOneByPrice(to)
            res.send(result) //http://localhost:1111/prductFilter
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.get('/prduct/:data', async (req, res) => {//חיפוש לפי ברקוד/תיאור שם 
        try {
            const { data } = req.params
            const result = await BL.products.readOne(Number(data) ? Number(data) : data)
            res.send(result) //http://localhost:1111/prduct/barcode //[]
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.get('/sortByPrice', async (req, res) => {
        try {
            const result = await BL.products.sortByPrice()
            res.send(result) //http://localhost:1111/sortByPrice //[]
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.get('/sortByPriceFromHigh', async (req, res) => {
        try {
            const result = await BL.products.sortByPriceForomHigh()
            res.send(result) //http://localhost:1111/sortByPriceFromHigh //[]
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.get('/sortByName', async (req, res) => {
        try {
            const result = await BL.products.sortByName()
            res.send(result) //http://localhost:1111/sortByName //[]
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.put('/prduct', async (req, res) => {
        try {
            const { body } = req
            const result = await BL.products.update({ barcode: body.barcode, price: body.price })
            res.send(result)//http://localhost:1111/prduct 
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.delete('/prduct', async (req, res) => {
        try {
            const { body } = req
            const result = await BL.products.delete({ barcode: body.barcode })
            res.send(result) //http://localhost:1111/prduct //[]
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })
}
module.exports = Router