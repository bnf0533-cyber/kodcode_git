/**
 * Unit tests for userService — mock.method replaces real userRepo methods.
 * No MongoDB, no Express.
 *
 * YOUR JOB: implement services/ (+ db/mongoDB.js for npm start).
 * Run: npm test
 */

import { describe, it, beforeEach, afterEach, mock } from 'node:test'
import assert from 'node:assert/strict'
import { userRepo } from '../db/userRepo.js'
import { createUser } from '../services/userService.js'
import {
    MOCK_USER_ID,
    USER_BODY,
    mockGetAllUsers,
    mockGetUserById,
    mockCreateUser,
    mockUpdateUser,
    mockDeleteUser,
} from './mocks/userMocks.js'

describe('userService (unit)', () => {

    beforeEach(() => {
        // mock.method — replaces the real repo method with a fake (auto-restored after each test)
        mock.method(userRepo, 'getAll', mockGetAllUsers)
        mock.method(userRepo, 'getById', mockGetUserById)
        mock.method(userRepo, 'create', mockCreateUser)
        mock.method(userRepo, 'update', mockUpdateUser)
        mock.method(userRepo, 'remove', mockDeleteUser)
    })

    afterEach(() => {
        mock.restoreAll()
    })

    it('createUser  returns user with _id', async () => {
        const user = await createUser(USER_BODY)

        assert.equal(user.name, USER_BODY.name)
        assert.equal(user.email, USER_BODY.email)
        assert.equal(user.age, USER_BODY.age)
        assert.equal(user._id, MOCK_USER_ID)
        assert.equal(userRepo.create.mock.callCount(), 1)
    })

    // ---------- TODO: implement service method, then replace each it.todo ----------
    it.todo('createUser  throws createError 400 if body is missing fields')
    it.todo('listUsers  returns a list of users')
    it.todo('getUser  returns one user by id')
    it.todo('getUser  throws createError 400 if id is not valid')
    it.todo('getUser  throws createError 404 if user does not exist')
    it.todo('updateUser  returns updated user')
    it.todo('updateUser  throws createError 400 if id is not valid')
    it.todo('updateUser  throws createError 400 if body is missing fields')
    it.todo('updateUser  throws createError 404 if user does not exist')
    it.todo('deleteUser  deletes a user')
    it.todo('deleteUser  throws createError 400 if id is not valid')
    it.todo('deleteUser  throws createError 404 if user does not exist')
})
