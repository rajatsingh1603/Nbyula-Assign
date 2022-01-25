import React from 'react';
import '../quespaper/quespaper.css'

function Quespaper() {
  return <div>
      <div className='question_paper'>
          <div className='ques_head'>
            <input type="text" className='top_name' placeholder='Enter Quiz Head..'></input>
            <input type="text" className='top_disc' placeholder='Enter Quiz discription..'></input>
          </div>
      </div>
  </div>;
}

export default Quespaper;
