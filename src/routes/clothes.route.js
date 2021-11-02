'use strict';

const express = require('express');

const { clothes } = require('../models/index');

const clotheRouter = express.Router();



// RESTful Route Delectation 
clotheRouter.get('/clothes', getClothes); // get all the people form the DB
clotheRouter.get('/clothes/:id', getOneClothes); // gets a person by ID
clotheRouter.post('/clothes', createClothes); // creating a new person
clotheRouter.put('/clothes/:id', updateClothes); // updating a person by their ID
clotheRouter.delete('/clothes/:id', deletePiece); // deleting a person by their ID


async function getClothes(req, res) {

  const allPieces = await clothes.findAll();
  res.status(200).json(allPieces);

}

async function getOneClothes(req, res) {
  const id = parseInt(req.params.id); // we parse the ID in case it was a string
  const onePiece = await clothes.findOne({
    where: {
      id: id
    }
  });
  res.status(200).json(onePiece);
}

async function createClothes(req, res) {
  const obj = req.body;
  let newPiece = await clothes.create(obj);
  res.status(201).json(newPiece);

}

async function updateClothes(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let foundClothes = await clothes.findOne({ where: { id: id } });
  const updatedClothes = await foundClothes.update(obj);
  res.status(201).json(updatedClothes);
}

async function deletePiece(req, res) {
  const id = parseInt(req.params.id);
  const deletedPiecee = await clothes.destroy({ where: { id } });
  res.status(204).json(deletedPiecee);
}


module.exports = clotheRouter;