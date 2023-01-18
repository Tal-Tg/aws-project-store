import { Slider } from '@mui/material';
import React from 'react';
// import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';
  
const PriceRange = () => {
  
  // Our States
  const [value, setValue] =  React.useState([2,10]);
  
  // Changing State when volume increases/decreases
  const rangeSelector = (event:any, newValue:any) => {
    setValue(newValue);
    // console.log(value[1] - value[0])
  };
  
  return (
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      {/* <h3>hello</h3> */}
      {/* <input id="range-slider" style={{"direction":"rtl","fontWeight":"bold"}}>
        
      </input> */}
      <h5 style={{"direction":"rtl"}}> טווח מחירים (ILS)</h5>
     
      <br />
      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
        style={{width:"87%","position":"relative","left":"16px","color":"#142d4c"}}
        min={0}
        max={364}
        aria-labelledby="range-slider"
        
      />
      <br />
      <div style={{"fontWeight":"600","justifyContent":"right","textAlign":"right","alignItems":"right"}}>
      {value[0]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {value[1]} 
      {/* הטווח מחירים הוא בין */}
      </div>
      
    </div>
  );
}
  
export default PriceRange;