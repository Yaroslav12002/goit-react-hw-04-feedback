import PropTypes from 'prop-types';
import { TextNotification } from './Notification.styled';

const Notification = ({ message }) => {
  return <TextNotification>{message}</TextNotification>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
