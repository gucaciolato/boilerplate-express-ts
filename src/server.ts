import express from "express"
import { Router, Request, Response } from "express"

const app = express()
const route = Router()
const PORT = 3333

app.use(express.json())

route.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Hello World"
    })
})

app.use(route)

app.listen(PORT, () => `Server running on port localhost:${PORT}!`)
