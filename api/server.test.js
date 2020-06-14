const server = require('./server.js')
const bcrypt = require('bcryptjs')
const db = require('../database/dbConfig.js')
const request = require('supertest')


describe('Server configuration', () => {
    test('Server is running', async () => {
        const res = await request(server).get('/');
        expect(res.body).toBe('Server is running...')
    })

    test("Should run in the testing environment", () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

})

describe('End Points', () => {
    test('Users', async () => {
        const allUsers = await db('users')
        const res = await request(server).get('/api/Users')
        expect(res.type).toEqual('application/json')
        expect(allUsers).toHaveLength(0)
        expect(res.status).toEqual(401)
    })

}
)

beforeEach(async () => {
    await db('users').truncate();
})