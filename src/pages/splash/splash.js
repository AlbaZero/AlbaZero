import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './splash.css';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

const localStyles = {
  floatingLabelStyle: {
    color: '#09111e',
  }
};

class Splash extends Component
{

  constructor (props) {
    super(props);
    this.state = {
      custLoginOpen: false,
      compLoginOpen: false,
      custLoginUsername: '',
      custLoginPassword: '',
      compLoginPassword: '',
      compLoginUsername: ''
    };
    this.changeText = this.changeText.bind(this);
  }

  openLoginCust = () => {
    this.setState({custLoginOpen: true});
  };
  openLoginComp = () => {
    this.setState({compLoginOpen: true});
  };
  closeLoginCust = () => {
    this.setState({custLoginOpen: false});
  };
  closeLoginComp = () => {
    this.setState({compLoginOpen: false});
  };
  changeText(data) {
    this.setState({[data.target.name]: data.target.value});
  }

  render() {
    return (
      <div>
        <Dialog
          title="Logga in som Kund"
          modal={false}
          open={this.state.custLoginOpen}
          onRequestClose={this.closeLoginCust}
          className={styles.loginDialog}
          contentStyle={{maxWidth: 400}}
        >
          <div className={styles.loginDialogFields}>
            <TextField fullWidth={true} floatingLabelStyle={localStyles.floatingLabelStyle} autoFocus name="custLoginUsername" floatingLabelText="Användarnamn"
              value={this.state.custLoginUsername}
              onChange={this.changeText} />
            <br />
            <TextField fullWidth={true} floatingLabelStyle={localStyles.floatingLabelStyle} name="custLoginPassword" floatingLabelText="Lösenord" type="password"
              value={this.state.custLoginPassword}
              onChange={this.changeText} />
          </div>
          <div className={styles.loginDialogButton}>
            <RaisedButton disabled={true} label="Logga in" primary={true} />
          </div>
        </Dialog>
        <Dialog
          title="Logga in som Leverantör"
          modal={false}
          open={this.state.compLoginOpen}
          onRequestClose={this.closeLoginComp}
          className={styles.loginDialog}
          contentStyle={{maxWidth: 400}}
        >
          <div className={styles.loginDialogFields}>
            <TextField fullWidth={true} floatingLabelStyle={localStyles.floatingLabelStyle} autoFocus name="compLoginUsername" floatingLabelText="Användarnamn"
              value={this.state.compLoginUsername}
              onChange={this.changeText} />
            <br />
            <TextField fullWidth={true} floatingLabelStyle={localStyles.floatingLabelStyle} name="compLoginPassword" floatingLabelText="Lösenord" type="password"
              value={this.state.compLoginPassword}
              onChange={this.changeText} />
          </div>
          <div className={styles.loginDialogButton}>
            <RaisedButton label="Logga in" primary={true} />
          </div>
        </Dialog>
        <div className={styles.section1} >
          <Grid fluid>
              <Row>
                <Col lg={8} lgOffset={2} sm={12} xs={12}>
                  <h1>Alba Zero</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales ac nisl sit amet faucibus. Nulla vel neque ornare, porttitor neque id, maximus libero. Duis placerat erat vitae justo maximus, vitae iaculis enim vehicula. Phasellus orci mi, suscipit quis felis non, congue pellentesque diam. Quisque faucibus est mi, ultricies blandit libero consectetur at. Ut ultricies condimentum ligula, non convallis quam. Integer sit amet dolor rutrum tellus elementum elementum. Aliquam erat volutpat. Sed ligula sapien, egestas eu consequat sed, semper in nunc. In in commodo nulla, et efficitur neque.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg={8} lgOffset={2} sm={12} xs={12}>
                  <div className={styles.buttonLogin}>
                    <h3>Välj hur du vill logga in:</h3>
                      <RaisedButton label="Kund" primary={true} onTouchTap={this.openLoginCust} />
                      <div className={styles.buttonSpacer}></div>
                      <RaisedButton label="Leverantör" primary={true} onTouchTap={this.openLoginComp}  />
                  </div>
                </Col>
              </Row>
          </Grid>
          </div>
          <div className={styles.section2}>
            <Grid fluid>
              <Row>
                <Col lg={6} lgOffset={3} sm={12} xs={12}>
                  <Row className={styles.section2info} middle="xs">
                    <Col lg={4} sm={12} xs={12}>
                      <img alt="placeholder" src="https://previews.123rf.com/images/maxkabakov/maxkabakov1108/maxkabakov110800055/10252417-Business-chart-3d-over-white-background-Stock-Photo-arrow-sales-graph.jpg" />
                    </Col>
                    <Col lg={8} sm={12} xs={12}>
                      <h2>Curabitur dapibus ornare mi</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nunc, consequat et rutrum posuere, suscipit ac turpis. Nam in ultricies eros, quis laoreet velit. Etiam eu volutpat ipsum, id venenatis purus.</p>
                    </Col>
                  </Row>
                  <Row reverse={true} className={styles.section2info} middle="xs">
                    <Col lg={4} sm={12} xs={12}>
                      <img alt="placeholder" src="https://previews.123rf.com/images/cherezoff/cherezoff1303/cherezoff130300222/18814099-3d-white-man-standing-with-a-laptop-Isolated-render-on-a-white-background-Stock-Photo.jpg" />
                    </Col>
                    <Col lg={8} sm={12} xs={12}>
                      <h2>Fusce scelerisque magna sed</h2>
                      <p>Ut in tellus gravida, dapibus turpis nec, accumsan urna. Duis finibus est ac lacus efficitur, quis vulputate nisi hendrerit. In neque magna, dignissim ut congue ac, mollis vel leo.</p>
                    </Col>
                  </Row>
                  <Row className={styles.section2info} middle="xs">
                    <Col lg={4} sm={12} xs={12}>
                      <img alt="placeholder" src="http://ccs.miami.edu/wp-content/uploads/2011/05/Big-Data-Analytics-and-Data-Mining-gallery-900x600.jpg" />
                    </Col>
                    <Col lg={8} sm={12} xs={12}>
                      <h2>Maecenas nec urna fringilla</h2>
                      <p>Aenean luctus lorem vel finibus lobortis. In lorem ante, posuere sed semper vitae, consequat eget erat. Aliquam ultricies faucibus magna id vestibulum. Sed ac eleifend leo. Nullam eu nisl vitae ante bibendum maximus. Praesent auctor mollis rutrum.</p>
                    </Col>
                  </Row>
                  <Row reverse={true} className={styles.section2info} middle="xs">
                    <Col lg={4} sm={12} xs={12}>
                      <img alt="placeholder" src="https://previews.123rf.com/images/scanrail/scanrail1203/scanrail120300018/12608740-Row-of-network-servers-in-data-center-isolated-on-white-background-with-reflection-effect-Stock-Photo.jpg" />
                    </Col>
                    <Col lg={8} sm={12} xs={12}>
                      <h2>Nullam a venenatis tellus</h2>
                      <p>Duis vel nulla est. Morbi tempus convallis ullamcorper. Morbi ut finibus metus. Phasellus suscipit lacinia velit in sagittis. Suspendisse potenti. Duis consequat lacinia eros, nec lobortis purus posuere ac.</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Grid>
          </div>
          <div>
            <Grid fluid>
              <Row>
                <Col lg={8} lgOffset={2} sm={12} xs={12} className={styles.footer}>
                  <p>&copy; {new Date().getFullYear()} Alba Enterprises</p>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
    );
  }
}

export default Splash;
