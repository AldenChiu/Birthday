import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from './changeDate';
import LargeText from './largeText';

import moment from 'moment';

export default class App extends Component {
  
  constructor(props) {
    super(props)

    this.timer = 0;

    this.state = {
      active: false,
      startDate: moment(),
      timeRemaining: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }

    this.handleGenerate = this.handleGenerate.bind(this)
  }

  handleChange = function(date) {
    console.log('APP JS HANDLE CHANGE', date._d);
    this.setState({
    startDate: date
    });
  }.bind(this)

  handleGenerate = function() {
    this.setState({ active: true })
      // Set the date we're counting down to
    var countDownDate = this.state.startDate.toDate().getTime();

    // Update the count every 1 second
    this.timer = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the results in a n element with id="demo"
    const time = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      const timeRemaining = {
          days,
          hours,
          minutes,
          seconds
        }
        this.setState({ timeRemaining })

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(this.timer);
      //document.getElementById("demo").innerHTML = "EXPIRED";
    }
}.bind(this), 1000);
  }.bind(this)
  
  renderItems = function() {
    if(this.state.active) {
      return [
        <Clock timeRemaining={this.state.timeRemaining}/>,
        ChangeDate('Change Date', () => this.setState({active: false})),
        LargeText('7/10'),
        <label className="grid__remaining">You have 80 days left until your 16th birthday!</label>
      ]
    } else {
      return [
        <Picker startDate={this.state.startDate} callback={(date) => this.handleChange(date)}/>,
        Button('Generate Countdown', () => this.setState({ active: true }))
      ]     
    }
  }.bind(this)

  render() {
    return (
      <div className="grid">
        <h1 className="grid__title">Birthday Countdown</h1>

        <div className="grid__skew-dark-two"></div>
        <div className="grid__skew-dark-three"></div>
        <div className="grid__skew-light-one"></div>
        <div className="grid__skew-light-two"> </div>
        <div className="grid__skew-light-three-box"> </div>

        { this.renderItems() }

      </div>
    );
  }
}
