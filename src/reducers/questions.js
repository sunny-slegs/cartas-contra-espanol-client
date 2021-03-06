import {
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  SUBMIT_ANSWER_SUCCESS,
  SUBMIT_ANSWER_ERROR,
  RESET_GAME_SUCCESS,
  RESET_GAME_ERROR
} from '../actions/questions';

const initialState = {
  question: null,
  answer: null,
  feedback: null,
  numCorrect: 0,
  numAttempts: 0,
  steak: 0,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_QUESTION_SUCCESS) {
    return Object.assign({}, state, {
      question: action.data.question,
      answer: null,
      feedback: null,
      numCorrect: action.data.numCorrect,
      numAttempts: action.data.numAttempts,
      streak: action.data.streak,
      error: null
    });
  }

  if (action.type === FETCH_QUESTION_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }

  if (action.type === SUBMIT_ANSWER_SUCCESS) {
    return Object.assign({}, state, {
      question: null,
      answer: action.data.answer,
      feedback: action.data.feedback,
      numCorrect: action.data.numCorrect,
      numAttempts: action.data.numAttempts,
      streak: action.data.streak,
      error: null
    });
  }

  if (action.type === SUBMIT_ANSWER_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }

  if (action.type === RESET_GAME_SUCCESS) {
    return Object.assign({}, state, {
      question: action.data.question,
      answer: null,
      feedback: null,
      numCorrect: action.data.numCorrect,
      numAttempts: action.data.numAttempts,
      streak: action.data.streak,
      error: null
    });
  }

  if (action.type === RESET_GAME_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }

  return state;
}
