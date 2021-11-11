import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  height: auto;

  > h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  > .col {
    display: flex;
    justify-content: space-between;

    > .groupInput {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      padding-left: 15px;

      > input,
      select,
      textarea,
      .react-date-picker__wrapper {
        width: 100%;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 10px;
        background: #fff;
      }
      > input,
      select,
      textarea,
      .react-date-picker__wrapper {
        height: 40px;
      }
      > textarea {
        height: auto;
      }
      > .react-date-picker__wrapper button {
        padding-top: 0;
      }
      .errorSubmit {
        color: #f00;
        font-size: 12px;
        padding-top: 5px;
      }
    }
  }

  button.submitForm {
    width: 300px;
    height: 40px;
    background: #054468;
    color: #fff;
    border-radius: 5px;
    border: none;
    margin-left: 15px;
    cursor: pointer;

    :hover {
      opacity: 0.8;
      transition-duration: 0.3s;
    }
  }
`;
