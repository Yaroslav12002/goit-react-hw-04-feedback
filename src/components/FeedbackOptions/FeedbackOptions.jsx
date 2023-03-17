import { ButtonsGroup, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsGroup>
      {options.map(item => {
        return (
          <Button
            key={item}
            type="button"
            onClick={() => {
              onLeaveFeedback(item);
            }}
          >
            {item}
          </Button>
        );
      })}
    </ButtonsGroup>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
