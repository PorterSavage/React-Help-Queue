/* eslint-disable linebreak-style */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Moment from 'moment';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: [],
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() => this.updateTicketElapsedWaitTime(),
      60000);
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    const { masterTicketList } = this.state;
    console.log('check');
    const newMasterTicketList = masterTicketList.slice();
    newMasterTicketList.forEach(ticket => ticket.formattedWaitTime = ticket.timeOpen.fromNow(true));
    this.setState({ masterTicketList: newMasterTicketList });
  }

  handleAddingNewTicketToList(newTicket) {
    const { masterTicketList } = this.state;
    const newMasterTicketList = masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    newMasterTicketList.push(newTicket);
    this.setState({ masterTicketList: newMasterTicketList });
  }

  render() {
    const { masterTicketList } = this.state;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <TicketList ticketList={masterTicketList} />} />
          <Route path="/newticket" render={() => <NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
