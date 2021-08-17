import middleware from '../../../middleware/dbconfig';
import nextConnect from 'next-connect';

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
    //Getting email and password from body

    const status = await req.db.collection('tickets').find({}).toArray(function(err, result) {
        if (err) {throw err ;}
        else{
            console.log(result);
            res.status(201).json({ message: 'Ticket created', result });
        }


      });




    //Send success response





})


export default handler;