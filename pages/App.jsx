import React from 'react';
import CreateTicket from './CreateTicket'
import Tickets from './Tickets';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'



function App(props) {


    let [tickets, setTickets] = useState([])
    let [loading, setLoading] = useState(false)

    useEffect(() => {

        getTickets();

    }, [])

    const getTickets = async () => {
        setLoading(true)
        let response = await fetch('/api/tickets/gettickets')
        let data = await response.json()
        setLoading(false)
        console.log(data.result)
        setTickets(data.result)
        setLoading(false)
    }

    return (


        <div className={styles.formcontrol}>

            <CreateTicket />
            <div className={styles.ticketsList}>
            {loading ? <h4>Loading</h4>

                :


                tickets.map((item, idx) =>
                    <Tickets
                        key= {idx}
                        ticket={item.ticket}
                        email={item.email}
                        priority={item.priority}
                        message={item.message} />
                )}

   </div>
        </div>

    );
}

export default App;