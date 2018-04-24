import React, {Component} from "react";
import API from "../utils/API"
import Article from "./Article.js"

class Saved extends Component {
    state = {
        savedArticles: []
    };

    componentWillMount() {
        // API call to retrieve saved articles
        //update state
        API.getSavedArticles()
        .then(res => {
                this.setState({
                    savedArticles: res.data
                })
                console.log(res.data)
                console.log(this.state.savedArticles)
            }
        ).catch(err => {
            console.log(err)
        })
    }

    deleteArticle = id => {
        console.log("delete pressed")
        // API call to delete article by id
    };

    loadSavedArticles = () => {
        // API call to load saved articles
        //update state
    }

    render() {
        return(
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">Saved Articles</h3>
            </div>
            <div className = "panel-body">
                {this.state.savedArticles.map((article, index) => {
                    return (
                        <Article 
                            key = {index} 
                            article = {article}
                            saveOrDelete = {this.deleteArticle}
                            buttonText = "Delete"
                            />
                    )
                })}
            </div>
        </div>
        )
    }
}

export default Saved