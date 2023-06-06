import userModal from '../models/user.js'
// const {auth,isUser,isAdmin}=require('../middleware/auth')
import moment from 'moment'
import express from 'express'
const router =express.Router()


router.get ('/stats', async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await User.aggregate([
            {$match:{createdAt:{$gte:new Date(previosMonth)}},
        
        },
        {
            $project:{
            month:{$month: '$createdAt'},
        } 
        },
        {
            $group:{
                _id:'$month',
                total:{$sum:1},
            }
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})


router.get ('/pending',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModal.aggregate([
            { $match : {status:false|| { isComplete:false} } },
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

router.get ('/succes',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModal.aggregate([
            {$match:{isComplete:true|| { status:false} ||{status:true}},
        
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

router.get ('/rejected',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModal.aggregate([
            {$match:{status:true ,  isComplete:false},
        
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log('error',error);
        res.status(500).send(error)
    }
})



export default router;