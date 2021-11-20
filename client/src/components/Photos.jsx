import React, { useState, useEffect } from 'react';

function Photos({ photos }) {

  return (
    <div className='photo-list'>
      {photos.map(photo => {
        return (
          <ul className='photo-detail' key={photo.id}>
            <li>Id: {photo.id}</li>
            <li>Camera: {photo.camera.name}</li>
            <a href={photo.img_src} target='_blank'>Click to view image</a>
          </ul>
        )
      })}
    </div>
  )
}

export default Photos;