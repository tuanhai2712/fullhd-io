import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';

const FetchingStyled = styled.div`
  .fetching {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: gray;
    align-items: center;
    justify-content: center;
    display: flex;
    z-index: 1;
    opacity: 0.55;
  }
`;
type FetchingProps = {
  actionType: string;
};

export default function Fetching({ actionType }: FetchingProps) {
  const fetching = useSelector((state: globalState) => state.fetching);
  const renderFetching = () => {
    const { type, status } = fetching;
    if (type === actionType && status) {
      return (
        <div className="fetching">
          <Spinner animation="border" variant="primary" />
        </div>
      );
    }
  };

  return <FetchingStyled>{renderFetching()}</FetchingStyled>;
}
