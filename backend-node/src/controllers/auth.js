const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

exports.login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) throw Error("Palun kontrollige emaili ja parooli")

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) throw Error("Palun kontrollige emaili ja parooli")

    const userTemplate = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email
    }

    const token = jwt.sign(userTemplate, process.env.JWT_SECRET)
    if (!token) throw Error("Midagi kriitilist juhtus. Error: 99981811")

    res.status(200).json({
      token,
      ...userTemplate
    })

  } catch (e){
    res.status(400).json({ error: e.message })
  }
}

exports.signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (user) throw Error("Selline email on juba kasutusel")

    const salt = await bcrypt.genSalt(10)
    if (!salt) throw Error("Something critical happened")

    const hash = await bcrypt.hash(password, salt)
    if (!hash) throw Error("Something critical happened")

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hash
    })

    const savedUser = await newUser.save()
    if (!savedUser) throw Error("Tekkis probleem kasutaja salvestamisel")

    res.status(200).json({ message: "Kasutaja loodud!" })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}

