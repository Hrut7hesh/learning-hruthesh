const express = require('express');
const router = express.Router();
const CarUser = require('../models/car_user');
const bcrypt = require('bcrypt');
const { body, validationResult, check } = require('express-validator');

const carUserValidationRules = () => [
  body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
  body('email').isEmail().withMessage('Must be a valid email address'),
  body('age').isInt({ min: 0 }).withMessage('Age must be a positive integer'),
  body('gender').isIn(['male', 'female']).withMessage('Gender must be one of: male, female'),
  body('city').optional().isString().withMessage('City must be a string'),
];

router.get('/', async (req, res, next) => {
  try {
    const carUsers = await CarUser.find();
    res.json(carUsers);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const carUser = await CarUser.findById(req.params.id);
    if (!carUser) {
      return res.status(404).json({ message: 'CarUser not found' });
    }
    res.json(carUser);
  } catch (err) {
    next(err);
  }
});

router.post('/', carUserValidationRules(), async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, age, gender, dob, city, profession, password } = req.body;

    let carUser = await CarUser.findOne({ email });
    if (carUser) {
      return res.status(400).json({ message: 'CarUser already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    carUser = new CarUser({
      username,
      email,
      age,
      gender,
      dob,
      city,
      profession,
      password: encryptedPassword
    });

    const result = await carUser.save();
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', carUserValidationRules(), async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, age, gender, dob, city, profession, password } = req.body;

    let updateData = { username, email, age, gender, dob, city, profession };
    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    }

    const carUser = await CarUser.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!carUser) {
      return res.status(404).json({ message: 'CarUser not found' });
    }
    res.json(carUser);
  } catch (err) {
    next(err);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const updates = req.body;

    if (updates.password) {
      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(updates.password, salt);
    }

    const carUser = await CarUser.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!carUser) {
      return res.status(404).json({ message: 'CarUser not found' });
    }
    res.json(carUser);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const carUser = await CarUser.findByIdAndDelete(req.params.id);
    if (!carUser) {
      return res.status(404).json({ message: 'CarUser not found' });
    }
    res.json({ message: 'CarUser deleted successfully' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
