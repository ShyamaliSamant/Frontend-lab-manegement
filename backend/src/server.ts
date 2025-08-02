
// import express from 'express';
// import cors from 'cors';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const PORT = 8080;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Serve static frontend files
// const distPath = path.join(__dirname, '..', 'frontend', 'dist');
// app.use(express.static(distPath));

// // ✅ Sample API route
// app.get('/api/test', (_req, res) => {
//   res.json({ message: 'Backend is working!' });
// });

// // ✅ React fallback: for client-side routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(distPath, 'index.html'));
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`✅ Server is running at: http://localhost:${PORT}`);
// });
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';

dotenv.config(); // Load .env variables early

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Backend API is running ✅');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'API test successful!' });
});

app.use('/api/auth', authRoutes);

// DB Connection & Server Start
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
