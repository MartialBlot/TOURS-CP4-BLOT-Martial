const express = require('express');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const port = 3000;
const Router = require('./routes/wildcircus');

app.use(bodyParser.json());
app.use(passport.initialize());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

passport.use(new LocalStrategy(
    function (username, password, done) {
        if (username === 'wilder' && password === 'wilderpwd') {
            return done(null, { username, password })
        }
        return done(null, false);
    }
));

passport.use(new JwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'supercodesecret',
    }, function (payload, done) {
        console.log('payload', payload)
        done(null, payload);
    }));

passport.use('jwtUrl',new JwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromUrlQueryParameter('key'),
        secretOrKey: 'supercodesecret',
    }, function (payload, done) {
        console.log('payload', payload)
        done(null, payload);
    }));

app.post('/auth/signin', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        console.log(user, info);
        if (err || !user) return res.status(401).end();
        const token = jwt.sign(user, 'supercodesecret');
        res.send({ token: token });
    })(req, res);
});

app.use('/api', Router);

app.listen(port, (err) => {
    if (err) {
        throw new Error('Something bad happened...');
    }

    console.log(`Server is listening on ${port}`);
});