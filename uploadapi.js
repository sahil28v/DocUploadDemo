'use strict';

exports.add = (req,res) => {
	var file = req.file
	console.log("File: "+ file.mimetype)
	res.status(200).end()
}