import React, { useReducer, useEffect } from 'react';
import { validate } from '../../utils/validators'
import styled, { css } from 'styled-components';
import {error} from '../../styles/Colors';

const CHANGE = 'CHANGE';
const TOUCHE = 'TOUCHE';

const FromControl = styled.div`
  margin: 1rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  position: relative;
  border-radius: 15px;
  font-size: 16px;
  color: #7d7d7d;
  &:focus {
    background-color: #ffffff;
    outline-width: 0;
  }
  ${({ showError }) =>
    showError
      ? css`
          border-color: ${error};
        `
      : null}
  ${({ showError2 }) =>
    showError2
      ? css`
          border-color: ${error};
        `
      : null}
`;

const StyledIpunt = styled.input`
  padding: 8px 0px;
  width: 80%;
  border: none;
  outline: slategray 1px solid;
  border-radius: 5px;
  &:focus {
    outline: 2px solid black;
    border-color: black;
  }
  ${({ showError }) =>
    showError
      ? css`
          outline: ${error} 1px solid;
        `
      : null}
  ${({ showError2 }) =>
    showError2
      ? css`
          outline: ${error} 1px solid;
        `
      : null}
`;

const StyledLabel = styled.div`
  font-weight: bold;
  padding: 4px 0;
  margin-bottom: 0.5rem;
  margin-left: 40px;
  ${({ showError }) => (showError ? `color: ${error}};` : null)}
  ${({ showError2 }) => (showError2 ? `color: ${error}};` : null)}
`;

const inputReducer = (state, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case TOUCHE:
      return {
        ...state,
        isTouche: true,
      };

    default:
      return state;
  }
};

const ErrorText = styled.p`
  color: red;
  padding: 4px 0;
  margin: 0 16px;
`;


export const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouche: false,
    isValid: props.initialValid || false,
  });

  const { isValid, value } = inputState;
  const { onInput, id } = props;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [onInput, id, value, isValid]);

  const changeHandler = (event) => {
    dispatch({
      type: CHANGE,
      val: event.target.value,
      validators: props.validators,
    });
  };

  const toucheHandler = () => {
    dispatch({
      type: TOUCHE,
    });
  };

  return (
    <FromControl>
    <StyledLabel
      htmlFor={props.id}
      showError={!inputState.isValid && inputState.isTouche} 
    >
      {props.label}
    </StyledLabel>
    <InputContainer showError={!inputState.isValid && inputState.isTouche}>
      <StyledIpunt
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={toucheHandler}
        value={inputState.value}
        showError={!inputState.isValid && inputState.isTouche}
      />
    </InputContainer>

    {!inputState.isValid && inputState.isTouche && (
      <ErrorText>{props.errorText}</ErrorText>
    )}
  </FromControl>
  )

}
