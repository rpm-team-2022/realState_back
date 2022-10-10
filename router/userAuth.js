const express = require('express')
const router = express()
const userAuth_db = require("../module/userAuth")
const { checkUserData } = require("../middleWare/userAuth")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


router.post("/register", checkUserData, async (req, res, next) => {
    try {
        const { email } = req.body
       console.log("hello")
        const check_email = await userAuth_db.findBy({ email })
        console.log(check_email)
         if (check_email.length > 0) {
            res.status(409).json({ message: "User Exist!" })
        } else {
            await userAuth_db.insertUser(req.body).then((resp) => {
                if (resp.length > 0) {
                    res.status(200).json({ message: "User has signed,congrats!" })
                } else {
                    res.status(422).json({ message: "Conflict data, please contact support!" })
                }
            })
        }
    } catch (err) {
        next(err)
    }
})


router.post('/login',async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let user = await userAuth_db.findBy({ email })
        user = Object.values(JSON.parse(JSON.stringify(user)))
        if (user[0] && bcrypt.compareSync(password, user[0].password)) {
            const payload = {
                userId: user[0].id,
                userName: user[0].firstName
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET)
            res.cookie("token", token)
           
            res.json({
                message: `Welcome ${user[0].firstName} ${user[0].lastName}`,
                token: token,
                user: payload,
            });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (err) {
        next(err)
    }
})


module.exports = router;