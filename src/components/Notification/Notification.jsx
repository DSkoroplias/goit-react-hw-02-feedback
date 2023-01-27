import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <>{message}</>;
};

export default Notification;

Notification.prototypes = {
  message: PropTypes.string.isRequired,
};
