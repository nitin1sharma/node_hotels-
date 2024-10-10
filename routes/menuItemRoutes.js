const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');


// POST route to create a new Menu Item
router.post('/', async (req, res) => {
    try { 
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('Menu item saved:', response);
        res.status(200).json(response);    
    } catch (err) {
        console.error('Error saving menu item:', err); // Log detailed errors
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('data fetched:');
        res.status(200).json(data);
    } catch (err) {
        console.error(err); // Log detailed errors
        res.status(500).json({ error: 'Internal server error' });
    }
});




router.get('/:taste', async(req, res)=>{
    try{
        const taste = req.params.taste// extract the work type from the URL parameter
        if(taste == 'sour' ||taste == 'sweet' ||taste == 'Spicy'){
            const response = await MenuItem.find({taste: taste});
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
// comment added for testing purpose 
module.exports = router