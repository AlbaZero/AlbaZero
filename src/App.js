import React, { Component } from 'react';
import Layout from './components/Layout';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import EventListFront from './components/EventListFront'
import styles from './assets/style.css';

const PaperStyle = {
  padding: 7
};

class App extends Component {

  render() {
    return (
      <Layout>
          <Row>
            <Col lg={6} sm={12} xs={12} className={styles.paperMargin}>
              <Paper style={PaperStyle} zDepth={1}>
                <h1>Välkommen till AlbaZero som kund</h1>
                <p>
                  Du har valt marknadens effektivaste sourcingtjänst med de bästa villkoren för dig som kund. AlbaZero erbjuder dig en unik digitaliserad lösning där du som kund får kompetens för alla pengar du betalar. 100% av det du betalar för går till den leverantör som utför uppdraget.<br />
                  För din del innebär detta att du nu kan börja använda den kostnadsfria tjänsten omgående genom att söka i vår databas efter resurser. Då du hittar ett CV som intresserar dig kan du välja en tid som passar dig och boka en intervju.<br />
                  Efter genomfördintervju kan du välja att teckna avtal eller avböja. Allt kostnadsfritt.<br />
                  <br />
                  AlbaZero vill erbjuda sina kunder ett bättre beslutsstöd. Därför är din återkoppling ovärderlig och du kommer medverka i kvalitetsarbetet genom att fylla i en utvärdering av varje resurs med hjälp av en wizard. På så vis hjälper du dig själv och alla andra kunder att långsiktigt öka kvaliteten i tjänsten.<br />
                  AlbaZero sköter din administration och skickar en faktura per månad och kreditlängd.<br />
                  För att hjälpa dig ytterligare i din roll som kund kan du välja att köpa till en rad tjänster som du enkelt aktiverar under inställningar. Du betalar bara när AlbaZero tillför värde och då i form av en avgift vid det unika tillfället.
                </p>
                <p>
                  Varmt välkommen till AlbaZero! <br />
                  <i>Jonas Liedberg, VD</i>
                </p>
              </Paper>
            </Col>
            <Col lg={6} sm={12} xs={12} className={styles.paperMargin}>
              <EventListFront />
            </Col>
          </Row>
      </Layout>
    );
  }
}

export default App;
