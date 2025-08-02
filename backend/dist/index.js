import express from 'express';
import { connectDB } from './db';
const app = express();
const PORT = 8080;
app.use(express.json());
connectDB();
app.get('/', (req, res) => {
    res.send('Hello from TypeScript backend!');
    res.send('Lab Control System Backend with MongoDB');
});
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://192.168.137.1:${PORT}`);
});
import { Device } from './models/Device';
app.post('/api/devices', async (req, res) => {
    try {
        const device = await Device.create(req.body);
        res.status(201).json(device);
    }
    catch (err) {
        res.status(400).json({ error: 'Failed to add device', details: err });
    }
});
app.get('/api/devices', async (req, res) => {
    const devices = await Device.find();
    res.json(devices);
});
