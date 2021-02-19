const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

module.exports = {
    Mutation: {
        register(
            parent,
            { registeInput: { username, email, password, confirmPassword } },
            context,
            info) {

            // TODO validate user data
            // TODO: make sure user doesnt already exist
            // TODO : hash password and create an auth token
            password: await bcrypt.hash(password,12);
            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString()
            });
            
            const res = await newUser.save();

            const token = jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username
            })
        }
    }
}