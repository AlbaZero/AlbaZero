import React, {Component} from 'react';
import update from 'immutability-helper';
import NeedSettingContainer from '../../components/NeedSettingContainer';
import Layout from '../../components/Layout';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const PaperStyle = {
  padding: 7
};

class Purchase extends Component
{
  constructor (props) {
    super(props);
    this.state = {
      needList: [
        {id: 1, name: 'Tekniker HR', visible: true, sliders: {age: [18, 99], rate: [200, 2000], experience: [0, 50]}, blacklist: '' },
        {id: 2, name: 'Sekreterare', visible: false, sliders: {age: [18, 99], rate: [200, 2000], experience: [0, 50]}, blacklist: 'ericsson scania'},
      ],
      defaultNeedValues: {id: 1, name: '', visible: true, sliders: {age: [18, 99], rate: [200, 2000], experience: [0, 50]}, blacklist: '' },
      needName: ''
    };

    this.createNewNeed = this.createNewNeed.bind(this);
    this.changeNeedName = this.changeNeedName.bind(this);
  }

  drawNeedList()
  {
    return this.state.needList.map(need => (
      <NeedSettingContainer
        needData={need}
        key={need.id}
      />
    ));
  }

  createNewNeed()
  {
    var d = new Date();
    var defaultNeed = this.state.defaultNeedValues;

    defaultNeed = update(defaultNeed, {id: {$set: d.getTime()}});
    defaultNeed.name = this.state.needName;
    var needs = this.state.needList;
    needs.unshift(defaultNeed);
    this.setState({needList: needs, needName: ''});

    console.log(needs);
  }

  changeNeedName(e)
  {
    this.setState({needName: e.target.value});
  }

  render () {
    return (
      <Layout>
        <div>
          <div className="pagePurchase">
            <div className="">
              <div className="">
                <div className="">
                  <Paper style={PaperStyle} zDepth={1}>
                    <div className="">
                      <h3>Skapa nytt behov</h3>
                      <div className="">
                        <div className="">
                          <TextField
                            floatingLabelText="Namnge ditt behov..."
                            value={this.state.needName}
                            onChange={this.changeNeedName}
                            name="purchaseNewNeedName"
                          />
                          &nbsp;
                          <RaisedButton label="Skapa behov" primary={true} onTouchTap={() => this.createNewNeed()} />
                        </div>
                        <div className="">

                        </div>
                      </div>
                    </div>
                  </Paper>
                  <div className="Purchase-listNeeds">
                    {this.drawNeedList()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Purchase;
