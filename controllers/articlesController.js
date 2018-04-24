const db = require("../models")

module.exports = {
    findSaved: function(req, res ){
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
                snippet: req.body.snippet,
                url: req.body.url
            }
        ).then(result => {
            res.json(result)
        }).catch(err => console.log(err))
    },

    deleteSaved: function(req, res){
        console.log("test deleting article")
        console.log(req.params.id)
        db.Article.deleteOne({
            _id: req.params.id
        }).then(result => {
            res.json(result)
        }).catch(err => {
            console.log(err)
        })
    }
}