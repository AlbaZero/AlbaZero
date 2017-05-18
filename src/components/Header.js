import React, { Component } from 'react';
import { Link } from 'react-router'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import AttachMoney from 'material-ui/svg-icons/editor/attach-money';
import Home from 'material-ui/svg-icons/action/home';
import ContactMail from 'material-ui/svg-icons/communication/contact-mail';
import Settings from 'material-ui/svg-icons/action/settings';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import Email from 'material-ui/svg-icons/communication/email';
import AlbaLogo from '../assets/images/Alba-EnterprisesLogo.png';
import AlbaLogoRed from '../assets/images/Alba-EnterprisesLogoRed.png';
import { browserHistory } from 'react-router';
import styles from '../assets/style.css';

class Header extends Component
{
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.moveToStart = this.moveToStart.bind(this);
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  moveToStart()
  {
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="">
        <AppBar
          title={<img className={styles.appbarLogo} alt="logo" src={AlbaLogo} />}
          onLeftIconButtonTouchTap={this.handleToggle}
          onTitleTouchTap={this.moveToStart}
          titleStyle={{verticalAlign: "middle", cursor: "pointer"}}
        >
        </AppBar>
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
          >
          <img src={AlbaLogoRed} alt="logo-red" className={styles.drawerLogo} />
          <MenuItem onTouchTap={this.handleClose} primaryText="Hem" leftIcon={<Home />} containerElement={<Link to="/dash" />} />
          <MenuItem onTouchTap={this.handleClose} primaryText="Behov" leftIcon={<ContactMail />} containerElement={<Link to="/needs" />} />
          <MenuItem onTouchTap={this.handleClose} primaryText="Inköp" leftIcon={<AttachMoney />} containerElement={<Link to="/purchase" />} />
          <Divider inset={true} />
          <MenuItem onTouchTap={this.handleClose} primaryText="Meddelanden" leftIcon={<Email />} containerElement={<Link to="/inbox" />} />
          <MenuItem onTouchTap={this.handleClose} primaryText="Inställningar" leftIcon={<Settings />} containerElement={<Link to="/settings" />} />
          <MenuItem onTouchTap={this.handleClose} primaryText="Logga ut" leftIcon={<ExitToApp />} containerElement={<Link to="/" />} />
        </Drawer>
      </div>
    );
  }
}

export default Header;
