const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ error: 'Acesso n�o autorizado' });
    }

    try {
        const decoded = jwt.verify(token, 'seu_segredo_jwt');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token inv�lido' });
    }
};

module.exports = authMiddleware;
