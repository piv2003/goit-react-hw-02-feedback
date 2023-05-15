import PropTypes from 'prop-types';
import { ButtonList, Button } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => {
        return (
          <li key={option}>
            <Button type="button" onClick={onLeaveFeedback}>
              {option}
            </Button>
          </li>
        );
      })}
    </ButtonList>
  );
};
