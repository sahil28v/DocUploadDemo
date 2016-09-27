'use strict';

exports.add = (req,res) => {
	var file = req.file
	console.log(req.body)
	console.log(file)
	res.status(200).end()
}