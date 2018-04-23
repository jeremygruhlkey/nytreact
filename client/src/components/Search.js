import React, {Component} from "react";
import API from "../utils/API"
import Input from "./input.js"
import Article from "./Article.js"

class Search extends Component {
    state = {
        articles: [],
        topic: "",
        startYear: "",
        endYear: ""
    };

    handleInputChange = event => {
        console.log(event.target.placeholder)
        const {name, value} = event.target;
        console.log(event.target)
        console.log(value)
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.findArticles(this.state.topic, this.state.startYear, this.state.endYear)
        .then(res => {
            this.setState({
                articles: res.data
            })
            console.log(this.state.articles)})
        .catch(err => console.log(err));
    };

    saveArticle = event => {
        console.log("save pressed")
        console.log(this.props.headline)
        console.log(event.target.headline)
        const {headline, snippet} = event.target;
        console.log(headline)
    }

    render(){
        return (
            <div>
                <div className = "well well-lg">
                    <form>
                    <Input
                        value = {this.state.topic}
                        onChange = {this.handleInputChange}
                        name = "topic"
                        placeholder = "Topic"
                        />
                    <Input
                        value = {this.state.startYear}
                        onChange = {this.handleInputChange}
                        name = "startYear"
                        placeholder = "Start Year"
                        />
                    <Input
                        value = {this.state.endYear}
                        onChange = {this.handleInputChange}
                        name = "endYear"
                        placeholder = "End Year"
                        />
                    <button onClick = {this.handleFormSubmit} className = "submit">Submit</button>
                    </form>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Discovered Articles</h3>
                    </div>
                    <div className = "panel-body">
                        {this.state.articles.map((article, index) => {
                            return (
                                <Article 
                                    key = {index} 
                                    date = {article.pub_date}
                                    headline = {article.headline.main}
                                    snippet = {article.snippet}
                                    url = {article.web_url}
                                    saveArticle = {this.saveArticle}
                                    />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;