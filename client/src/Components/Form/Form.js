import React, { Component } from "react";

class Form extends Component {
  state = {
    topic: "",
    start: "",
    end: "",
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault(); 
    this.props.updateStateArticles(this.state);
  }

  render() {
    return(
      <form>
        <div className="form-group">
          <label htmlFor="topic">Topic</label>
          <input
            type="string" 
            className="form-control"  
            name="topic"
            placeholder="Topic"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="start">Start Date</label>
          <input
            type="date"
            className="form-control"
            name="start"
            placeholder="Start Date"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="end">End Date</label>
          <input
            type="date"
            className="form-control"
            name="end"
            placeholder="End Date"
            onChange={this.handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-default"
          onClick={this.handleFormSubmit}
          >Submit
        </button>
      </form>
    )
  }
}

export default Form;