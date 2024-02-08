const ContactList = ({ contacts }) => {
  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <li key={contact.id} className="contact-item">
          {contact.name}: {contact.number}
          <button className="btn-del">Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
