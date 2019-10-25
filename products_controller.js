

// Inside of each method, use the correct SQL file.
// create -> create_product.sql.
// getOne -> read_product.sql.
// getAll -> read_products.sql.
// update -> update_product.sql.
// delete -> delete_product.sql.

// module.exports = {
//     create: (req, res, next ) => {
//         const dbInstance = req.app.get('db')
//     }

//     getOne: (req, res, next ) => {
//         const dbInstance = req.app.get('db')
//     }

//     getAll: (req, res, next ) => {
//         const dbInstance = req.app.get('db')
//     }

//     update: (req, res, next ) => {
//         const dbInstance = req.app.get('db')
//     }

//     delete: (req, res, next ) => {
//         const dbInstance = req.app.get('db')
//     }
// }

module.exports = {
create: (req, res, next) => {
    const dbInstance = req.app.get('db')
    const {name, description, price, image_url} = req.body

    dbInstance.create_product([name, description, price, image_url])
    .then ( () => res.sendStatus(200))
    .catch ( err => {res.status(500).send({errorMessage: "Error from create_product"})
    console.log(err)
})
},

getOne: (req, res, next) => {
    const dbInstance = req.app.get('db')

    dbInstance.read_product(id)
    .then (() => res.sendStatus(200))
    .catch ( err => {res.status(500).send({errorMessage: "Error from read_product"})})
},

getAll: (req, res, next) => {
    const dbInstance = req.app.get('db')

    dbInstance.read_products()
    .then (() => res.sendStatus(200))
    .catch ( err => {res.status(500).send({errorMessage: "Error from read_products - all"})})
},

update: (req, res, next) => {
    const dbInstance = req.app.get('db')
    const { params, query } = req

    dbInstance.update_product([params.id, query.desc])
    .then (() => res.sendStatus(200))
    .catch ( err => {res.status(500).send({errorMessage: "Error from update_product"})})
},

deleteOne: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params //error 500 cuz id wasn't defined

        dbInstance.delete_product(id) //removed params id for id  
        .then (() => res.sendStatus(200))
        .catch ( err => {res.status(500).send({errorMessage: "Error from delete_product"})})
    }

}


//tested POST - 200 good
// {
// 	"name": "John Wick",
// 	"description": "Black 2PC Suit",
// 	"price": 800,
// 	"image_url": "https://moviefashion.b-cdn.net/wp-content/uploads/2018/12/john-wick-suit-for-sale.jpg"
// }