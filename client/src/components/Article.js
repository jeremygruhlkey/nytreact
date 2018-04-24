import React from "react";

const Article = props => (
<div className="panel panel-default">
    <div className ="panel-heading">
        <h3 className = "headline panel-title">{props.article.headline.main}</h3>
        <button onClick = {() => props.saveOrDelete(props.article)} className = {props.save}>{props.save}</button>
    </div>
  <div className="panel-body">
    {props.article.snippet}    
  </div>
  <div>
      <a href={props.article.web_url}>Visit full article</a>
    </div>
</div>
)

export default Article;