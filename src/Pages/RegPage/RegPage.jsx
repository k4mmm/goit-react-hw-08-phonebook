import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../Redux/auth/authOperations";

export default function RegPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };
  const hendleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      <form autoComplete="off" onSubmit={submit}>
        <label>
          Name
          <input name="name" value={name} onChange={hendleChange} />
        </label>
        <label>
          Email
          <input name="email" value={email} onChange={hendleChange} />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={hendleChange}
          />
        </label>
        <button type="submit">Register</button>
        Or <Link to="/login">Log In</Link>
      </form>
    </div>
  );
}
