const axios = require('axios');

const getPhotosByDate = (date) => {
let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=poghoBhHV9P5SqjnRsa9WKeTgSANCd2sxptRCv5m`;
// let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=DEMO_KEY`;

return axios.get(url)
  .then((response) => {
    return response;
  })
  .catch((err) => {
    console.log(err)
  })

}

module.exports.getPhotosByDate = getPhotosByDate;