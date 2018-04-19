import React from "react";

const Article = props => (
<div className="panel panel-default">
  <div className="panel-body">
    {props.snippet}
    <button className = "save">Save</button>
  </div>
</div>
)

export default Article;