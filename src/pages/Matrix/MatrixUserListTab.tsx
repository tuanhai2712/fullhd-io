import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ActionTypes, FetchingStatus } from '@constants/index';

import MatrixUserChart from './MatrixUserChart';

import { MatrixUserListStyled } from './style';
import {
  InputGroup,
  FormControl,
  Spinner,
  Table,
  Row,
  Col
} from 'react-bootstrap';
import Pagination from '@components/Pagination';

// icon
import { Search } from '@styled-icons/ionicons-solid/Search';
import SearchText from '@components/SearchText';

const TableContainerStyled = styled.div`
  background-color: #21284f;
  border-radius: 8px;
  padding: 50px 55px 20px;

  .username-col {
    width: 50%;
  }

  @media (max-width: 767px) {
    padding: 20px 10px;

    .table-wrapper {
      overflow-x: auto;
    }

    table {
      min-width: 550px;
    }

    .username-col {
      width: 30%;
    }
  }

  table.table-dark {
    background-color: transparent;
  }

  thead {
    color: #cad1ff;

    th {
      font-weight: normal;
    }

    tr {
      border-bottom: 2px solid #2a325e;
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #2a325e;
    }
  }

  table {
    border: none;
  }

  th,
  td {
    padding-left: 0;
    padding-right: 0;
  }
`;

export default function MatrixUserListTab() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    searchText: '',
    currentPage: 1,
    pageSize: 10,
    selectedPackage: 0,
    selectedF: 0
  });
  const matrix = useSelector((state: globalState) => state.matrix);

  useEffect(() => {
    changePage(1);
  }, [matrix.selectPackage.currentPackage]);

  const changePage = page => {
    setState(state => ({ ...state, currentPage: page }));
    dispatch({
      type: ActionTypes.GET_MATRIX_LIST,
      conditions: {
        currentPage: page,
        searchText: state.searchText,
        pageSize: state.pageSize,
        selectedPackage: state.selectedPackage,
        selectedF: state.selectedF,
        packageid: matrix.selectPackage.currentPackage
          ? matrix.selectPackage.currentPackage
          : matrix.packagesList.allPackages.length
          ? matrix.packagesList.allPackages[0]._id
          : null
      }
    });
  };
  const search = () => {
    changePage(1);
  };

  const handleKeyPress = event => {
    if (event.charCode === 13) {
      search();
    }
  };

  const handleChange = event => {
    event.preventDefault();
    const searchText = event.target.value;
    setState(state => ({ ...state, searchText }));
  };

  const renderPagination = () => {
    const { data, actionStatus, totalItems } = matrix.matrixList;
    if (!data.length && actionStatus === FetchingStatus.start) {
      return <Spinner animation="grow" />;
    }
    return (
      <div className="pagination">
        <Pagination
          pageSize={state.pageSize}
          handleChangePage={changePage}
          currentPage={state.currentPage}
          totalItems={totalItems}
        />
      </div>
    );
  };

  const { data } = matrix.matrixList;

  return (
    <MatrixUserListStyled>
      <div className="user-chart mb-5">
        <Row>
          <div className="col-lg-12 col-xl-12 col-md-12">
            <MatrixUserChart />
          </div>
        </Row>
      </div>

      {/* Search form */}
      <div className="col-lg-4 col-xl-4 col-md-4 pl-0">
        <SearchText
          filter={state.searchText}
          handleChange={e => handleChange(e)}
          handleKeyPress={e => handleKeyPress(e)}
        />
      </div>

      {/* Table result */}
      <TableContainerStyled>
        <p className="table-text-instruction">
          Scroll right to see more <span>&gt;&gt;</span>
        </p>
        <div className="table-wrapper">
          <Table bordered hover variant="dark">
            <thead>
              <tr>
                <th style={{ width: '10%' }}>No.</th>
                <th className="username-col">Username</th>
                <th>Current package</th>
                <th style={{ textAlign: 'right' }}>Total Commission</th>
              </tr>
            </thead>
            <tbody>
              {data.length ? (
                data.map((prop, key) => {
                  return (
                    <tr key={key}>
                      <td style={{ width: '10%' }}>
                        {(state.currentPage - 1) * 10 + key + 1}
                      </td>
                      <td className="username-col">{prop.from_user_name}</td>
                      <td>{`Package ${prop.from_user_current_packages} $`}</td>
                      <td style={{ textAlign: 'right' }}>$ {prop.volume}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <th colSpan={7}>No users found</th>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
        {renderPagination()}
      </TableContainerStyled>
    </MatrixUserListStyled>
  );
}
