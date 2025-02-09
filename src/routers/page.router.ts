import { Router } from "express";
import express from "express";

const pageRouter: Router = express.Router();

pageRouter.get('', (req, res) => {
    res.render('index', {
        title: 'Home page - Weather App',
        author: 'Raji'
    });
})

pageRouter.get('/about', (req, res) => {
    res.render('about', {
        title: 'About page',
        author: 'Raji'
    });
})

pageRouter.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        author: 'Raji'
    });
})

pageRouter.get('/help/*', (req, res) => {
    res.send('Help article not found');
})

pageRouter.get('*', (req, res) => {
    res.render('404', {

    })
})

export default pageRouter;