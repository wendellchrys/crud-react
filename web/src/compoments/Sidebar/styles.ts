import styled from 'styled-components';

export const Sidebar = styled.div`
  background: rgb(5, 68, 104);
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  padding: 20px 0;
  transition: all 0.5s ease;

  > h3 {
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
  }

  > ul li a {
    width: 100%;
    display: inline-block;
    padding: 13px 30px;
    border-bottom: 1px solid #10558d;
    color: rgb(241, 237, 237);
    font-size: 16px;
    position: relative;
    text-decoration: none;

    > .svg {
      color: #dee4ec;
      width: 30px;
      display: inline-block;
    }

    :hover,
    .active {
      width: 100%;
      height: auto;
      color: #0c7db1;
      background: white;
      border-right: 2px solid rgb(5, 68, 104);

      > .icon {
        color: #0c7db1;
      }

      > :before {
        display: block;
      }
    }
  }
`;
