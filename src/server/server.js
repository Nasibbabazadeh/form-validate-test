import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
const port = 4000

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/messageform', (req, res) => {
    const { message } = req.body
    if (message === 'hack') {
        res.status(400).send('you hacked')
    } else {
        res.status(200).send('Message send successfully')
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
