import express from 'express';
// @ts-ignore
import cors from 'cors';
import mainRoute from './routes/main.js';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(cors());

app.use('/api', mainRoute);
app.use('/processed', express.static('processed'));
app.use('/uploads', express.static('uploads'));
app.use('/', express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '..', '/..', 'public/index.html'));
});

app.listen(port, () => {
	console.log(`Server is running on: http://localhost:${port}`);
});

export default app;
