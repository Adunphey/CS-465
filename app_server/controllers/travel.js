const fs = require('fs');

const travel = (req, res) => {
  // Read JSON trip data
  const trips = JSON.parse(
    fs.readFileSync('./data/trips.json', 'utf8')
  );

  // Pass data to the Handlebars template
  res.render('travel', {
    title: 'Travlr Getaways',
    trips: trips
  });
};

module.exports = {
  travel
};
