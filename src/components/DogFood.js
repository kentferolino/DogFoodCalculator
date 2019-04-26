import React from 'react';
import { array_ageDropdown, array_activityDropdown } from '../constants';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Result from './Result';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

class DogFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: null,
      activity: null,
      weight: null,
      foodValue: 0
    };
  }

  render() {
    const ageDropdown = array_ageDropdown.map((age, index) => (
      <option key={`${index}agekey`} value={age.value}>
        {age.label}
      </option>
    ));

    const activityDropdown = array_activityDropdown.map((act, index) => (
      <option key={`${index}actkey`} value={act.value}>
        {act.label}
      </option>
    ));

    const { age, activity, weight, foodValue } = this.state;

    const { classes } = this.props;
    return (
      <div className="dog-food-div">
        <div>
          <Paper elevation={1} className="paper-spacing">
            <Typography variant="h5" component="h3">
              Dog food per month
            </Typography>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age">Age</InputLabel>
              <Select native value={age} name="age" onChange={this.onChange}>
                <option value="" />
                {ageDropdown}
              </Select>
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="activity">Activity</InputLabel>
              <Select
                native
                value={activity}
                name="activity"
                onChange={this.onChange}
              >
                <option value="" />
                {activityDropdown}
              </Select>
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <TextField
                id="weight"
                label="Weight"
                className={classes.textField}
                placeholder="weight (lbs)"
                value={weight}
                name="weight"
                onChange={this.onChange}
                margin="normal"
              />
            </FormControl>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.calculate}
              >
                Calculate
              </Button>

              <Result foodValue={foodValue} />
            </div>
          </Paper>
        </div>
      </div>
    );
  }
  calculate = () => {
    const { age, activity, weight } = this.state;
    const val = (parseFloat(age) + parseFloat(activity)) * weight;
    this.setState({ foodValue: val });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
}

export default withStyles(styles)(DogFood);
