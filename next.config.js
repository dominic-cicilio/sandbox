const path = require('path');
const withImages = require("next-images");


module.exports = withImages({
  images: {
    domains: ['i.thatcopy.pw'],
  },
});
