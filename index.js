'use strict';

 /**
 * Dependencies.
 */

 const randomArray = require('unique-random-array');
 const images = require('./meme-images.json');
 const words = require('./meme-words.json');

 /**
 * Dank memes
 */

 /**
  * Random images generator.
 */
exports.randomImages = randomArray(images);

 /**
  * All memes in images.
  * Don't put () at end as its a function.
 */
exports.allImages = images;

 /**
  * Random word generator.
 */
exports.randomWords = randomArray(words);

 /**
  * All memes in words.
  * Don't put () at end as its a function.
 */
exports.allWords = words;