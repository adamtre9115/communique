const Articles = require('../models/articles')

module.exports = {
    // pull all articles related with logged user
    getArticles: function(user, callback){
        Articles.find({userName: user}, callback)
    },
    // save user selected articles to db
    saveArticles: function(newArticles, callback){
        newArticles.save(callback)
    }
}