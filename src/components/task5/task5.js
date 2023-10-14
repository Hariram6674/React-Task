import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import {Working} from './working.js';
import './styling.css';


export class Task5 extends Component {
  constructor() {
    super();
    this.state = {
      newDate: '',
      birthday: '1985-08-05',
      showStats: false 
    };
  }

  changeBirthday() {
    console.log(this.state);
    this.setState({ birthday: this.state.newDate, showStats: true }); 
  }

  render() {
    return (
      <div style={{height:'650px'}} className='mt-5'>
        <Form>
          <h2>Input Your Birthdate</h2>
          <FormControl
            className='control'
            type='date'
            onChange={event => this.setState({ newDate: event.target.value })}
          />
          {''}
          <div className="d-flex justify-content-center align-items-center">
            <Button className="button" onClick={() => this.changeBirthday()}>
              Submit
            </Button>
          </div>
          {this.state.showStats ? (
            <div>
              <Working date={this.state.birthday} />
            </div>
          ) : (
            <div />
          )}
        </Form>
      </div>
    );
  }
}

