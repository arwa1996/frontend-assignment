// Style
import { FormEvent, FunctionComponent, useState } from "react";
import "./styles/index.scss";

const Task1: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Basic Form Validation
  function isFormValid(){
    if(!email || !password) {
      return false
    }
    return true
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // If you want to do something with form submit

    alert(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <div id="task-1">
      <form onSubmit={onSubmit}>
        <div className="input-container">
          <label>Email</label>
          <input
            name="email"
            type="email"
            required
            onChange={(event) => setEmail(event.currentTarget.value)}
            value={email}
            placeholder="Write your email here..."
          />
        </div>

        <div className="input-container">
          <label>Password</label>
          <input
            name="password"
            minLength={6}
            onChange={(event) => setPassword(event.currentTarget.value)}
            value={password}
            placeholder="Write your password here..."
          />
        </div>

        <button className="main-btn primary-btn" disabled={!isFormValid()}>Login</button>
      </form>
    </div>
  );
};

export default Task1;
