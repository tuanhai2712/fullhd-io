import React, { useState } from 'react';
import styled from 'styled-components';
// react-bootstrap
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import { MatrixPageStyled, MatrixTabStyled } from './style';

// core component
import MatrixPackageTab from './MatrixPackageTab';
import MatrixUserListTab from './MatrixUserListTab';

const Container = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  padding: 0px 20px;

  .filter-container {
    display: flex;
    flex-direction: row;
  }

  .check-box {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }
  .check-box > input {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  .pagination {
    display: flex;
    justify-content: flex-end;
  }
`;

const MatrixPage: React.FC = () => {
  const [key, setKey] = useState('matrixPackage');

  const onSelectTab = (k) => {
    setKey(k);
  };

  return (
    <React.Fragment>
      {/* START: Page body */}
      <Container>
        <MatrixPageStyled>
          <Row>
            <Col>
              <div className="title">
                <h4>Matrix</h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12} xl={12}>
              <MatrixTabStyled>
                <Tab.Container
                  defaultActiveKey="matrixPackage"
                  onSelect={onSelectTab}
                >
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="matrixPackage"
                        className={key === 'matrixPackage' ? 'tab-active' : ''}
                      >
                        <span>Package</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="matrixUserList"
                        className={key === 'matrixUserList' ? 'tab-active' : ''}
                      >
                        <span>User list</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="matrixPackage">
                      <MatrixPackageTab />
                    </Tab.Pane>
                    <Tab.Pane eventKey="matrixUserList">
                      <MatrixUserListTab />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </MatrixTabStyled>
            </Col>
          </Row>
        </MatrixPageStyled>
      </Container>
      {/* END: Page body */}
    </React.Fragment>
  );
};

export default MatrixPage;
