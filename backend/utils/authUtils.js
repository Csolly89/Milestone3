const jwt = require('jsonwebtoken');

const secret = process.env.JSONSECRET || 'changeme';

exports.createToken = (email, id) => {
    return jwt.sign({email, id}, secret, {expiresIn: 86000});
}

exports.verifyAccessToken = (req, res, next) => {
    console.log(req.body);
    const token = req.headers["access-token"];

    if (!token)
        return res.status(403).send({error: 'No access token provided'});

    jwt.verify(token, secret, (err, decoded) => {
        if (err)
            return res.status(401).send({error: 'Un-authorized'});

        req.userId = decoded.id
        next();
    })
}
