const jwt = require('jsonwebtoken');

// Verify token
const verifyToken = (req, res) => {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.status(200).json({ valid: true });
    } catch (err) {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = {
    verifyToken
};
