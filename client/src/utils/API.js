import axios from "axios";

export default {

    findArticles: function(topic, startYear, endYear) {
        console.log("looking");
        return axios.get("/api/v1/getarticles/" + topic +"&" + startYear + "&" + endYear)
    },

    saveArticle: function(articleInfo){
        console.log("saving")
        return axios.post("/api/v1/newSaved", articleInfo)
    },

    deleteArticle: function(id){
        console.log("deleting id " + id)
        return axios.delete("/api/v1/deleteSaved/" + id)
    },

    getSavedArticles: function(){
        console.log("getting saved articles")
        return axios.get("/api/v1/savedArticles")
    }
}