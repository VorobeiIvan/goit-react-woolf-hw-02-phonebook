import React, {Component} from 'react'
import Section from "./Section"
import ContactForm from './ContactForm'
import Notification from './Notificatioon'
import './main.css';

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  // if (isExist) {
  //   alert(`${name} is already in contacts.`);
  //   return
  // }

  render(){
    const {name}=this.state;
    return(
      <div className='container'>
        <Section title="Phoneboock">
        <ContactForm/>
      {name && <Notification message={`${name} is already on contacts`} />}
       </Section>
     
       <Section title="Contacts">
       
       </Section>
         </div>
    )
  }

  
};

export default App