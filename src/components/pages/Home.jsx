import React from 'react';
import Modal from '../layouts/Modal';

const Home = () => {
  return (
    <div className='home'>
      <div className='icons'>
        <div className='right'>
          <a href='#!'>
            <i class='far fa-chevron-right'></i>
          </a>
        </div>
        <div>
          <div className='left'>
            <a href='#!'>
              <i class='far fa-chevron-left'></i>
            </a>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Home;
