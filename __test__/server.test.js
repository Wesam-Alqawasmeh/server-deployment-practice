"use strict";

const {app} = require('../server');
const supertest = require('supertest');
const request = supertest(app);

describe('SERVER TESTING', ()=> {

    // Invalid URL
    test('handle invalid URLS', async () => {
        const res = await request.get('/not-found');
        expect(res.status).toEqual(404);
    });

    // Home route workability checking
    test('home route handle', async () => {
        const res = await request.get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual("Server is working");
    });

    // Data route workability checking
    test('data route handle', async () => {
        const res = await request.get('/data');
        expect(res.status).toEqual(200);
        expect(typeof res.body).toEqual("object");
    });

    // Stamper middle ware checking
    test('stamper middleware handle', async () => {
        const res = await request.get('/data');
        expect(res.status).toEqual(200);
        expect(res.body.time).toBeDefined();
    });

})