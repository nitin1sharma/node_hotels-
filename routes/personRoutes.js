const express = require('express');
const router = express.Router();
const Person = require('./../models/person');


// POST route to create a new Person
router.post('/', async (req, res) => {
    try { 
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('Person data saved:', response);
        res.status(200).json(response);    
    } catch (err) {
        console.error('Error saving person:', err); // Log detailed errors
        res.status(500).json({ error: 'Internal server error' });
    }
});


// GET route to fetch all Persons
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('Person data fetched:', data);
        res.status(200).json(data);
    } catch (err) {
        console.error('Error fetching persons:', err); // Log detailed errors
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.get('/:workType', async(req, res)=>{
    try{
        const workType = req.params.workType// extract the work type from the URL parameter
        if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
            const response = await Person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response)
        }else{
            res.status(404).json({error: 'Invalid work type'});
        } 
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id
        const updatedPersonData = req.body
        
        const response = await Person.findByIdAndUpdate(personId, updatedPersonData,{
            new: true, // return the updated document 
            runValidators: true,// rrun mongoose valaidation
        })
        if (!response){
            return res.status(404).json({error: 'person not found'})
        }
        console.log('data updated')
        res.status(200).json(response);
    } catch (err) {
        console.error('Error fetching persons:', err); // Log detailed errors
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.delete('/:id', async (req, res)=>{
    try{
        const personId = req.params.id;

        const response = await Person.findByIdAndDelete(personId)
        if (!response){
            return res.status(404).json({error: 'person not found'})
        }
        console.log('data deleted')
        res.status(200).json({message: 'person Deleted successfully'});


    }catch(err){
        console.error('Error fetching persons:', err); // Log detailed errors
        res.status(500).json({ error: 'Internal server error' });

    }
})

module.exports = router;
