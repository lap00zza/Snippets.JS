/*
* Get a address using the coordenates
* Useful in web apps when you want fill a address field just using
* The Geolocation Browser API
*/

// API KEY -> https://developers.google.com/maps/documentation/geocoding/get-api-key
const KEY = 'YOUR API KEY'

// XMLHTTPRequest function
const reverseGeocodingURL = (lat, lng) => `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${KEY}`

navigator.geolocation.getCurrentPosition(position => {
  fetch(reverseGeocodingURL(position.coords.latitude, position.coords.longitude))
    .then(res => res.json()).then(res => {
      if (res.status === 200 && res.data.status === 'OK'
        && 'results' in res.data && res.data.results.length) {
        const formatted_address = res.data.results[0].formatted_address
        console.log(formatted_address) // 7277 Bedford Avenue, Brooklyn, NY 11211, USA
      }
    }).catch(err => console.log(err))
})
