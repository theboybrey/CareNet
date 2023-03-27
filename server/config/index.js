import mongoose from "mongoose";

// Strict Query Settings
mongoose.set('strictQuery', false);

// MONGO URI Settings
const MONGO_URI = () => {
    switch (process.env.NODE_ENV) {
        case 'development': return process.env.MONGO_DB_URI_DEV;
            break;
        case 'test': return process.env.MONGO_DB_URI_TEST;
            break;
        case 'production': return process.env.MONGO_DB_URI_PROD;
            break;
    }
}


// Database Connection 
const dbConnection = (callback) => {
    try {
        mongoose.connect(MONGO_URI(), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        console.log('Error connecting...');
        console.log(error);
    }
}