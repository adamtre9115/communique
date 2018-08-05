module.exports = {
    // database: 'mongodb://localhost:27017/communiqe',
    database: `mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@ds163232.mlab.com:63232/communique`
}