import middleware from '../../../middleware/dbconfig';
import nextConnect from 'next-connect';

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {

    //Getting email and password from body
    const { ticket,email, priority,message  } = req.body;
    //Validate
    if (!email || !email.includes('@') ) {
        res.status(422).json({ message: 'Invalid Data' });
        return;
    }


    const status = await req.db.collection('tickets').insertOne({
       ticket,
       email,
       priority,
       message

    });
    //Send success response
    res.status(201).json({ message: 'Ticket created', ...status });




})

handler.get((req, res) => {
    return res.status(200).json({
        message: "testing"
    })

})

export default handler;