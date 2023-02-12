import PropTypes from 'prop-types';
const Notification = ({ message }) => {
  return <h4>{message}</h4>;
};
export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
