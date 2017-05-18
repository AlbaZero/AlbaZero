import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Row, Col } from 'react-flexbox-grid';
import {Table, TableBody,  TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

class Inbox extends Component
{

  constructor (props)
  {
    super(props);
    this.state = {
      messages:
      [
        {messageId: 1, messageFrom: "John", messageDate: "2017-04-01 13:53", messageText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat erat, luctus et efficitur ac, pharetra ut diam. Nunc ut maximus mauris."},
        {messageId: 2, messageFrom: "Daniel", messageDate: "2017-04-05 11:25", messageText: "Cras dignissim lobortis dictum. Aliquam egestas neque ex, in auctor enim pretium eu. Donec non facilisis elit."},
        {messageId: 3, messageFrom: "Nicklas", messageDate: "2017-04-05 14:25", messageText: "Aliquam venenatis massa eget tristique mattis."}
      ],
      events:
      [
        {messageId: 1, messageFrom: "John", messageDate: "2017-04-01 13:53", messageText: "Nullam dolor sem, vehicula non ultricies vehicula, finibus ut risus. Nunc commodo leo a efficitur eleifend. "},
        {messageId: 2, messageFrom: "Daniel", messageDate: "2017-04-05 11:25", messageText: "Aenean velit dui, eleifend nec luctus et, vulputate rhoncus massa."},
        {messageId: 3, messageFrom: "Nicklas", messageDate: "2017-04-05 14:25", messageText: "Nunc ut felis elementum, faucibus ante non, consequat turpis."},
        {messageId: 4, messageFrom: "Nicklas", messageDate: "2017-04-05 14:25", messageText: "Nullam at ante mattis, dignissim magna sed, tincidunt dolor."}
      ]
        };
  }

  renderMessages()
  {
    return this.state.messages.map(message => (
        <TableRow selectable={false}>
          <TableRowColumn>{message.messageFrom}</TableRowColumn>
          <TableRowColumn>{message.messageText}</TableRowColumn>
          <TableRowColumn>{message.messageDate}</TableRowColumn>
        </TableRow>
    ));
  }
  renderEvents()
  {
    return this.state.events.map(message => (
        <TableRow selectable={false}>
          <TableRowColumn>{message.messageText}</TableRowColumn>
          <TableRowColumn>{message.messageDate}</TableRowColumn>
        </TableRow>
    ));
  }

  render() {
    return (
      <Layout>
          <Row>
            <Col lg={6}>
              <Paper>
                <h1 className="headerPadding">Meddelanden</h1>
                <Table>
                  <TableBody showRowHover={true} displayRowCheckbox={false}>
                    {this.renderMessages()}
                  </TableBody>
                </Table>
              </Paper>
            </Col>
            <Col lg={6}>
              <Paper>
                <h1 className="headerPadding">Händelser</h1>
                <Table>
                  <TableBody showRowHover={true} displayRowCheckbox={false}>
                    {this.renderEvents()}
                  </TableBody>
                </Table>
              </Paper>
            </Col>
          </Row>
      </Layout>
    );
  }
}

export default Inbox;
