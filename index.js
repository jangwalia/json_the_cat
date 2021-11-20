const input = process.argv;
const breedname = input[2];
const { fetchbreedDescription } = require('./breedFetcher');

fetchbreedDescription(breedname, (error, description) => {
  if (error) {
  console.log(error);
  }
  console.log(description);

});

