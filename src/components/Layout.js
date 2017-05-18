import React, { Component } from 'react';
import Header from './Header'
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './assets/Layout.css';

class Layout extends Component
{

  render() {
    return (
      <div>
        <Header />
        <Grid fluid>
          <Row>
            <Col lg={12}>
              <div className="">
                <div className={styles.contentContainer}>
                  {this.props.children}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} sm={12} xs={12} className={styles.footer}>
              <p>&copy; {new Date().getFullYear()} Alba Enterprises</p>
            </Col>
          </Row>
      </Grid>
    </div>
    );
  }
}

export default Layout;
