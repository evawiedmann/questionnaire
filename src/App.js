import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import MenteeForm from './components/Mentee/MenteeForm';
import MentorForm from './components/Mentor/MentorForm';
import Splash from './components/Splash';
import Error404 from './Error404';
import Contact from './components/Contact';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentorshipMasterList: []
    };

    this.addMentee = this.addMentee.bind(this);
    this.submitMentee = this.submitMentee.bind(this);
    this.addMentor = this.addMentor.bind(this);
    this.submitMentor = this.submitMentor.bind(this);
  }

  addMentee(event) {
    this.setState({value: event.target.value});
  }

  submitMentee(event) {
    alert('A mentee was submitted: ' + this.state.value);
    event.preventDefault();
  }

  addMentor(event) {
    this.setState({value: event.target.value});
  }

  submitMentor(event) {
    alert('A mentor was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {

    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path='/' render={()=><Splash/>}/>
      <Route path='/MentorForm' render={()=><MentorForm Mentor={this.addMentor}/>}/>
      <Route path='/MenteeForm' render={()=><MenteeForm Mentor={this.addMentee}/>}/>
      <Route path='/Contact' render={()=><Contact/>}/>
      <Route component={Error404} />
      </Switch>
      <Footer/>
      </div>
    );
  }
}

export default App;


//     return (
  //       <form onSubmit={this.handleSubmit}>
  //         <label>
  //           Name:
  //           <input type="text" value={this.state.value} onChange={this.handleChange} />
  //         </label>
  //         <input type="submit" value="Submit" />
  //       </form>
  //     );
  //   }
  // }
