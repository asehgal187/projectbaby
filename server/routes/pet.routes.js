const PetControllers = require('../controllers/pet.controllers');

module.exports = function(app){
    app.get('/api', PetControllers.index);
    app.post('/api/pet', PetControllers.createPet);
    app.get('/api/pets', PetControllers.getAll);
    app.get('/api/pet/:_id', PetControllers.getOne);
    app.put('/api/pet/:_id', PetControllers.updateObject);
    app.delete('/api/pet/:_id', PetControllers.deleteObject);
    app.put('/api/like/:_id', PetControllers.likePet);
}