import React, { Component } from "react";
import "./App.css";

class Form extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
    this.state = {
      name: "",
      email: "",
    };
  }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;

    this.props.addPerson(this.state.name, this.state.email);
    this.setState({ email: "", name: "" });
    form.reset();
  }

  render() {
    return (
      <form onSubmit={this.formSubmit} className="form">
        <div className="name">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => {
              e.preventDefault();
              this.setState({ name: e.target.value });
            }}
          ></input>
        </div>
        <div className="email">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => {
              e.preventDefault();
              this.setState({ email: e.target.value });
            }}
          ></input>
        </div>
        {this.state.email != "" && this.state.name != "" ? (
          <div className="add">
            <input type="submit" value="Add"></input>
          </div>
        ) : (
          <div className="add-level">
            <label htmlFor="" >Add</label>
          </div>
        )}
      </form>
    );
  }
}

export default Form;
