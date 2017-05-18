import React, {Component} from 'react';
import {Range} from 'rc-slider';
import Paper from 'material-ui/Paper';
import { Row, Col } from 'react-flexbox-grid';

const PaperStyle = {
  padding: 7,
  marginTop: 5
};

class NeedSettingContainer extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      sliders: this.props.needData.sliders
    }
    this.changeSliderValue = this.changeSliderValue.bind(this);
  }

  changeSliderValue(foo, event)
  {
    let sliders = this.state.sliders;
    sliders[foo] = event;
    this.setState({sliders: sliders});
  }

  render() {
    let sliderChangeAge = this.changeSliderValue.bind(this, 'age');
    let sliderChangeExperience = this.changeSliderValue.bind(this, 'experience');
    let sliderChangeRate = this.changeSliderValue.bind(this, 'rate');

    return (
      <Paper style={PaperStyle} zDepth={1}>
        <div className="">
          <Row>
            <Col lg={12}>
              <h4>
                <span className="clickable">{this.props.needData.name}</span>
              </h4>
            </Col>
          </Row>
          <div className="NeedSetting-settings">
            <Row>
              <Col lg={4}>
                <h5>Erfarenhet, år</h5>
                <div>
                  <div className="row">
                    <div className="col-md-6">{this.state.sliders.experience[0]}</div>
                    <div className="col-md-6 text-right">{this.state.sliders.experience[1]}</div>
                  </div>
                  <Range min={0} max={50} step={1} name="experience" defaultValue={this.props.needData.sliders.experience} onChange={sliderChangeExperience} />
                </div>
              </Col>
              <Col lg={4}>
                <h5>Timpris</h5>
                <div>
                  <div className="row">
                    <div className="col-md-6">{this.state.sliders.rate[0]}</div>
                    <div className="col-md-6 text-right">{this.state.sliders.rate[1]}</div>
                  </div>
                  <Range min={200} max={2000} step={50} defaultValue={this.props.needData.sliders.rate} onChange={sliderChangeRate} />
                </div>
              </Col>
              <Col lg={4}>
                <h5>Ålder</h5>
                <div>
                  <div className="row">
                    <div className="col-md-6">{this.state.sliders.age[0]}</div>
                    <div className="col-md-6 text-right">{this.state.sliders.age[1]}</div>
                  </div>
                  <Range min={18} max={99} step={1} defaultValue={this.props.needData.sliders.age} onChange={sliderChangeAge} />
                </div>
              </Col>
            </Row>
            <div className="row">
              <div className="col-md-6 form-group">
                <h5>Blacklist</h5>
                <textarea className="NeedSetting-blacklist form-control" defaultValue={this.props.needData.blacklist} />
              </div>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

export default NeedSettingContainer;
