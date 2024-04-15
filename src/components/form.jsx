const Form = () => {
  return (
    <>
      <p
        style={{
          textAlign: "center",
          fontSize: "2em",
          padding: "1em",
          fontWeight: "400",
        }}
      >
        Ready to take a free trail?
      </p>
      <p style={{ textAlign: "center", padding: "0 2em" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem
        nemo similique qui? Molestiae veritatis earum fugiat. Eligendi, nulla
        nam.
      </p>
      <form>
        <div className="form_container">
          <h1>Sign up for a free account</h1>
          <div className="name_container">
            <input
              type="text"
              className="name"
              id="firstname"
              placeholder="First name"
            />
            <input
              type="text"
              className="name"
              id="lastname"
              placeholder="Last name"
            />
          </div>
          <input type="email" id="email" placeholder="Email" />
          <input type="password" id="password" placeholder="Password" />
          <button type="submit" className="btn">
            Create New Account
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
