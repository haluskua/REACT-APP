import React from "react";
import { getAnimals, createAnimal } from "../api/animals";

class Animals extends React.Component {
  state = {
    animals: []
  };

  componentDidMount() {
    this.refreshAnimals();
  }

  refreshAnimals = () => {
    getAnimals().then(animals => {
      this.setState({
        animals
      });
    });
  };

  handleChange = event => {
    // const newState = {}
    // newState[event.target.name] = event.target.value

    // const newState = {
    //   [event.target.name]: event.target.value
    // }

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const animal = {
      name: this.state.name
    };

    this.setState({
      name: ""
    });

    createAnimal(animal).then(newAnimal => {
      this.refreshAnimals();
    });
  };

  render() {
    return (
      <div>
        <p>I have {this.state.animals.length} animals</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button>Save!</button>
        </form>
        <ul>
          {this.state.animals.map(animal => {
            return <li>{animal.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Animals;
