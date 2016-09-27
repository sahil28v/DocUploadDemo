'use-strict';
import express from 'express'
import path from 'path'
import multer from 'multer'
import fs from 'fs'
import cors from 'cors'
import uploadapi from './uploadapi'
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
    cb(null, file.fieldname + '-' + Date.now() + '.pdf') //Appending .jpg
  }
})

const upload = multer({ storage: storage })
app.use(cors(corsOptions))
// ---------------------------------
// Set up Upload API -- Post
// ---------------------------------
app.post('/api/upload', upload.single('file'), uploadapi.add)

const server = app.listen(port, () =>
	console.log("Server Running on Port : " + port)
)