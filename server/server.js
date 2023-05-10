require('dotenv').config()
const path = require('path')
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors({
    origin: '*',
    credentials: true
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('./public'))

app.post('/email', async (req, res) => {
    let { first, last, email, phone, body } = req.body
    console.log(req.body)

    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.STMP,
        }
    })

    const mailOptions = {
        from: process.env.EMAIL,
        to: 'benjamin.phillips.webdev@gmail.com',
        subject: "⚠️ Profile Contact",
        html: `
            <div style="padding: 10px 20px; border: 2px solid black; border-radius: 10px; margin-top: 15px;">
                <h1>Contact Info: </h1>
                <h4>Name: ${first}, ${last}</h4>
                <h4>Email: ${email}</h4>
                ${phone !== undefined ? `<h4>Phone: ${phone}</h4>` : '<h4>No phone number</h4>'}
            </div>
            <h2 style="padding: 10px 20px; border: 2px solid black; border-radius: 10px">
                ${body}
            </h2>
        `
    }

    transport.sendMail(mailOptions)
        .then(res => {
            console.log("Email successfully sent. Contact Form")
            res.json(res)
        })
        .catch(err => res.json(err))
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})