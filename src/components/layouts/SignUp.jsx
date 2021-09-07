import React from 'react';

const SignUp = () => {
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
            <div class='Fieldset'>
              <input type='text' class='input' required />
              <p>
                <span>Your name</span>
              </p>
              <label class='placeholder'>Your name</label>
            </div>
          </div>
          <div>
            <div class='Fieldset'>
              <input type='email' class='input' required />
              <p>
                <span>Email address</span>
              </p>
              <label class='placeholder'>Email address</label>
            </div>
          </div>
          <div>
            <div class='Fieldset'>
              <select name='job-title' defaultValue='user-type' required>
                <option value='user-type' disabled>
                  I would describe my user type as
                </option>
                <option value='developer'>Developer</option>
                <option value='teacher'>Teacher</option>
              </select>
              <p>
                <span>I would describe my user type as</span>
              </p>
            </div>
          </div>
          <div>
            <div class='Fieldset'>
              <input type='password' class='input' required />
              <p>
                <span>Password</span>
              </p>
              <label class='placeholder'>Password</label>
            </div>
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

export default SignUp;
