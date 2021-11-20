const request = require('request');
const fetchbreedDescription = (breedname, callback) =>{
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedname}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body)[0];
    if (data === undefined) {
      callback("Sorry there is no cat by this name",null);
    }
    callback(null,data.description);
  });
};

module.exports = { fetchbreedDescription };


// function showBreed(address,breed){
//   if(!breed){
//     return console.log("please enter bread name");
//   }
//   request(address + breed,(error, response, body) => {
//     if(error){
//       console.log('error:', error);
//       console.log('status code : ', response && response.statusCode);
//     }
//     const data = JSON.parse(body);
//     const info = data[0];
//     if(info !== undefined){
//       return console.log(info.description);
//     }
//     return console.log("sorry there is no cat of this name");

//   });
// }
// showBreed(url,getInfo);

