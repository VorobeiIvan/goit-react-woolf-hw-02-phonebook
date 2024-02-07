import NameInput from './NameInput';
import NumberInput from './NumberInput'

const ContactForm = () => {
    return (
      <form className="form">
        <NameInput />
        <NumberInput />
        <button className='btn-add' type="submit">Add contact</button>
      </form>
    );
  }
  
  export default ContactForm