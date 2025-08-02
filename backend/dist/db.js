const mongoose = require('mongoose');
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/lab-control-db'); // local MongoDB
        console.log('✅ MongoDB connected successfully!');
    }
    catch (err) {
        console.error('❌ MongoDB connection error:', err);
        process.exit(1);
    }
};
