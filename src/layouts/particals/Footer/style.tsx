import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const FooterStyled = styled.div`
  background-color: #05081c;
  color: #4b4e63;
  padding-top: 83px;
  padding-bottom: 30px;

  .info {
    margin-bottom: 20px;

    h3 {
      color: #ffffff;
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 60px;
      text-transform: uppercase;
    }

    .link {
      margin-bottom: 19px;

      a {
        color: #4b4e63;

        &:hover {
          color: #c5a30a;
          text-decoration: none;
        }
      }
    }

    p {
      white-space: pre-wrap;
      margin-bottom: 19px;
    }
  }

  .copyright {
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
  }
`;
