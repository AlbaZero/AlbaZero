import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {darkBlack, blue500, white, green700, red700} from 'material-ui/styles/colors';
import Email from 'material-ui/svg-icons/communication/email';
import InfoOutline from 'material-ui/svg-icons/action/info-outline';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import Paper from 'material-ui/Paper';

const PaperStyle = {
  padding: 7
};

class EventListFront extends Component
{
  render()
  {
    return (
      <Paper style={PaperStyle} zDepth={1}>
      <List>
              <h2>Händelser</h2>
              <ListItem
                leftIcon={<Email color={blue500} />}
                primaryText="Ny kandidat?"
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>Jacob Larsson</span> --
                    Jag tror jag har hittat en kandidat, kan du ringa mig?
                  </p>
                }
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              <ListItem
                leftIcon={<InfoOutline color={red700} />}
                primaryText="Systemuppdatering"
                secondaryText={
                  <p>
                    Fredagen den 14/4 kommer systemet vara otillgängligt till och från då vi genomför uppdateringar.
                  </p>
                }
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              <ListItem
                leftIcon={<PersonAdd color={green700} backgroundColor={white} />}
                primaryText="Ny kandidat"
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>ASP.NET Utvecklare</span> --
                    En ny konsult finns nu tillgänglig som matchar din sökning på behovet "ASP.NET Utvecklare".
                  </p>
                }
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              <ListItem
                leftIcon={<Email color={blue500} backgroundColor={white} />}
                primaryText="Planeringsmöte"
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>Jonas Olsson</span> --
                    Vi skulle behöva ses och planera projektet, hör av dig till mig.
                  </p>
                }
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              <ListItem
                leftIcon={<ThumbUp color={green700} backgroundColor={white} />}
                primaryText="Kandidatlista accepterad"
                secondaryText={
                  <p>
                    Kandidatlistan för behovet "ASP.NET utvecklare" har blivit accepterad av inköp.
                  </p>
                }
                secondaryTextLines={2}
              />
            </List>
          </Paper>
    );
  }

}

export default EventListFront;
