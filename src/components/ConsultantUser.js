import React, {Component} from 'react';
import ConsultantExtra from './ConsultantExtra';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/info-outline';

class ConsultantUser extends Component
{
  constructor (props)
  {
    super(props);
    this.state = {
      consultData: this.props.userData,
      extraData: false
    };
    this.drawExtraData = this.drawExtraData.bind(this);
  }

  outputRating(count)
  {
    var stars = '';
    for(let x = 0; x < count; x++)
      stars += '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
    return {__html: stars};
  }

  drawExtraData()
  {
    this.setState({extraData: true});
    console.log("Drawing data");
  }


  render() {
    var propTemp =  Object.assign({}, this.props);
    delete propTemp["userData"];
    const { ...otherProps } = propTemp;
    return (
      <TableRow { ...otherProps }>
        {otherProps.children[0] /* checkbox passed down from Table-Body*/}
        <TableRowColumn>{this.state.consultData.name}</TableRowColumn>
        <TableRowColumn>{this.state.consultData.market}</TableRowColumn>
        <TableRowColumn>{this.state.consultData.availability}</TableRowColumn>
        <TableRowColumn>
          {
            this.state.consultData.techniques.map(function(tech) {
              return tech +  " ";
            })
          }
        </TableRowColumn>
        <TableRowColumn>{this.state.consultData.rate}</TableRowColumn>
        <TableRowColumn>{this.state.consultData.rating}</TableRowColumn>
        <TableRowColumn>
          <IconButton touch={true} onTouchTap={this.drawExtraData}>
              <ActionGrade />
          </IconButton>
        </TableRowColumn>
      </TableRow>
    );
  }


  render2() {
    return (
      <div>
        <div className={"row Consultant-Container Consult-Identifier-" + this.state.consultData.id}>
            <div onClick={() => this.drawExtraData()} className="col-md-2 Consultant-Name clickable">{this.state.consultData.name}</div>
            <div className="col-md-2 Consultant-Market">{this.state.consultData.market}</div>
            <div className="col-md-2 Consultant-Availability">{this.state.consultData.availability}</div>
            <div className="col-md-3 Consultant-Techniques">{
              this.state.consultData.techniques.map(function(tech) {
                return tech +  " ";
              })
            }
            </div>
            <div className="col-md-1 Consultant-Rate">{this.state.consultData.rate}</div>
            <div className="col-md-2 Consultant-Rating"><div dangerouslySetInnerHTML={this.outputRating(this.state.consultData.rating)}></div></div>
        </div>
        <div>
          <ConsultantExtra key={"x" + this.state.consultData.id} xkey={"x" + this.state.consultData.id} showData={this.state.extraData} />
        </div>
      </div>
    );
  }
}

export default ConsultantUser;
