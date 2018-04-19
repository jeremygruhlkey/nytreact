const router = require("express").Router();
const axios = require("axios")
// const articlesController = require("..controllers/articelsController")
const authKey = "a46da05d03e24597961ee5ca16cace61"

router.get("/api/v1/getarticles/:topic&:startYear&:endYear", (req,res) => {
    let searchURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=" + req.params.topic + "&begin_date=" + req.params.startYear + "0101"
    + "&end_date=" + req.params.endYear + "0101";
    // let searchURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    //     searchURL += '?' + $.param({
    //     'api-key': "a46da05d03e24597961ee5ca16cace61",
    //     'q': "obama",
    //     'begin_date': "20110101",
    //     'end_date': "20120101"
    //     });
    let articles =[];
    axios({
        method: "get",
        url: searchURL
    }).then(function(result){
        // console.log(result.data.response.docs)
        articles = result.data.response.docs
        console.log(articles)
        res.json(articles)
    }).catch(function(err){
        throw err;
    })
   
})


module.exports = router;