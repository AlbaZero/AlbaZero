import React, { Component } from 'react';
import ConsultantList from '../../components/ConsultantList';
import Layout from '../../components/Layout';

class Needs extends Component
{
  constructor(props)
  {
    super(props);
    this.renderConsultantList = this.renderConsultantList.bind(this);
  }

  renderConsultantList()
  {
    return (<div>
      <ConsultantList
        key="cli"
      />
    </div>
    );
  }

  render() {
    return (
      <Layout>
          {this.renderConsultantList()}
      </Layout>
    );
  }
}

export default Needs;
