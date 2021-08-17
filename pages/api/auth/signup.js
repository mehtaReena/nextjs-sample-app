import { MongoClient } from 'mongodb';
import { hash } from 'bcryptjs';
import middleware from '../../../middleware/dbconfig';
import nextConnect from 'next-connect';

const handler =nextConnect();
handler.use(middleware);

handler.post(async(req, res)=>{

      //Getting email and password from body
      const { email, password } = req.body;
      //Validate
      if (!email || !email.includes('@') || !password) {
          res.status(422).json({ message: 'Invalid Data' });
          return;
      }

      //Check existing
      const checkExisting = await req.db
          .collection('users')
          .findOne({ email: email });
      //Send error response if duplicate user is found
      if (checkExisting) {
          res.status(422).json({ message: 'User already exists' });
        //   client.close();
          return;
      }
      //Hash password
      const status = await req.db.collection('users').insertOne({
          email,
          password: await hash(password, 12),
      });
      //Send success response
      res.status(201).json({ message: 'User created', ...status });




})

handler.get((req, res)=>{
    return res.status(200).json({
        message:"testing"
    })

})

export default handler;