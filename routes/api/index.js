const express = require('express');
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const regiesterRoutes = require('./registerRoute');

// routes to use
// matches to /api
router.use('/users', userRoutes)

// matches to /api/register
router.use('/register', regiesterRoutes)

module.exports = router