const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const express = require("express");
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();


const myenv = process.env;
const SECRET = myenv.SECRET;
const port = myenv.PORT;
const con = mysql.createConnection({
    host: myenv.MYSQL_HOST,
    user: myenv.MYSQL_USER,
    password: myenv.MYSQL_PASSWORD,
    database: myenv.MYSQL_DATABASE
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof(bearerHeader) !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;

        if (req.token === myenv.OTHER_APP_TOKEN) {
            next();
            return;
        }
        try {
            var decoded = jwt.verify(req.token, SECRET);
            con.query(`SELECT id FROM user WHERE id = "${decoded.id}";`, function (err2, rows) {
                if (err2) res.status(500).json({ msg: "Internal server error" });
                if (rows[0] && rows[0].id == decoded.id)
                    next();
                else
                    res.status(403).json({ msg: "Token is not valid" });
            });
        } catch (err) {
            res.status(403).json({ msg: "Token is not valid" });
        }
    } else {
        res.status(403).json({ msg: "No token, authorization denied" });
    }
}

function get_id_with_token(req, res) {
    try {
        var decoded = jwt.verify(req.token, SECRET);
        return (decoded.id);
    } catch (err) {
        res.status(403).json({ msg: "Token is not valid" });
    }
    return (-1);
}

function verifyAuth(req, res, verifId) {
    if (req.token === myenv.OTHER_APP_TOKEN)
        return true;

    if (verifId) {
        let token_id = get_id_with_token(req, res);
        if (token_id === -1)
            return false;
        return token_id === req.params.id;
    }
    return false;
}

function is_num(id) {
    return (/^\d+$/.test(id));
}

exports.bodyParser = bodyParser;
exports.myenv = myenv;
exports.app = app;
exports.port = port;
exports.con = con;
exports.bcrypt = bcrypt;
exports.mysql = mysql;
exports.jwt = jwt;
exports.verifyToken = verifyToken;
exports.verifyAuth = verifyAuth
exports.is_num = is_num;
