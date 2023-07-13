import React, { useState } from 'react';
import { Range } from 'react-range';


const RangeSlider = () => {
    const [values, setValues] = useState([0, 100]);
  
    const handleChange = (newValues) => {
      setValues(newValues);
    };
    return (
      <div>
        <Range
          step={1} 
          min={0}
          max={11300} 
          values={values} 
          onChange={handleChange} 
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '6px',
                width: '210px',
                backgroundColor: '#ddd',
                borderRadius: '4px',
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '16px',
                width: '16px',
                backgroundColor: '#999',
                borderRadius: '50%',
                background: '#77BE1D',
              }}
            />
          )}
        />
        <div style={{display: 'flex', gap: '116px'}}>
        <div>От: {values[0]}</div>
        <div>До: {values[1]}</div>
        </div>
      </div>
    );
  }  

export default RangeSlider