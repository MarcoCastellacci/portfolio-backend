const Router = require('express').Router()
const validator = require('../config/validator')
const passport = require('../config/passport')

const userControllers = require('../controllers/userControllers')
const proyectControllers = require('../controllers/proyectControllers')
const tecnoControllers = require('../controllers/tecnoControllers')

const {createTecno, getTecnos, createMultipleTecnos} = tecnoControllers;
const {createProyect, getProyects} = proyectControllers;
const {signUpUser, signInUser, signOut, verifyToken} = userControllers;



// User Routes
Router.route('/signup')
.post(validator, signUpUser)
Router.route('/signin')
.post(signInUser)
Router.route('/signout')
.post(signOut)
Router.route('/verify')
.get(passport.authenticate('jwt', {session: false}), verifyToken)

// =============================================================

// Proyect Routes
Router.route('/proyects')
.get(getProyects)
.post(createProyect)

// =============================================================

// Tecno Routes
Router.route('/tecnologias')
.get(getTecnos)
.post(createTecno)

Router.route('/tecnologias/multiple')
.post(createMultipleTecnos)

module.exports = Router;