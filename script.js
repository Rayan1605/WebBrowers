function curSuccess(pos) {
      const Coords = pos.coords; // this is the object that contains the coordinates
    //then we are picking out the latitude, longitude, and accuracy from the coords object
        console.log(`Your current position is:`);
        console.log(`Latitude : ${Coords.latitude}`);
        console.log(`Longitude: ${Coords.longitude}`);
        console.log(`More or less ${Coords.accuracy} meters.`);}
function curError(err) {
    console.log(`Error:  ${err.code} - ${err.message}` );}
const curOptions = {
    enableHighAccuracy: true, // this uses GPS if available
    timeout: 5000,  // this is the time in milliseconds that the browser will wait before timing out
    maximumAge: 0 // this is the maximum age in milliseconds of a possible cached position that is acceptable to return
}; // below is using the geolocation API within the browser to get the current location of the user
navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions); // 1st parameter is a callback function,
// 2nd is a callback function, 3rd is an object with options