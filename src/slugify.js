/*
  * slugify.js
  * http://github.com/evandrolg/slugify-js
  * author: Evandro Leopoldino Goncalves <evandrolgoncalves@gmail.com>
  * http://github.com/evandrolg
  * License: MIT
*/

(function(global, factory) {

  /*global define: false*/
  /*global exports: true*/
  if (typeof exports === 'object' && exports) {
    factory(exports); // CommonJS
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], factory); // AMD
  } else {
    factory(global); // <script>
  }

} (this, function(global) {

  'use strict';

  var isBrowser = typeof window === 'object' && window.document;

  var removeAccents = function(str) {
    var splited = str.split('');
    var output  = [];
    var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž~"\'~^!?.:@#$%&*';
    var accentsOut = 'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz-----';

    splited.forEach(function(value, index) {
      var hasAccent = accents.indexOf(value) !== -1;
      output[index] = hasAccent ? accentsOut.substr(accents.indexOf(value), 1) : value;
    });

    return output.join('');
  };

  var Slugify = {
    bind: function(titleField, slugField) {
      var onKeyDown = function() {
        this.update(titleField, slugField);
      };

      titleField.addEventListener('keyup', onKeyDown.bind(this), false);
    },

    update: function(titleField, slugField) {
      slugField.value = this.createSlug(titleField.value);
    },

    createSlug: function(value) {
      return removeAccents(value.replace(/\s+/g, '-').toLowerCase());
    }
  };

  global.slugify = function(value) {
    return Slugify.createSlug(value);
  };

  if (isBrowser) {
    global.slugify.bind = function(titleField, slugField) {
      Slugify.bind(titleField, slugField);
    };
  }

}));
