import React from "react";
import api from "../../Utils/api.js";

const SaveButton = (props) => (
  <button className="btn btn-primary pull-right" onClick={() => {
    console.log(props);
    api.saveArticle(props);
  }}>Save</button>
)

export default SaveButton