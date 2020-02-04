import React from 'react';
import { addAlert, reduceAlert, setAlert } from './actions/alert';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MenuItem } from '@material-ui/core';

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
    //if (this.props.alert<5) {
      return <button onClick={this.props.addAlert}>{this.props.text}</button>;
   /// }
  //else return <p>{"Empty component"}</p>
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

// const mapDispatchToProps = dispatch => bindActionCreators({ addAlert }, dispatch);
const mapStateToProps = store => {
  console.log(store) // посмотрим, что же у нас в store?
  return {
    alert: store.alert
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addAlert: () => {
      dispatch(setAlert(10));
    }
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
