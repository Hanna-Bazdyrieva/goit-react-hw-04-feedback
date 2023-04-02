import { Component } from 'react';
import PropTypes from 'prop-types';
import NotifyHeader from './NotifyNoFeedback.styled';

class NotifyNoFeedback extends Component {
  static defaultProps = {
    message: '',
  };
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    return <NotifyHeader>{this.props.message}</NotifyHeader>;
  }
}
export default NotifyNoFeedback;
