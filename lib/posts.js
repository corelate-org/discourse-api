exports = module.exports = function(Discourse, actionTypeEnum) {

  "use strict";

  var actionTypeEnum = actionTypeEnum;

  Discourse.prototype.getAll = function(callback) {
    this.get('all_posts', {format: 'json'}, function(error, body, httpCode) {
      callback(error, body, httpCode);
    });
  };

};