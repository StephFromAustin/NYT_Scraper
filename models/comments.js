// DEPENDENCIES 
const mongoose = require ('mongoose');
const schema = mongoose.Schema;

// NEW SCHEMA
const commentsSchema = new schema({
    title: string,
    body: string,
    date: {
        type: date, 
        required: true, 
        default: date.now()
    }
});

// MONGOOSE 
let comments = mongoose.model('Comments', commentsSchema); 

// EXPORT 
module.exports = comments;