const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
    const tagData = await Tag.findAll({
      include: [{model: Product}]
    })
    res.status(200).json(tagData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try{
const tagData = await Tag.findByPk(req.params.id,{
  include: [{model: Product}]})
  if (!tagData){
   return res.status(404).json({ message: 'Category not found'}); 
  }
  res.status(404).json(404)
  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try{
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  }catch(err){
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try{
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(tagData);
  }catch(err){
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try{
const tagData = Tag.destroy({
    where: { id: id },
  })
  res.status(200).json(tagData)
  }catch(err){
    res.status(400).json(err);
  }
  
});

module.exports = router;
