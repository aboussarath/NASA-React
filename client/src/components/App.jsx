import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photos from './Photos.jsx';
import DatePicker from 'react-date-picker';

function App() {
  const [photos, setPhotos] = useState([]);
  const [value, onChange] = useState(new Date());

  useEffect(() => {

    handleDateChange(value)

  }, [value])

  let handleDateChange = (value) => {
    let date = value.toISOString().slice(0,10);

    axios.get(`/photos/${date}`)
      .then((response) => {
        setPhotos(response.data)
      })
      .catch((err) => err);
  }

  let photoList = photos.length ? <Photos photos={photos} /> : <h2>There are no photos for this day!</h2>

  return (
    <div>
      <h1>Mars Curiosity Rover Photos</h1>
      <div className='date-form'>
        <label htmlFor='date'>Choose a Date </label>
        <DatePicker
          onChange={onChange}
          value={value}
        />
      </div>
      {photoList}
    </div>
  )
}

export default App;