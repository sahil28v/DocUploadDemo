'use strict';

exports.add = (req,res) => {
	var file = req.file
	console.log("File: "+ req)
	res.status(200).end()
}