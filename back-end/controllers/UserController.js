const Product = require('../models/Product');
const Category = require('../models/Category');


const UserController = {
    register: (req, res) => {
        res.send('register');
    },
    login: (req, res) => {
        res.send('login');
    },
    logout: (req, res) => {
        res.send('logout');
    },status: (req, res) => {
        res.send('status');
    }
}

module.exports = UserController;