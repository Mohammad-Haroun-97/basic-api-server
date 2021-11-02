'use strict';

function name(req, res, next) {
  if (req.query.name) {
    next();
  } else { 
    next('without a name');
  }
}
module.exports = name;