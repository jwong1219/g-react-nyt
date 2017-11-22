import React from "react";
import api from "../../Utils/api.js";

const Article = (props) => (

  <div className="well well-lg">
    <h4>{props.title}</h4>
    <p>{props.date}</p>
    <a href={props.url} target="_blank"><button className="btn btn-default pull-right">View Article</button></a>
    <button className="btn btn-primary pull-right" onClick={() => api.saveArticle(props)}>Save</button>
  </div>

)
export default Article;