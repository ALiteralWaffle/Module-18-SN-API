const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: email
    },
    thoughts: [],
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

const User = model('User', UserSchema);

module.exports = User;