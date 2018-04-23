const db = require("../models")

module.exports = {
    findAll: function(req, res ){
        console.log("getting articles")
        db.Article.find({})
        .then(dbSaved => {
           res.json(dbSaved)
        })
    },

    newSaved: function(req, res){
        console.log("saving article")
        db.Article.create(
            {
                headline: req.body.headline,
                date: req.body.date,
                snippet: req.body.snippet,
                url: req.body.url
            }
        ).then(result => {
            res.json(result)
        }).catch(err => console.log(err))
    },

    deleteSaved: function(req, res){
        console.log("deleting article")
        db.Article.deleteOne({
            _id: req.params.id
        }).then(result => {
            res.json(result)
        }).catch(err => {
            console.log(err)
        })
    }
}