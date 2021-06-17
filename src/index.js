import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };

    this.addPerson = this.addPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

  addPerson(name, email) {
    this.setState(prevState => ({
      people: [...prevState.people, { name, email }]
    }));
  }



  deletePerson(email) {
    return () => {
      this.setState(prevState => ({
        people: prevState.people.filter(person => person.email !== email)
      }));
    };
  }

  render() {
  
    return (
      <div >
        <Form addPerson={this.addPerson} />
        <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}} >
          <thead>
            <tr>

              <th>Name</th>
              <th>EMAIL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map((person, index) => {
              return (
                <tr key={person.email}>
    
                  <td>{person.name}</td>
                  <td>{person.email}</td>
                  <td>
                    <button onClick={this.deletePerson(person.email)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
