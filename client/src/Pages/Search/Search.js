import React, { Component } from "react";
import Article from "../../Components/Article";
import Form from "../../Components/Form";
import api from "../../Utils/api.js";

export default class Search extends Component {
  state = {
    articles: []
  }

  updateStateArticles = (props) => {
    const query={
      topic: props.topic,
      start: props.start.replace(/-/g, ""),
      end: props.end.replace(/-/g, ""),
    }
    
    api.searchArticles(query).then((response) => {
      this.setState({
        articles: response.data.response.docs
      })
    })
  } 

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Search for Articles</h3>
          </div>
          <div className="panel-body">
            <Form updateStateArticles={this.updateStateArticles} />
          </div>
        </div>
      </div>
    )
  }
}
