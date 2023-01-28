import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <>{message}</>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
