import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import DogFood from './components/DogFood';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dogs: [1] };
  }

  render() {
    const { dogs } = this.state;
    return (
      <div className="app-container">
        {dogs.map(d => (
          <div className="dog-food-cont" key={`${d}-dogdivkey`}>
            <DogFood key={`${d}-dogkey`} />
          </div>
        ))}
        <Button variant="contained" color="secondary" onClick={this.addDog}>
          Add Dog
        </Button>
      </div>
    );
  }

  addDog = () => {
    const { dogs } = this.state;
    this.setState({ dogs: [...dogs, dogs.length + 1] });
  };
}

export default App;
