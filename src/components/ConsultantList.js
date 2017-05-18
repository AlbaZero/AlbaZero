import React, { Component } from 'react';
import ConsultantUser from './ConsultantUser';
import {auDoSort, addDaysToDate} from './Utilities.js';
import Slider from 'rc-slider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'rc-slider/assets/index.css';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import styles from './assets/ConsultantList.css';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/info-outline';
import Dialog from 'material-ui/Dialog';
import Chip from 'material-ui/Chip';
import DatePicker from 'material-ui/DatePicker';
import 'rc-slider/assets/index.css';
//import sliderStyles from 'rc-slider/assets/index.css';
//console.log(sliderStyles);

class ConsultantList extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      activeConsultants: [],
      techValue: '',
      lastSort: 'name',
      maxPrice: 2000,
      availableWeeks: 52,
      extraDataOpen: false,
      extraData: ''
    };
    this.doSearch = this.doSearch.bind(this);
    this.cellClick = this.cellClick.bind(this);
    this.doOrderBy = this.doOrderBy.bind(this);
    this.changeSliderPrice = this.changeSliderPrice.bind(this);
    this.changeSliderWeeks = this.changeSliderWeeks.bind(this);
    this.changeInputValue = this.changeInputValue.bind(this);
    this.renderTechniques = this.renderTechniques.bind(this);
  }

  albaContains(a, obj) {
      var i = a.length;
      while (i--) {
         if (a[i].toLowerCase() === obj.toLowerCase()) {
             return true;
         }
      }
      return false;
  }

  albaContainsAll(consultantTechniques, requiredTechniques) {
      var i = requiredTechniques.length;

      while (i--) {
        if(!this.albaContains(consultantTechniques, requiredTechniques[i]))
          return false;
      }

      return true;
  }

  doSearch()
  {
    //fetch('/consult/consult.php').then((response) => response.json())
    fetch('/consult.json').then((response) => response.json())
    .then((responseJson) => {
      var consultants = [];
      for(let key in responseJson)
      {
        if(responseJson.hasOwnProperty(key))
          consultants.push(responseJson[key]);

      }
      this.setState({
        activeConsultants: auDoSort(this.state.lastSort, consultants)
      });
      this.drawConsultants();
    });
  }

  doOrderBy(orderBy)
  {
    if(orderBy === this.state.lastSort)
    {
      orderBy = "-" + orderBy;
    }

    this.setState({
      activeConsultants: auDoSort(orderBy, this.state.activeConsultants),
      lastSort: orderBy
    });
    this.drawConsultants();
  }

  drawExtraData(user)
  {
    this.setState({extraData: user, extraDataOpen: true, extraDataTitle: user.name});
  }

  drawConsultants()
  {
    if(this.state.activeConsultants.length > 0)
    {
      var users = [];
      var maxDate = addDaysToDate(new Date(), (this.state.availableWeeks*7));

      for(let i = 0; i< this.state.activeConsultants.length; i++)
      {
        let user = this.state.activeConsultants[i];

        //Max price checker
        if(user.rate > this.state.maxPrice)
          continue;

        //Availability checker
        if(new Date(user.availability) > maxDate)
          continue;

        users.push(user);
      }

      if(users.length < 1)
        return;

        return users.map((user, index) => (
          <TableRow key={"consultRow" + index}>
            <TableRowColumn className={styles.ColumnName}>{user.name}</TableRowColumn>
            <TableRowColumn className={styles.ColumnMarket}>{user.market}</TableRowColumn>
            <TableRowColumn className={styles.ColumnAvailability}>{user.availability}</TableRowColumn>
            <TableRowColumn className={styles.ColumnTechs}>
              {
                user.techniques.map(tech => (
                  tech +  " "
                ))
              }
            </TableRowColumn>
            <TableRowColumn className={styles.ColumnRate}>{user.rate}</TableRowColumn>
            <TableRowColumn className={styles.ColumnRating}>{user.rating}</TableRowColumn>
            <TableRowColumn className={styles.ColumnInfo}>
              <IconButton touch={true} onTouchTap={() => this.drawExtraData(user)}>
                  <ActionGrade />
              </IconButton>
            </TableRowColumn>
          </TableRow>
        ));
    }
  }

  changeSliderPrice(price)
  {
    this.setState({maxPrice: price});
  }
  changeSliderWeeks(weeks)
  {
    this.setState({availableWeeks: weeks});
  }
  changeInputValue(event)
  {
    this.setState({[event.target.name]: event.target.value});
  }

  cellClick(event, row, column) {
    if(row !== 1)
      return;

    switch(column)
    {
      case 1:
        this.doOrderBy("name");
      break;
      case 2:
        this.doOrderBy("market");
      break;
      case 3:
        this.doOrderBy("availability")
        break;
      case 5:
        this.doOrderBy("rate");
        break;
      case 6:
        this.doOrderBy("rating");
        break;
      default:
        break;
    }
  }

  renderTechniques() {
    if(this.state.extraData.techniques !== undefined)
    {
      return this.state.extraData.techniques.map((tech, index) => (
        <Chip style={{margin: '4px'}}>
          {tech}
        </Chip>
      ))
    }
  }

  closeExtraData = () => {
    this.setState({extraDataOpen: false});
  };

  disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  render() {
    return (
      <div className="comp-ConsultantList">
        <Dialog
          title={this.state.extraDataTitle}
          modal={false}
          open={this.state.extraDataOpen}
          onRequestClose={this.closeExtraData}
          className={styles.extraDataDialog}
          contentStyle={{maxWidth: 600}}
        >
          <Row>
            <Col lg={4} md={6} sm={12} xs={12}>
              <div>
                <span className={styles.DialogListTitle}>Bransch:</span>
                {this.state.extraData.market}
              </div>
              <div>
                <span className={styles.DialogListTitle}>Tillgänglig:</span>
                {this.state.extraData.availability}
              </div>
              <div>
                <span className={styles.DialogListTitle}>Timpris:</span>
                {this.state.extraData.rate}
              </div>
              <div>
                <span className={styles.DialogListTitle}>Rating:</span>
                {this.state.extraData.rating}
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className={styles.chipWrapper}>
                {this.renderTechniques()}
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
                <RaisedButton label="Ladda ned CV" primary={true} />
                <RaisedButton label="Kontakta" primary={true} />
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <DatePicker  floatingLabelText="Boka intervjuv" />
            </Col>
          </Row>
        </Dialog>


        <Row>
          <Col lgOffset={2} lg={8} md={12} sm={12} xs={12}>
            <Paper zDepth={1}>
              <div className={styles.containerWrapper}>
                <div className={styles.compConsultantListSearchContainer}>
                    <TextField
                      floatingLabelText="Tekniker: HTML CSS C#"
                      value={this.state.techValue}
                      onChange={this.changeInputValue}
                      name="techValue"
                    />
                    &nbsp;
                    <RaisedButton label="Sök &raquo;" primary={true} onTouchTap={this.doSearch} />
                </div>
                <div className="comp-ConsultantList-sliderContainer">
                  <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <div className="comp-ConsultantList-sliderPrice">
                        <div className="comp-ConsultantList-sliderTitle">
                          Max Pris: <span className="comp-ConsultantList-sliderPriceValue">{this.state.maxPrice}</span>
                        </div>
                        <Slider min={250} max={2000} step={50} defaultValue={2000} onChange={this.changeSliderPrice} />
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <div className="comp-ConsultantList-sliderPrice">
                        <div className="comp-ConsultantList-sliderTitle">
                          Tillgänglig, inom veckor: <span className="comp-ConsultantList-sliderWeekValue">{this.state.availableWeeks}</span>
                        </div>
                        <Slider min={0} max={52}  defaultValue={52} onChange={this.changeSliderWeeks} />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Paper>
          </Col>
        </Row>
        <Paper zDepth={1} className={styles.ConsultantListList}>
        <div className="comp-ConsultantList-list">
          <Row>
            <Col xs>
              <Table selectable={false}>
                  <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow onCellClick={this.cellClick}>
                      <TableHeaderColumn className={styles.ColumnName}>Namn</TableHeaderColumn>
                      <TableHeaderColumn className={styles.ColumnMarket}>Bransch</TableHeaderColumn>
                      <TableHeaderColumn className={styles.ColumnAvailability}>Tillgänglig</TableHeaderColumn>
                      <TableHeaderColumn className={styles.ColumnTechs}>Tekniker</TableHeaderColumn>
                      <TableHeaderColumn className={styles.ColumnRate}>Timpris</TableHeaderColumn>
                      <TableHeaderColumn className={styles.ColumnRating}>Rating</TableHeaderColumn>
                      <TableHeaderColumn className={styles.ColumnInfo}>Info</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody stripedRows={true} displayRowCheckbox={false}>
                    {this.drawConsultants()}
                  </TableBody>
              </Table>
            </Col>
          </Row>
        </div>
        </Paper>
      </div>
    );
  }
}

export default ConsultantList;
