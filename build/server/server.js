import express from 'express';
import mainRoute from './routes/main.js';
const app = express();
const port = 3000;
app.use('/api', mainRoute);
app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});
