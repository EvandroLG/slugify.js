/*
  * slugify.js
  * http://github.com/evandrolg/slugify-js
  * author: Evandro Leopoldino Goncalves <evandrolgoncalves@gmail.com>
  * http://github.com/evandrolg
  * License: MIT
*/

(function(global) {

  'use strict';

  var removeAccents = function(str) {
    var splited = str.split('');
    var output  = [];
    var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž~"\'~^!?.:@#$%&*';
    var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz-----";

    splited.forEach(function(value, index) {
      var hasAccent = accents.indexOf(value) != -1;
      output[index] = hasAccent ? accentsOut.substr(accents.indexOf(value), 1) : value;
    });

    return output.join('');
  };

  var Slugify = {
    bind: function(titleField, slugField) {
      var onKeyDown = function(e) {
        this.update(titleField, slugField);
      };

      titleField.addEventListener('keyup', onKeyDown.bind(this), false);
    },

    update: function() {
      slugField.value = this.createSlug(titleField.value);
    },

    createSlug: function(value) {
      return removeAccents(value.replace(/\s+/g, '-').toLowerCase());
    },
  };

  global.slugify = function(value) {
    return Slugify.createSlug(value);
  };

  global.slugify.bind = function(titleField, slugField) {
    Slugify.bind(titleField, slugField);
  };

}(window));
