'use-strict';
import express from 'express'
import path from 'path'
import multer from 'multer'
import fs from 'fs'
import cors from 'cors'
import uploadapi from './uploadapi'
import bodyParser from 'body-parser'
const port = 3001
const corsOptions = {
	origin: '*',
	credentials: true
}
const app = express()
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now() + '.pdf') //Appending .pdf
  }
})

const upload = multer({ storage: storage })
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
// ---------------------------------
// Set up Upload API -- Post
// ---------------------------------
app.post('/api/upload', upload.single('file'), uploadapi.add)

const server = app.listen(port, () =>
	console.log("Server Running on Port : " + port)
)