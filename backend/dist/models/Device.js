const mongoose = require('mongoose');
const deviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { type: String, enum: ['on', 'off'], default: 'off' },
    lab: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now }
});
export const Device = mongoose.model('Device', deviceSchema);
