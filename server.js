'use-strict';
import express from 'express';
import path from 'path';
import multer from 'multer';
import fs from 'fs';
import cors from 'cors';
const port = 3001;
const corsOptions = {
	origin: '*',
	credentials: true
};
const app = express();
const upload = multer({ dest: 'uploads/' });
app.use(cors(corsOptions));
const server = app.listen(port, function() {
	console.log("Server Running");
});