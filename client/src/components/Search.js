import React, {Component} from "react";
import API from "../utils/API"
import Input from "./input.js"

class Search extends Component {
    state = {
        topic: "",
        startYear: "",
        endYear: ""
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        API.findArticles(this.state.topic, this.state.startYear, this.state.endYear)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    render(){
        return (
            <div>
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
            </div>
        )
    }
}

export default Search;