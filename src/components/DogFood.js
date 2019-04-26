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

    const { dog, onChange } = this.props;

    const { classes } = this.props;
    console.log(JSON.stringify(dog));
    return (
      <div className="dog-food-div">
        <div>
          <Paper elevation={1} className="paper-spacing">
            <Typography variant="h5" component="h3">
              Dog food per month
            </Typography>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age">Age</InputLabel>
              <Select
                native
                value={dog.age}
                name="age"
                onChange={e => this.props.onChange(e, dog)}
              >
                <option value="" />
                {ageDropdown}
              </Select>
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="activity">Activity</InputLabel>
              <Select
                native
                value={dog.activity}
                name="activity"
                onChange={e => this.props.onChange(e, dog)}
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
                value={dog.weight}
                name="weight"
                onChange={e => this.props.onChange(e, dog)}
                margin="normal"
              />
            </FormControl>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DogFood);
