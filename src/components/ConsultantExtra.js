import React, {Component} from 'react';

class ConsultantExtra extends Component
{
  constructor(props)
  {
    super(props);
    console.log(this.props.xkey + ": " + this.props.showData);
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default ConsultantExtra;
