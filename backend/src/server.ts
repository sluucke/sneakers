import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

app.listen(3333, () => console.log('Server is Listening on port 3333'))