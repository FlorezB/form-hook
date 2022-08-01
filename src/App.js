import {useState} from "react";

function App() {
  const  [email, setEmail] = useState ('');
  const [isEmailValid, setIsEmailValid] = useState (false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleEmailChange=(e)=>{
    setEmail(e.target.value)
    const regEx = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    // const isValid = regEx.test(value)

  }

  const [password, setPassword] = useState ('');
  const handlePasswordChange=(e)=> {
    setPassword(e.target.value)
    // const isValid = value.length > 5

    // setPassword(value)
    // setIsPasswordValid(isValid)
  }

  const [remember, setRemember] = useState (false);
  const handleRememberMeChange=(e)=> {
    setRemember(e.target.checked)
  }

  return (
      <form className="container mt-5">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className={`form-control ${
                  isEmailValid ? 'is-valid' : 'is-invalid'
                }`} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmailChange}/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className={`form-control ${
                  isPasswordValid ? 'is-valid' : 'is-invalid'
                }`} id="exampleInputPassword1" onChange={handlePasswordChange}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={handleRememberMeChange}
                checked={remember}/>
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  );
}

export default App;
