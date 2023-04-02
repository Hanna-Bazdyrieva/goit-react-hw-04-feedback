import PropTypes from 'prop-types';
import NotifyHeader from './NotifyNoFeedback.styled';

const NotifyNoFeedback =({message= ''})=> <NotifyHeader>{message}</NotifyHeader>;

NotifyNoFeedback.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotifyNoFeedback;
