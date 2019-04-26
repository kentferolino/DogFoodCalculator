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
    const { age, activity, weight, dogs } = this.state;

    let val = 0;

    dogs.map(dog => {
      const dogVal =
        (parseFloat(dog.age) + parseFloat(dog.activity)) * dog.weight;
      val += dogVal;
    });

    this.setState({ foodValue: val });
  };

  render() {
    const { dogs, foodValue } = this.state;
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
        <Button variant="contained" color="primary" onClick={this.calculate}>
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
