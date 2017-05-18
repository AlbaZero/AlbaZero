import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Divider from 'material-ui/Divider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const PaperStyle = {
  padding: 7
};

class Settings extends Component
{
  render ()
  {
    return (
      <Layout>
        <Row>
          <Col lg={6}>
            <Paper style={PaperStyle}>
              <h2>Inställningar</h2>
              <Divider />
              <h3>Ändra lösenord</h3>
              <Divider />
              <TextField
                floatingLabelText="Gammalt lösenord"
                name="oldPass"
                type="password"
              />
              <br />
              <TextField
                floatingLabelText="Nytt lösenord"
                name="newPass1"
                type="password"
              />
              <br />
              <TextField
                floatingLabelText="Bekräfta nytt lösenord"
                name="newPass2"
                type="password"
              />
              <br />
              <RaisedButton label="Uppdatera lösenord" />
            </Paper>
          </Col>
          <Col lg={6}>
            <Paper style={PaperStyle}>
              <h2>Användare</h2>
              <Table>
                <TableBody displayRowCheckbox={false}>
                  <TableRow>
                    <TableRowColumn>Tim</TableRowColumn>
                    <TableRowColumn>tim.pettersson@albaenterprises.se</TableRowColumn>
                    <TableRowColumn>
                      <DropDownMenu value={1}>
                        <MenuItem value={1} primaryText="Administratör" />
                        <MenuItem value={2} primaryText="Inköp" />
                        <MenuItem value={3} primaryText="Behov" />
                        <MenuItem value={4} primaryText="Ekonomi" />
                      </DropDownMenu>
                    </TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Jonas</TableRowColumn>
                    <TableRowColumn>jonas.liedberg@albaenterprises.se</TableRowColumn>
                    <TableRowColumn>
                      <DropDownMenu value={1}>
                        <MenuItem value={1} primaryText="Administratör" />
                        <MenuItem value={2} primaryText="Inköp" />
                        <MenuItem value={3} primaryText="Behov" />
                        <MenuItem value={4} primaryText="Ekonomi" />
                      </DropDownMenu>
                    </TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default Settings;
