const jishon = require('jishon')
const nlp = require('compromise')

var doc = nlp('insulting')

// // Searching for a word either in japanese or english
// jishon('[][]',  function (error, response) {
//   console.log(error)
//   console.log(response)

// }).then(function(response,){
//   const {words} = response
//   const common = words.find(word => word.tags.includes('common word'))
//   return common
// })



// async () => {const results = await jishon('apple', (error, response) => {
//   const {words} = response
//   const common = words.find(word => word.tags.includes('common word'))
//   console.log(common)
//   return common
// })}

// console.log()

// (async () => {
//   const magic = await jishon('magic')
 
//   console.log(magic.sentences[0])
//   //  {
//   //   japanese: 'くろまほう黒魔法のはなし話をき聞きたいです。がくいん学院ではさわりしかき聞いたことがないんですがきょうみ興味があります。',
//   //   english: 'I\'d like to hear about black magic. I was only told the highlights in the academy, and it interests me.\n        — Tatoeba'
//   // }
// })

