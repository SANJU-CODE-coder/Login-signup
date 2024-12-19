/*import React from 'react'

const Support = () => {
    const [support, setSupport] = React.useState({
        contactEmail: 'support@example.com',
        contactPhone: '123-456-7890'
      });
    
      const handleUpdateSupport = (newSupport) => {
        setSupport(newSupport);
      };
        
  return (
    <div>
         <div id="support">
        <h2>Support/Help</h2>
        <form>
          <label>Contact Email:</label>
          <input type="email" value={support.contactEmail} onChange={(e) => handleUpdateSupport({ contactEmail: e.target.value })} />
          <br />
          <label>Contact Phone:</label>
          <input type="tel" value={support.contactPhone} onChange={(e) => handleUpdateSupport({ contactPhone: e.target.value })} />
          
        </form>
      </div>
      
    </div>
  )
}

export default Support*/









import React from 'react';
import './css/Suppt.css'
const Support = () => {
    const [support, setSupport] = React.useState({
        contactEmail: 'support@example.com',
        contactPhone: '123-456-7890'
    });

    const [tickets, setTickets] = React.useState([]);
    const [newTicket, setNewTicket] = React.useState({ subject: '', description: '' });
    const [selectedTicket, setSelectedTicket] = React.useState(null);

    const handleUpdateSupport = (newSupport) => {
        setSupport(newSupport);
    };

    const handleTicketChange = (e) => {
        const { name, value } = e.target;
        setNewTicket(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmitTicket = (e) => {
        e.preventDefault();
        setTickets([...tickets, { ...newTicket, id: Date.now(), status: 'Open' }]);
        setNewTicket({ subject: '', description: '' }); // Reset the form
    };

    const selectTicket = (ticket) => {
        setSelectedTicket(ticket);
    };

    return (
        <div className='sup'> 
            <div id="support">
                <h2>Support/Help</h2>
                <form>
                    <label className='info'>Contact Email:</label>
                    <input
                        type="email"
                        value={support.contactEmail}
                        onChange={(e) => handleUpdateSupport({ contactEmail: e.target.value })}
                    />
                    <br />
                    <label  className='info'>Contact Phone:</label>
                    <input
                        type="tel"
                        value={support.contactPhone}
                        onChange={(e) => handleUpdateSupport({ contactPhone: e.target.value })}
                    />
                </form>
            </div>

            <div id="ticket-form">
                <h2>Submit a Support Ticket</h2>
                <form onSubmit={handleSubmitTicket}  className='formsupport'>  
                    <label className='info'>Subject:</label>
                    <input
                        type="text"
                        name="subject"
                        value={newTicket.subject}
                        onChange={handleTicketChange}
                        required
                    />
                    <br />
                    <label className='info'>Description:</label>
                    <textarea
                        name="description"
                        value={newTicket.description}
                        onChange={handleTicketChange}
                        required
                    />
                    <br />
                    < div className='support-button'>
                    <button type="submit">Submit Ticket</button>
                    </div>
                </form>
            </div>

            <div id="ticket-list">
                <h2>Submitted Tickets</h2>
                {tickets.length === 0 ? (
                    <p>No tickets submitted yet.</p>
                ) : (
                    tickets.map(ticket => (
                        <div key={ticket.id} onClick={() => selectTicket(ticket)} className="ticket-item">
                            <h3>{ticket.subject}</h3>
                            <p>Status: {ticket.status}</p>
                        </div>
                    ))
                )}
            </div>

            {selectedTicket && (
                <div id="ticket-detail">
                    <h2>Ticket Detail</h2>
                    <h3>{selectedTicket.subject}</h3>
                    <p>Status: {selectedTicket.status}</p>
                    <p>{selectedTicket.description}</p>
                </div>
            )}
        </div>
    );
};

export default Support;