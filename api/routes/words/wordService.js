'use strict';

const Word = require('./wordModel')
const jishon = require('jishon')
const nlp = require('compromise')
const wd = require('word-definition')
//Helper function to list each words in the data base
exports.listWordBank = async() =>{
    try{
        const words = Word.find({});
        console.log(words)
        return words
    }catch(e){
        throw e;
    }
}

//Save a new word that will be added to do the database
exports.saveWord = async (wordData) =>{
    //1. Create a word instance
    const word = new Word(wordData)
    try{
    //2. Save word to database
    const doc = await word.save()
    //3. return with created doc(promise)
    return doc;
    }catch(e){
    //4. If error, throw and controller with catch
    throw e
    }
}

exports.searchWord = async (words) =>{
const results = await jishon(words, (error, response) => {
})

return results.words.splice(0,2)
}

exports.searchWordType = async (word)=>
{
// console.log(word)
const data = await nlp(word).normalize().out('tags')

// console.log(data)


// console.log(word)
// wd.getDef(word, "en", null, function(definition) {
//     console.log(definition);    
// });

}