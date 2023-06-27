import express from 'express'
const router = express.Router()
import {
    initiateSTKPush,
    stkPushCallback,
    confirmPayment,
    mpesa,
    getToursByUser
} from "../controllers/mpesa.js";

import auth from "../middleware/auth.js";

import {accessToken} from "../middleware/generateAccessToken.js";
router.get('/stkPush', mpesa)
router.get('/stkPush/:id', getToursByUser)

router.post('/stkPush',accessToken, auth, initiateSTKPush)
// router.route('/stkPushCallback/:Order_ID').post(stkPushCallback)
router.route('/confirmPayment/:CheckoutRequestID').post(accessToken,confirmPayment)

export default router
