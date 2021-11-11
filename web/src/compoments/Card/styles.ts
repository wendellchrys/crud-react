import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  height: 220px;
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 20px;
  padding: 25px;
  margin: 10px 0;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  .image {
    width: 100%;
    max-width: 150px;
    height: 100%;
    max-height: 150px;
    background-color: #e4e4e4;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      color: #d0cfcf;
    }
  }
  .content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;

    .groupTitle {
      width: 100%;
      display: grid;
      grid-template-columns: 4fr 1fr 1fr;
      gap: 10px;

      h1 {
        padding: 0;
        margin: 0;
        color: #0d71f0;
      }

      .edit,
      .delete {
        width: 100%;
        max-width: 150px;
        height: 35px;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      .edit {
        background: #0d71f0;
      }
      .delete {
        background: #f44336;
      }
    }

    div {
      display: flex;
      flex-direction: row;
      margin: 10px 0;
      align-items: center;

      > p {
        display: flex;
        align-items: center;
        padding-right: 10px;

        > svg {
          padding-right: 5px;
          margin-left: 20px;
          color: #0d71f0;

          :nth-child(1) {
            margin-left: 0;
          }
        }
      }
    }
  }
`;
