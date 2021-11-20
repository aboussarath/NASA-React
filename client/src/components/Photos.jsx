import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Photos() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    axios.get(`/photos`)
      .then((response) => {
        setPhotos(response.data)
      })
      .catch((err) => err);
  }, [])

  return (
    <div className='photo-list'>
      {photos.map(photo => {
        return (
          <ul className='photo-detail' key={photo.id}>
            <li>Id: {photo.id}</li>
            <li>Camera: {photo.camera.name}</li>
            <a href={photo.img_src}>Click to view image</a>
          </ul>
        )
      })}
    </div>

  )
}

export default Photos;