

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
    .catch ( err => {res.status(500).send({errorMessage: "Error from create_product"})})
},

getOne: (req, res, next) => {
    const dbInstance = req.app.get('db')

    dbInstance.read_product([params.id])
    .then (() => res.sendStatus(200))
    .catch ( err => {res.status(500).send({errorMessage: "Error from read_product"})})
},

getAll: (req, res, next) => {
    const dbInstance = req.app.get('db')

    dbInstance.read_products()
    .then (() => res.sendStatus(200))
    .catch ( err => {res.status(500).send({errorMessage: "Error from read_product"})})
},

update: (req, res, next) => {
    const dbInstance = req.app.get('db')

    dbInstance.update_product([params.id, query.desc])
    .then (() => res.sendStatus(200))
    .catch ( err => {res.status(500).send({errorMessage: "Error from update_product"})})
},

deleteOne: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.delete_product([params.id])
        .then (() => res.sendStatus(200))
        .catch ( err => {res.status(500).send({errorMessage: "Error from delete_product"})})
    }

}