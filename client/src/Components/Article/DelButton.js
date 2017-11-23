import React from "react";
import api from "../../Utils/api.js";

const DelButton = (props) => (
  <button className="btn btn-danger pull-right" onClick={() => {
    console.log(props.id)
    api.remArticle(props.id)
    .then(() => {
      props.getSaved();
    })
    }}>
    Remove
  </button>
)

export default DelButton