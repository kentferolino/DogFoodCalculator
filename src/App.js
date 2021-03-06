import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import DogFood from './components/DogFood';
import Result from './components/Result';
import _ from 'lodash';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodValue: 0,
      dogs: [{ id: 1, age: null, activity: null, weight: null }]
    };
  }

  onChange = (e, dog) => {
    e.preventDefault();

    const { dogs } = this.state;
    const selectedDog = dogs.find(e => {
      return e.id === dog.id;
    });

    const updatedDog = { ...selectedDog, [e.target.name]: e.target.value };

    const dogsFiltered = dogs.filter(e => {
      return e.id !== dog.id;
    });

    const allDogs = [...dogsFiltered, updatedDog];

    const sortedDogs = _.orderBy(allDogs, ['id'], ['asc']);
    this.setState({ dogs: sortedDogs });
  };

  calculate = () => {
    const { dogs } = this.state;

    let val = 0;
    let error = false;
    dogs.map(dog => {
      const dogVal =
        (parseFloat(dog.age) + parseFloat(dog.activity)) * dog.weight;
      val += dogVal;
    });

    this.setState({ foodValue: val });
  };

  canBeSubmitted() {
    const { dogs } = this.state;
    let validate = false;
    dogs.map(dog => {
      const t1 = isNaN(parseFloat(dog.age));
      const t2 = !dog.age;
      const t31 = isNaN(parseFloat(dog.activity));
      const t4 = !dog.activity;
      const t5 = isNaN(dog.weight);
      const t6 = !dog.weight;
      debugger;
      if (
        isNaN(parseFloat(dog.age)) ||
        !dog.age ||
        isNaN(parseFloat(dog.activity)) ||
        !dog.activity ||
        isNaN(dog.weight) ||
        !dog.weight
      ) {
        validate = true;
      }
    });
    return !validate;
  }

  render() {
    const { dogs, foodValue } = this.state;
    const isEnabled = this.canBeSubmitted();
    return (
      <div className="app-container">
        {dogs.map(d => (
          <div className="dog-food-cont" key={`${d.id}-dogdivkey`}>
            <DogFood
              key={`${d.id}-dogkey`}
              dog={d}
              onChange={e => this.onChange(e, d)}
            />
          </div>
        ))}
        <Button variant="contained" color="secondary" onClick={this.addDog}>
          Add Dog
        </Button>{' '}
        &nbsp;
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isEnabled}
          onClick={this.calculate}
        >
          Calculate
        </Button>
        <Result foodValue={foodValue} />
      </div>
    );
  }

  addDog = () => {
    const { dogs } = this.state;
    const newDog = {
      id: dogs.length + 1,
      age: null,
      activity: null,
      weight: null
    };
    this.setState({ dogs: [...dogs, newDog] });
  };
}

export default App;
