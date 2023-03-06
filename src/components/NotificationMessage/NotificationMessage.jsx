import css from './NotificationMessage.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message = '' }) => (
    <p className={css.message} >{message}</p>
);

Notification.propTypes = {
message: PropTypes.string.isRequired,
};