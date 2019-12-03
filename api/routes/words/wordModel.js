'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Map to fields in the DB

const wordSchema = new Schema({
  furigana: String,
  japanese: String,
  tags: [Array],
  meanings: [],
  audio: {}
})

module.exports = mongoose.model('Word',wordSchema)