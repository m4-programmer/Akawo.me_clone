import React from 'react';
import { features, features2 } from '../const/data';
import Box1 from './Box1';

const FlexboxLayout = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex flex-wrap">
        {/* First row with three columns */}
        {features.map((item, key)=>{
          return <Box1 {...item} key={key}/>
        })}
  

        {/* Second row with two columns */}
        {features2.map((item, key)=>{
          return <Box1 {...item} key={key} size={6}/>
        })}
  
      </div>
    </div>
  );
};

export default FlexboxLayout;
