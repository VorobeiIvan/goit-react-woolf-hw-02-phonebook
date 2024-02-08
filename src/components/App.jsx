//App.jsx
import React, { Component } from 'react';
import Section from "./Section";
import ContactForm from './ContactForm';
import ContactList from './ContactList'
import Filter from "./Filter"
import './main.css';

class App extends Component {
  state = {
    contacts: [],
  }

  formSubmitHandler = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data]
    }));
  }

  
  render() {
    return (
      <div className='container'>
        <Section title="Phoneboock">
           <ContactForm contacts={this.state.contacts} onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacs">
          <Filter contacts={this.state.contacts}/>
           <ContactList contacts={this.state.contacts} />
        </Section>
      </div>
    );
  }
}

export default App;
