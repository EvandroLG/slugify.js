(function(global) {

  'use strict';

  var removeAccents = function(str) {
    var splited = str.split('');
    var output  = [];
    var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž~"\'~^';
    var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz    ";

    splited.forEach(function(value, index) {
      var hasAccent = accents.indexOf(value) != -1
      output[index] = hasAccent ? accentsOut.substr(accents.indexOf(value), 1) : value;
    });

    return output.join('');
  };

  var Slugify = function(params) {
    this.titleField = params.titleField;
    this.slugField = params.slugField;
  };

  Slugify.prototype = {
    bind: function() {
      var onKeyDown = function(e) {
        this.update();
      };

      this.titleField.addEventListener('keyup', onKeyDown.bind(this), false);
    },

    createSlug: function() {
      return removeAccents(this.titleField.value.replace(/\s+/g, '-').toLowerCase());
    },

    update: function() {
      this.slugField.value = this.createSlug();
    }
  };

  global.slugify = function(params) {
    var s = new Slugify(params);
    s.bind();
  };

}(window));
