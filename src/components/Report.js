import React, {Component} from 'react';

class Report extends Component {

  constructor(props) {
    super(props);
    this.questionForm = 'https://docs.google.com/forms/d/e/1FAIpQLSexei8r8SBRGBTg9N1jbZ71pYxEelNtTZp-YPQL-55KlZphew/viewform?embedded=true';
  }

  render() {
    return (
      <div>
        <iframe title='researchQ-iframe' src={this.questionForm} height='2100px' width='90%' />
      </div>
     );
  }
}

export default Report;
