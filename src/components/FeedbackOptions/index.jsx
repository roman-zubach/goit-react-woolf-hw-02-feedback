import './assets/index.css';

const FeedbackOptions = ({ onClick }) => {
  return (
    <div className='feedback-options-group'>
      <button onClick={onClick} id="good">Good</button>
      <button onClick={onClick} id="neutral">Neutral</button>
      <button onClick={onClick} id="bad">Bad</button>
    </div>
  );
};

export default FeedbackOptions;
