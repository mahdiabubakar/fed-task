import React from 'react';

const Modal = () => {
  return (
    <div className='form-overlay'>
      <div className='form-container'>
        <div className='top'>
          <p>Step 1 of 3</p>
          <span>.</span>
        </div>
        <form>
          <div className='form-head'>
            <h1>Let's set up your account</h1>
            <p>
              Already have an account? <a href='#!'> Sign in </a>
            </p>
          </div>
          <div>
            <input
              type='text'
              name='name'
              className='Before-FS'
              required=''
              autocomplete='off'
            />
            <h1 class='Fs-H'>
              <span>Your Name</span>
            </h1>
            <label class='placeholder'>Your Name</label>
          </div>
          <div>
            <input
              type='password'
              name='email'
              className='Before-FS'
              required=''
            />
            <h1 class='Fs-H'>
              <span>Email Address</span>
            </h1>
            <label class='placeholder'>Email Address</label>
          </div>
          <div>
            <select name='job-title' defaultValue='user-type'>
              <option value='user-type' disabled>
                I would describe my user type as
              </option>
              <option value='developer'>Developer</option>
              <option value='teacher'>Teacher</option>
            </select>
          </div>
          <div>
            <input type='password' name='password' class='Before-FS' required />
            <h1 class='Fs-H'>
              <span>Password</span>
            </h1>
            <label class='placeholder'>Password</label>

            <span>Minimun of 8 charracters</span>
          </div>
          <div>
            <input type='submit' value='Next' />
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

export default Modal;
