'use strict';

const express = require('express')
const router = express.Router();

//require word service over here
const wordService = require('./wordService')

//GET /words/



router.route('/')
    .get(async (req,res,next)=>{
        try{
            //1. Fetch all words that are saved in wordBank from database
            const words = await wordService.listWordBank();
            res.status(200).send({
                data: words
            })
        }catch(e){
            //3. If error, send to the error handler
        }
    })

router.route('/')
    .post(async (req,res,next)=>{
        const {wordData} = req.body;
        
        try{
            //2. Save word from data.
            const word = await wordService.saveWord(wordData)
            //3. Respond with saved word
            res.status(200).send({
                data: [word]
            })
        }catch(e){
            //4. If error, send to the error handler
            next(e);
        }
    })

router.route('/search/:searchWord')
.get(async (req,res)=>{
    const { params } = req
    const { searchWord } = params

    const wordResults = await wordService.searchWord(searchWord)

    if (wordResults){
        wordResults.forEach((element, index, array) => {
            element.type = wordService.searchWordType(element.meanings[0].english.split(';')[0])
            
        });


        res.json(wordResults)

    }
    else{
        res.status(400).send()
    }
})


    exports.router = router;
