const { db } = require("./index.js");
const {Myemployee} = require("./myemployee.js");

const sampleData = require("../data.json");

const insertSampleImages = function () {
  Myemployee.create(sampleData)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

insertSampleImages();