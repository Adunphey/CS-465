const mongoose = require('mongoose');
require('./db');

const Trip = mongoose.model('Trip');

const trips = [
  {
    name: 'Gale Reef',
    img: '/images/reef1.jpg',
    description: [
      'Sed et augue lorem. In sit amet placerat arcu.',
      'Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida.'
    ]
  },
  {
    name: "Dawson's Reef",
    img: '/images/reef2.jpg',
    description: [
      'Integer magna leo, posuere et dignissim vitae.',
      'Curabitur odio lacus, blandit ut hendrerit vulputate.'
    ]
  },
  {
    name: "Claire's Reef",
    img: '/images/reef3.jpg',
    description: [
      'Donec sed felis risus. Nulla facilisi.',
      'In hac habitasse platea dictumst.'
    ]
  }
];

const seedDB = async () => {
  await Trip.deleteMany({});
  await Trip.insertMany(trips);
  console.log('Database seeded!');
  mongoose.connection.close();
};

seedDB();
