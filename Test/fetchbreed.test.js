
const { assert } = require("chai");
const { fetchbreedDescription} = require("../breedFetcher");

describe("#fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchbreedDescription("Siberian", (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      assert.equal(desc, expectedDesc);
      done();
    });
  });
  it("returns ' Sorry there is no cat by this name' when passed invalid breed", (done) => {
    fetchbreedDescription("hgjhgghjgj", (err, desc) => {
      const expectedErr = "Sorry there is no cat by this name";
      assert.equal(err, expectedErr);
      
      assert.equal(desc, null);
      done();
    });
  });
});































// const { fetchbreedDescription } = require('../breedFetcher');
// const { assert } = require('chai');

// describe('fetchBreedDescription', () => {
//   it('returns a string description for a valid breed, via callback', (done) => {
//     fetchbreedDescription('Siberian', (err, desc) => {
//       // we expect no error for this scenario
//       assert.equal(err, null);

//       const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

//       // compare returned description
//       assert.equal(expectedDesc, desc.trim());
//       done();
//     });
//   });
//   it('returns a error message for a invalid breed, via callback', (done) => {
//     fetchbreedDescription('sdjhj', (err, desc) => {
//        // description is null in this case
//        assert.equal(desc,null);
//       // we expect error for this scenario
//       const msg = "Sorryyy there is no cat by this name"
//       assert.equal(err, msg);
     
//       done();
   
//   });
// });
// });