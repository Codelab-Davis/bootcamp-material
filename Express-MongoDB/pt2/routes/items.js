const router = require('express').Router();
let Item = require('../models/items.model.js');

router.route('/add').post((req, res) => {
    const quantity = req.body.quantity;
    const images = req.body.images;

    const newItem = new Item({
        quantity,
        images,
    });

    newItem.save()
        .then(() => res.json('New Item Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}); 

router.route('/get/:id').get((req, res) => {
    Item.findById(req.params.id)
        .then(item=>res.json(item))
        .catch(err=>res.status(400).json('Error: ' + err));
}); 

router.route('/update/:id').put((req, res) => {
    Item.findById(req.params.id)
    .then(item => {
       item.quantity = req.body.quantity;

        item.save()
            .then(() => res.status(200).json("Item Updated!")) 
            .catch(err => res.status(400).json("Error: " + err)); 
    }); 
}); 

router.route('/delete/:id').delete((req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err)); 
}); 

module.exports = router; 