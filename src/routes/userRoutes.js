const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({ data: users });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.post('/', async (req, res) => {
    try {
        await User.create(req.body);
        res.status(200).json({
            message: 'User created successfully'
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;