const InputField = () => {
  return (
    <div className="input_field">
      <div className="email">
        <label htmlFor="email">Email</label>
        <input type="text" required />
      </div>
      <div className="password">
        <label htmlFor="password">Password</label>
        <input type="password" required />
      </div>
    </div>
  );
};

export default InputField;
