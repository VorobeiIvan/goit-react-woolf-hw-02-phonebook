const NumberInput = () => {
  return (
    <div className="wrapper">
      <label className="label" name="number">Number</label>
      <input
       className="input"
        type="tel"
        name="number"
        pattern="^\+?\d{1,4}[ .-]?\(?\d{1,3}?\)?[ .-]?\d{1,4}[ .-]?\d{1,4}[ .-]?\d{1,9}$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </div>
  );
}

export default NumberInput