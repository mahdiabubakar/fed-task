import React, { useState } from 'react';

const SignUp = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    developer: '',
    teacher: '',
    password: '',
  });

  const [form, setForm] = useState(false);

  const { name, email, developer, teacher, password } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // const emailPattern = /\S+@\S+\.\S+/;

  const showPass = () => {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  };

  return (
    <div className='form-overlay'>
      <div className='form-container'>
        <div className='top'>
          <p>Step 1 of 3</p>
          {'  '}
          <span>. . .</span>
        </div>
        <form>
          <div className='form-head'>
            <h1>Let's set up your account</h1>
            <p>
              Already have an account? <a href='#!'> Sign in </a>
            </p>
          </div>
          <div className='Fieldset'>
            <input
              type='text'
              className='Before-FS'
              name='name'
              value={name}
              min='3'
              required
              onChange={onChange}
            />
            <h1 className='Fs-H'>
              <span>Your name</span>
            </h1>
            <label
              className='placeholder'
              style={{ display: name.length > 0 ? 'none' : 'block' }}>
              Your name
            </label>
          </div>
          <div className='Fieldset'>
            <input
              type='email'
              className='Before-FS'
              name='email'
              value={email}
              onChange={onChange}
              required
            />
            <h1 className='Fs-H'>
              <span>Email address</span>
            </h1>
            <label
              className='placeholder'
              style={{ display: email.length > 0 ? 'none' : 'block' }}>
              Email address
            </label>
            <p className='error-password'>Please enter a valid email address</p>
          </div>
          <div>
            <select name='job-title' defaultValue='user-type' required>
              <option value='user-type' disabled>
                I would describe my user type as
              </option>
              <option name='developer' value={developer}>
                Developer
              </option>
              <option name='teacher' value={teacher}>
                Teacher
              </option>
            </select>
          </div>
          <div className='Fieldset'>
            <input
              type='password'
              className='Before-FS'
              name='password'
              value={password}
              onChange={onChange}
              id='password'
              required
            />
            <h1 className='Fs-H'>
              <span>Password</span>
            </h1>
            <label
              className='placeholder'
              style={{ display: password.length > 0 ? 'none' : 'block' }}>
              Password
            </label>
            <i
              onClick={() => showPass()}
              class='fas fa-eye'
              style={{
                float: 'right',
                padding: '9px',
                cursor: 'pointer',
                position: 'relative',
                top: '-75px',
              }}
            />
            <p>Minimun of 8 charracters</p>
          </div>
          <div>
            <input type='submit' value='Next' className='submit' />
          </div>
          <div>
            <p>
              Bt clicking the "Next" button, you agree to create a free account,
              and the <a href='#!'>Terms of Service</a> and{' '}
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
