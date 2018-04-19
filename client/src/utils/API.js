import axios from "axios";

export default {

    findArticles: function(topic, startYear, endYear) {
        console.log("looking");
        return axios.get("/api/v1/getarticles/" + topic +"&" + startYear + "&" + endYear)
    },
}