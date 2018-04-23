import React from "react";

const Article = props => (
<div className="panel panel-default">
    <div className ="panel-heading">
        <h3 className = "headline panel-title">{props.headline}</h3>
        <button onClick = {props.saveArticle} className = "save" headline = {props.headline} snippet = {props.snippet } data-url = {props.url}>Save</button>
    </div>
  <div className="panel-body">
    {props.snippet}    
  </div>
  <div>
      <a href={props.url}>Visit full article</a>
    </div>
</div>
)

export default Article;