import path from 'path';
import express from 'express';

const app = express();

app.use(express.static('./docs'));

app.listen(8000, 'localhost', () => console.log("Server running on http://localhost:8000"));