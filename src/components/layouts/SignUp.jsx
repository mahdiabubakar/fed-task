import React, { useEffect, useState } from 'react';

const SignUp = () => {
  // FORM STATE
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    jobTitle: '',
  });

  // SHOW EMAIL STATE
  const [showEmail, setShowEmail] = useState(false);
  // SHOW PASSWORD
  const [showPassword, setShowPassword] = useState(false);
  // CHECK PASSWORD LENGTH STATE
  const [isPassword, setIsPassword] = useState(false);
  // CHECK PASSWORD MATCH STATE
  const [match, setMatch] = useState(true);
  // CHECK NAME IS NOT NUMBER
  const [nameMatch, setNameMatch] = useState(false);
  // CHECK YOU CAN SUBMIT
  const [submit, setSubmit] = useState(true);

  // FORM STATE DESTRUCTURING
  const { name, email, jobTitle, password } = form;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const numberPattern = /\d+/g;

  const checkName = () =>
    name.match(numberPattern) ? setNameMatch(true) : setNameMatch(false);

  // ONCAHNGE HANDLER
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const emailPattern = /^\S+@\S+\.\S+$/;

  // CHECK EMAIL MATCHES THE EMAIL TYPED IN
  const isMatch = () =>
    email.match(emailPattern) ? setMatch(true) : setMatch(false);

  // CHECK PASSWORD LENGTH FUNC
  const chkPassword = () => {
    return password.length >= 8 ? setIsPassword(false) : setIsPassword(true);
  };

  // SHOW / HIDE EMAIL
  const hideEmail = () => {
    setShowEmail(!showEmail);
  };

  // SHOW / HIDE PASSWORD
  const hidePassword = () => {
    setShowPassword(!showPassword);
  };

  // MOUNTED IMMIDIATELY THE COMPONENTS LOADS
  useEffect(() => {
    // CHECK IF YOU CAN SUBMIT
    if (
      name.length >= 3 &&
      !name.match(numberPattern) &&
      email.match(emailPattern) &&
      password.length >= 8 &&
      (jobTitle === 'developer' || 'teacher')
    ) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  }, [email, jobTitle, name, password, emailPattern, numberPattern]);

  return (
    // RENDERING THE FORM
    <div className='form-overlay'>
      <div className='form-container'>
        <div className='top'>
          <p>Step 1 of 3 </p>
          <p style={{ marginLeft: '10px' }}>
            <i class='fas fa-circle' />
            <i class='fas fa-circle' />
            <i class='fas fa-circle' />
          </p>
        </div>
        <form>
          <div className='form-head'>
            <h1>Let's set up your account</h1>
            <p>
              Already have an account? <a href='#!'> Sign in </a>
            </p>
          </div>
          <div style={{ marginBottom: '-30px' }}>
            <div class='fieldset'>
              <input
                type='text'
                class='input'
                required
                name='name'
                value={name}
                onChange={onChange}
                onBlur={checkName}
                // MAKE BORDER RED IF NAME INCLUDES NUMBER
                style={{ border: nameMatch && '1px solid red' }}
              />
              <p className='fieldset-p'>
                {/* MAKE FIELDSET RED IF NAME INCLUDES NUMBER */}
                <span style={{ color: nameMatch && 'red' }}>Your name</span>
              </p>
              <label
                class='placeholder'
                style={{
                  // DISAPEAR PLACEHOLDER ON HOVER
                  display: name.length > 0 && 'none',
                }}>
                Your name
              </label>
            </div>
          </div>
          <div>
            <div class='fieldset'>
              <input
                type='email'
                class='input'
                required
                name='email'
                value={email}
                onChange={onChange}
                onBlur={isMatch}
                style={{
                  // MAKE BORDER RED IF INVALID EMAIL
                  border: !match && '1px solid red',
                }}
              />
              <p className='fieldset-p'>
                {/* MAKE BORDER RED IF INVALID EMAIL */}
                <span style={{ color: !match && 'red' }}>Email address</span>
              </p>
              <label
                class='placeholder'
                style={{ display: email.length > 0 && 'none' }}>
                Email address
              </label>
              <div className='show-hide' onClick={hideEmail}>
                {showEmail ? (
                  <i class='fas fa-eye-slash'></i>
                ) : (
                  <i class='fas fa-eye' />
                )}
              </div>
            </div>
            <p
              // EMAIL ERROR CHECKER
              style={{ display: !match ? 'inline-block' : 'none' }}
              className='error'>
              Please enter a valid email address
            </p>
          </div>
          <div style={{ marginTop: '-20px' }}>
            <div class='fieldset'>
              <select
                name='jobTitle'
                value={jobTitle}
                onChange={onChange}
                required>
                <option value='userType' selected>
                  I would describe my user type as
                </option>
                <option value='developer'>Developer</option>
                <option value='teacher'>Teacher</option>
              </select>
            </div>
          </div>
          <div>
            <div class='fieldset'>
              <input
                type={showPassword ? 'text' : 'password'}
                class='input'
                required
                name='password'
                value={password}
                onChange={onChange}
                onBlur={chkPassword}
                // MAKE BORDER RED IF PASSWORD IS LESSTHAN 8 CHAR
                style={{ border: isPassword && '1px solid red' }}
              />
              <p className='fieldset-p'>
                <span style={{ color: isPassword && 'red' }}>Password</span>
              </p>
              <label
                class='placeholder'
                style={{ display: email.length > 0 && 'none' }}>
                Password
              </label>
              <div className='show-hide' onClick={hidePassword}>
                {showPassword ? (
                  <i class='fas fa-eye-slash'></i>
                ) : (
                  <i class='fas fa-eye' />
                )}
              </div>
            </div>
            <span style={{ fontSize: '12px', color: '#858585' }}>
              Minimun of 8 charracters
            </span>
          </div>
          <div>
            <input type='submit' value='Next' disabled={submit} />
          </div>
          <div>
            <p className='p-small'>
              Bt clicking the "Next" button, you agree to create a free account,
              and the <a href='#!'>Terms of Service</a> and
              <a href='#!'>Pricate Policy</a>
            </p>
          </div>
        </form>
      </div>
      <div className='text-container'>
        <div>
          <h1>Dummy Heading</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus delectus nulla mollitia cum consequuntur recusandae
            obcaecati doloribus repellat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
