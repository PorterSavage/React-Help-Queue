/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Ticket from './Ticket';

function TicketList(props) {
  const { ticketList } = props;
  return (
    <div>
      <hr />
      {ticketList.map(ticket => (
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          key={ticket.id}
        />
      ))}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.instanceOf(Array).isRequired,
};

export default TicketList;
