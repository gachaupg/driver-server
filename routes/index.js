import userModal from '../models/user.js'
import tourModal from '../models/products.js'
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
            { $match : {status:false,isComplete:false}  },
       
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
            {$match:{isComplete:false,status:true},
        
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log('error',error);
        res.status(500).send(error)
    }
})
// categories


router.get ('/phones',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await tourModal.aggregate([
            {$match:{category:'phones'},
        
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log('error',error);
        res.status(500).send(error)
    }
})
router.get ('/technology',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await tourModal.aggregate([
            {$match:{category:'technology'},
        
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log('error',error);
        res.status(500).send(error)
    }
})
router.get ('/beuaty',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await tourModal.aggregate([
            {$match:{category:'beuaty'},
        
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log('error',error);
        res.status(500).send(error)
    }
})
router.get ('/laptops',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await tourModal.aggregate([
            {$match:{category:'laptops'},
        
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log('error',error);
        res.status(500).send(error)
    }
})
router.get ('/electronics',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await tourModal.aggregate([
            {$match:{category:'electronics'},
        
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log('error',error);
        res.status(500).send(error)
    }
})
router.get ('/funatures',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await tourModal.aggregate([
            {$match:{category:'funatures'},
        
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log('error',error);
        res.status(500).send(error)
    }
})
router.get ('/cars',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await tourModal.aggregate([
            {$match:{category:'cars'},
        
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log('error',error);
        res.status(500).send(error)
    }
})
router.get ('/clothing',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await tourModal.aggregate([
            {$match:{category:'clothing'},
        
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log('error',error);
        res.status(500).send(error)
    }
})
router.get ('/shoes',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await tourModal.aggregate([
            {$match:{category:'shoes'},
        
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log('error',error);
        res.status(500).send(error)
    }
})
router.get ('/houses',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await tourModal.aggregate([
            {$match:{category:'houses'},
        
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log('error',error);
        res.status(500).send(error)
    }
})
router.get ('/vacant',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await tourModal.aggregate([
            {$match:{category:'vacant'},
        
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log('error',error);
        res.status(500).send(error)
    }
})
router.get ('/land',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await tourModal.aggregate([
            {$match:{category:'land'},
        
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log('error',error);
        res.status(500).send(error)
    }
})
router.get ('/others',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await tourModal.aggregate([
            {$match:{category:'others'},
        
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log('error',error);
        res.status(500).send(error)
    }
    
})
router.get('/const', async (req, res) => {
    const previousMonth = moment()
      .month(moment().month() - 1)
      .set('date', 1)
      .format('YYYY-MM-DD HH:mm:ss');
  
    try {
      const users = await tourModal.aggregate([
        {
          $match: {
            construction: { $ne: '' } // Fetch only when "construction" has some values
          }
        }
      ]);
  
      res.status(200).send(users);
    } catch (error) {
      console.log('error', error);
      res.status(500).send(error);
    }
  });
  
  
  
  
  
  
  
export default router;