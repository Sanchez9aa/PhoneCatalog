const express = require("express");
const Phone = require("../models/Phone");

const router = express.Router();

//Save a phone

router.post("/", async (req, res) => {
  try {
    //We check if that phone exists
    const phone = await Phone.findOne({ name: req.body.name });

		console.log(phone)
    //If exist we return an error message
    if (phone)
      return res
        .status(400)
        .json({ message: "That phone already exists", success: false });

    //If not exist we create a new Phone
    const newPhone = await new Phone({
      name: req.body.name,
      manufacturer: req.body.manufacturer,
      description: req.body.description,
      color: req.body.color,
			price: req.body.price,
      imageFileName: req.body.imageFileName,
      screen: req.body.screen,
      processor: req.body.processor,
      ram: req.body.ram,
    });

    //Now we save the Phone
		if (!newPhone.name || !newPhone.manufacturer || !newPhone.description || !newPhone.color || !newPhone.price || !newPhone.screen || !newPhone.processor || !newPhone.ram) return res.status(400).json({message:"All fields should be filled"})
		if (!newPhone.imageFileName){
			let lower = newPhone.manufacturer.toLowerCase()
			newPhone.imageFileName = `${lower}.png`
		}
		console.log(newPhone)
    await newPhone.save();

    //Let's respond user
    res.json({ message: "Phone Added", success: true });
  } catch (err) {
    res.status(500).json({ message: ` post / ${err}`, success: false });
  }
});

//Get all phones
router.get("/", async (req, res) => {
  try{
		const phones = await Phone.find()
		res.status(200).json(phones)
	}catch(err){
		res.status(500).json({ message: `get / ${err}`, success: false });
	}
});

//Update an phone
router.put("/:id", async (req, res) => {
	try{
		const phone = await Phone.findOneAndUpdate(req.params.name, {
			$set: req.body
		})
		console.log(phone)
		res.status(202).json({message: "Phone has been updated", success: true})
	}catch(err){
		res.status(500).json({ message: `put :id ${err}`, success: false });
	}
})

//Delete an phone
router.delete("/:id", async (req, res) => {
	try{
		const phone = await Phone.findOneAndDelete(req.params.id)
		res.status(200).json({message: "Phone deleted", success: false})
	}catch(err){
		res.status(500).json({ message: `delete :id ${err}`, success: false });
	}
})

//Obtain an phone by his name
router.get("/:name", async (req, res) => {
	const name = req.params.name
	console.log(name)
	try{
		const phone = await Phone.findOne({name: name})
		console.log(phone)
		res.status(200).json(phone)
	}catch(err){
		res.status(500).json({ message: `:name ${err}`, success: false });
	}
})

module.exports = router;
