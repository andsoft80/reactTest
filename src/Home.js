import React from 'react';
import { addAlert } from './actions/alert';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      someKey: 'someValue'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    
  }

  render() {
    return <button onClick={this.props.addAlert}>{this.props.text}</button>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addAlert }, dispatch);
export default connect(
    null,
    mapDispatchToProps
  )(Home);
