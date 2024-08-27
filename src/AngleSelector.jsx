import React, { useState } from 'react';

const AngleSelector = () => {
  const [angle, setAngle] = useState(0);

  const updateAngle = (value) => {
    const clampedValue = Math.max(0, Math.min(360, value));
    setAngle(clampedValue);
  };

  const handleInputChange = (e) => {
    updateAngle(parseInt(e.target.value));
  };

  const handleSliderChange = (e) => {
    updateAngle(parseInt(e.target.value));
  };

  const handleRadioChange = (e) => {
    updateAngle(parseInt(e.target.value));
  };

  return (
    <div>
      <div>
        <label htmlFor="angleInput">Angle: </label>
        <input type="number" id="angleInput" value={angle} onChange={handleInputChange} />
      </div>
      <div>
        <input type="range" id="angleSlider" min="0" max="360" value={angle} onChange={handleSliderChange} />
      </div>
      <div>
        <label><input type="radio" name="angle" value="0" checked={angle === 0} onChange={handleRadioChange} /> 0°</label>
        <label><input type="radio" name="angle" value="45" checked={angle === 45} onChange={handleRadioChange} /> 45°</label>
        <label><input type="radio" name="angle" value="60" checked={angle === 60} onChange={handleRadioChange} /> 60°</label>
        <label><input type="radio" name="angle" value="90" checked={angle === 90} onChange={handleRadioChange} /> 90°</label>
        <label><input type="radio" name="angle" value="180" checked={angle === 180} onChange={handleRadioChange} /> 180°</label>
      </div>
    </div>
  );
}

export default AngleSelector;
