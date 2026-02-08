const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({});
    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json({ message: 'Error retrieving trips', error: err });
  }
};

const tripsReadOne = async (req, res) => {
  const { tripid } = req.params;

  if (!tripid) {
    return res.status(400).json({ message: 'tripid is required' });
  }

  try {
    const trip = await Trip.findById(tripid);

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(200).json(trip);
  } catch (err) {
    
    return res.status(400).json({ message: 'Invalid tripid', error: err });
  }
};

module.exports = {
  tripsList,
  tripsReadOne
};
