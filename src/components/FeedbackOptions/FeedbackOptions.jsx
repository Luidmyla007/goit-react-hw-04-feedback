import css from "./FeedbackOptions.module.css";
import PropTypes from 'prop-types';



export function FeedbackOptions  ({options, onLeaveFeedback })  {
    return (
        <div className={css.feedback}>
           {options.map(option => (
      <button type="button" key={option} className={css.myButton} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
        </div>
    );
};


FeedbackOptions.propTypes = {
   options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};