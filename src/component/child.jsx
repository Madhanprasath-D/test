import React from 'react'
import PropTypes from 'prop-types';

export const Mainfile = (props) => {
  const {items} = props;
  // const l1 = ["about","project", "data","madhan","developer"]
  console.log(props.l1)
  const {btneve} = props;
  const url = "https://madhanprasath.netlify.app"
  return (
    <div>
        {/* <ul style={{display:'flex', }}>
          {items.map((i)=>(
            <li key={i.id} style={{margin:'10px'}}><a href={url} target='blank'>{i.name}</a></li>
          ))} 
        </ul> */}
        {/* <div>
          <p>the value is {props.name}</p>
        </div> */}
        <dir>
          <h1>Aleart</h1>
          <button onClick={btneve}>Click me</button>
        </dir>
    </div>
  );
};
