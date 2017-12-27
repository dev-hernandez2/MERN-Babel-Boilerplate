import express from "express"


const router = express.Router()

router.get('/home', (req, res) => {
    res.send({ 
        pages: {
            home: {
                title: "Home Page",
                body: "lorem impus",
            }
        }
    })
})

export default router