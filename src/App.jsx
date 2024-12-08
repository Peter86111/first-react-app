//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

const ColorSelector = ({colors, onSelect}) => {
  return(
    <div style={{textAlign: 'center'}}>
      {colors.map((color, index) => (
        <button key = {index} onClick={() => onSelect(color)} style={{ margin: '5px'}}>
          {color}
        </button>
      ))}
    </div>
  );
}

const ColorSelector2 = ({colors2, onSelect}) => {
  return(
    <div style={{textAlign: 'center'}}>
      {colors2.map((color2, index) => (
        <button key = {index} onClick={() => onSelect(color2)} style={{ margin: '5px'}}>
          {color2}
        </button>
      ))}
    </div>
  );
}

const ColorSelector3 = ({colors3, onSelect}) => {
  return(
    <div style={{textAlign: 'center'}}>
      {colors3.map((color3, index) => (
        <button key = {index} onClick={() => onSelect(color3)} style={{ margin: '5px'}}>
          {color3}
        </button>
      ))}
    </div>
  );
}

const ColorBox = ({color}) => {
  return(
    <div style={{height: '150px', width: '500px', margin: '20px auto', borderRadius: '100px', backgroundColor: color}}>
      <p style={{color: 'black', textAlign: 'center'}}>Selected color: {color}</p>
    </div>
  );
};

const ColorBox2 = ({color}) => {
  return(
    <div style={{height: '350px', width: '500px', margin: '20px auto', borderRadius: '800px', backgroundColor: color}}>
      <p style={{color2: 'black', textAlign: 'center'}}>Selected color: {color}</p>
    </div>
  );
};

const ColorBox3 = ({color}) => {
  return(
    <div style={{height: '150px', width: '500px', margin: '20px auto', borderRadius: '100px', backgroundColor: color}}>
      <p style={{color3: 'black', textAlign: 'center'}}>Selected color: {color}</p>
    </div>
  );
};

export const App = () => {
  const [selectedColor, setSelectedColor] = useState('White');
  const colors = ['Red', 'Green', 'Blue', 'Yellow'];
  return(
    <div>
      <h2 style={{textAlign: 'center', fontFamily: 'cursive'}}>Color Picker</h2>
      <ColorSelector colors = {colors} onSelect = {setSelectedColor} />
      <ColorSelector2 colors2 = {colors} onSelect = {setSelectedColor} />
      <ColorSelector3 colors3 = {colors} onSelect = {setSelectedColor} />
      <ColorBox color = {selectedColor} />
      <ColorBox2 color = {selectedColor} />
      <ColorBox3 color = {selectedColor} />
    </div>
  );
}