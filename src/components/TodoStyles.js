import styled from 'styled-components';

const TodoStyles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    font-size: 3rem;
    margin-right: 2.5%;
    margin-bottom: 40px;
  }
  ul {
    position: relative;
    left: 15%;
    li {
      font-size: 1.6rem;
      max-width: 40vw;
    }
  }
`;

export { TodoStyles as default };
