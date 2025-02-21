import express from "express"
import cors from "cors"
import admin from "firebase-admin"
import { config } from "dotenv"

config()

const { PORT } = process.env as Record<string, string>

const cwd = import.meta.dirname

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(`${cwd}/browser`))

app.get("/api", (req, res) => {
  res.send({ data: "API is running..." })
})

app.get("*", (req, res) => {
  res.sendFile(`${cwd}/browser/index.html`)
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`)
})
