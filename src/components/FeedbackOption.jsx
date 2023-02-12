import css from './feedback.module.scss';
import PropTypes from 'prop-types';

const FeedbackOption = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(name => (
        <button
          key={name}
          type="button"
          className={css.button}
          name={name}
          onClick={onLeaveFeedback}
        >
          {name}
        </button>
      ))}
    </>
  );
};
export default FeedbackOption;

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
