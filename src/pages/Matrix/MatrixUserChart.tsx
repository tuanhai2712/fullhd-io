import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '@constants/index';
import Tooltips from '@components/Tooltips';
import { MatrixChart, UserChildStyled } from './style';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { User } from '@styled-icons/fa-solid/User';

export default function MatrixUserChart() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    dropdownText: '$0 package'
  });
  // window.scrollTo(0, chartScroll.current.offsetTop);
  const matrix = useSelector((state: globalState) => state.matrix);
  useEffect(() => {
    if (matrix.packagesList && matrix.packagesList.allPackages.length) {
      if (matrix.packagesList.allPackages.filter(x => x.isBought).length > 0) {
        setState(state => ({
          ...state,
          dropdownText: '10$ package'
        }));
        dispatch({
          type: ActionTypes.GET_MATRIX_DRAW,
          conditions: {
            packageId:
              matrix.packagesList.allPackages.length > 0
                ? matrix.packagesList.allPackages[0]._id
                : ''
          }
        });
        dispatch({
          type: ActionTypes.GET_MATRIX_LIST,
          conditions: {
            searchText: '',
            currentPage: 1,
            pageSize: 10,
            packageid: matrix.packagesList.allPackages[0]._id
          }
        });
      }
    }
  }, [matrix.packagesList]);

  const findInFloor = (floor, pos) => {
    if (matrix.matrixChart.matrixDraw) {
      const floorData = matrix.matrixChart.matrixDraw.filter(
        x => x.floor === floor && x.pos === pos
      );
      const humanData = floorData.length > 0 ? floorData[0] : null;
      if (humanData !== null) {
        return (
          <UserChildStyled>
            <Tooltips name="name of red" message={humanData.username}>
              {humanData.isSponsor === true ? (
                <User className="sponsor-active" />
              ) : (
                <User className="sponsor-unactive" />
              )}
            </Tooltips>
          </UserChildStyled>
        );
      }
      return (
        <UserChildStyled>
          <User className="sponsor-default" />
        </UserChildStyled>
      );
    }
  };

  const PackagesChange = (packageId, packageAmount) => {
    setState(state => ({
      ...state,
      dropdownText: packageAmount + '$ package'
    }));

    dispatch({
      type: ActionTypes.SET_CURRENT_PACKAGE,
      conditions: {
        currentPackage: packageId
      }
    });

    dispatch({
      type: ActionTypes.GET_MATRIX_DRAW,
      conditions: {
        packageId
      }
    });

    dispatch({
      type: ActionTypes.GET_MATRIX_LIST,
      conditions: {
        searchText: '',
        currentPage: 1,
        pageSize: 10,
        packageid: packageId
      }
    });
  };

  const packData = matrix.packagesList
    ? matrix.packagesList.allPackages.filter(x => x.isBought)
    : [];

  return (
    <MatrixChart>
      <h4>Tree of your friends</h4>
      <DropdownButton title={state.dropdownText}>
        {packData.length > 0 ? (
          packData.map(x => {
            if (x.isBought)
              return (
                <Dropdown.Item
                  key={x.amount}
                  onClick={() => PackagesChange(x._id, x.amount)}
                >
                  Package ${x.amount}
                </Dropdown.Item>
              );
          })
        ) : (
          <Dropdown.Item as="button">You not buy anything yet</Dropdown.Item>
        )}
      </DropdownButton>
      <div className="user-tree-chart-container">
        <p className="table-text-instruction">
          Scroll right to see more <span>&gt;&gt;</span>
        </p>
        <div className="table-wrapper">
          <table className="tg">
            <thead>
              <tr>
                <th className="tg-p6hs tgbnone textAlignL" colSpan={3}>
                  27
                </th>
                <th className="tg-p6hs tgthr-bzlr">{findInFloor(3, 0)} </th>
                <th className="tg-p6hs tgthr-bzlr ">{findInFloor(3, 1)} </th>
                <th className="tg-p6hs tgthr-bzlr">{findInFloor(3, 2)} </th>
                <th className="tgbnone" />
                <th className="tg-p6hs tgthr-bzlr">{findInFloor(3, 3)} </th>
                <th className="tg-p6hs tgthr-bzlr ">{findInFloor(3, 4)} </th>
                <th className="tg-p6hs tgthr-bzlr">{findInFloor(3, 5)} </th>
                <th className="tgbnone" />
                <th className="tg-p6hs tgthr-bzlr">{findInFloor(3, 6)} </th>
                <th className="tg-p6hs tgthr-bzlr ">{findInFloor(3, 7)} </th>
                <th className="tg-p6hs tgthr-bzlr">{findInFloor(3, 8)} </th>
                <th className="tgbnone" />
                <th className="tg-p6hs tgthr-bzlr">{findInFloor(3, 9)} </th>
                <th className="tg-p6hs tgthr-bzlr ">{findInFloor(3, 10)} </th>
                <th className="tg-p6hs tgthr-bzlr">{findInFloor(3, 11)} </th>
                <th className="tgbnone" />
                <th className="tg-p6hs tgthr-bzlr">{findInFloor(3, 12)} </th>
                <th className="tg-p6hs tgthr-bzlr ">{findInFloor(3, 13)} </th>
                <th className="tg-p6hs tgthr-bzlr">{findInFloor(3, 14)} </th>
                <th className="tgbnone" />
                <th className="tg-p6hs tgthr-bzlr">{findInFloor(3, 15)} </th>
                <th className="tg-p6hs tgthr-bzlr ">{findInFloor(3, 16)}</th>
                <th className="tg-p6hs tgthr-bzlr">{findInFloor(3, 17)} </th>
                <th className="tgbnone" />
                <th className="tg-p6hs tgthr-bzlr">{findInFloor(3, 18)}</th>
                <th className="tg-p6hs tgthr-bzlr ">{findInFloor(3, 19)} </th>
                <th className="tg-p6hs tgthr-bzlr">{findInFloor(3, 20)} </th>
                <th className="tgbnone" />
                <th className="tg-p6hs tgthr-bzlr">{findInFloor(3, 21)} </th>
                <th className="tg-p6hs tgthr-bzlr ">{findInFloor(3, 22)} </th>
                <th className="tg-p6hs tgthr-bzlr">{findInFloor(3, 23)} </th>
                <th className="tgbnone" />
                <th className="tg-p6hs tgthr-bzlr">{findInFloor(3, 24)} </th>
                <th className="tg-p6hs tgthr-bzlr ">{findInFloor(3, 25)} </th>
                <th className="tg-p6hs tgthr-bzlr"> {findInFloor(3, 26)} </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-7eit tgthr-bzlr textAlignL" colSpan={4}>
                  9
                </td>
                <td className="tg-p6hs tgthr-bzlr">{findInFloor(2, 0)} </td>
                <td className="tg-p6hs tgthr-bzlr" colSpan={3} />
                <td className="tg-p6hs tgthr-bzlr ">{findInFloor(2, 1)} </td>
                <td className="tg-p6hs tgthr-bzlr" colSpan={3} />
                <td className="tg-p6hs tgthr-bzlr">{findInFloor(2, 2)}</td>
                <td className="tgbnone" colSpan={3} />
                <td className="tg-p6hs tgthr-bzlr">{findInFloor(2, 3)} </td>
                <td className="tg-p6hs tgthr-bzlr" colSpan={3} />
                <td className="tg-p6hs tgthr-bzlr ">{findInFloor(2, 4)} </td>
                <td className="tg-p6hs tgthr-bzlr" colSpan={3} />
                <td className="tg-p6hs tgthr-bzlr">{findInFloor(2, 5)} </td>

                <td className="tgbnone" colSpan={3} />
                <td className="tg-p6hs tgthr-bzlr">{findInFloor(2, 6)} </td>
                <td className="tg-p6hs tgthr-bzlr" colSpan={3} />
                <td className="tg-p6hs tgthr-bzlr ">{findInFloor(2, 7)} </td>
                <td className="tg-p6hs tgthr-bzlr" colSpan={3} />
                <td className="tg-p6hs tgthr-bzlr">{findInFloor(2, 8)} </td>
                <td className="tgbnone" />
              </tr>
              <tr>
                <td className="tg-7eit textAlignL" colSpan={8}>
                  3
                </td>
                <td className="tg-p6hs tgthr-bzlr"> {findInFloor(1, 0)}</td>
                <td className="tg-p6hs tgthr-bzlr" colSpan={11} />
                <td className="tg-p6hs tgthr-bzlr"> {findInFloor(1, 1)} </td>
                <td className="tg-p6hs tgthr-bzlr" colSpan={11} />
                <td className="tg-p6hs tgthr-bzlr"> {findInFloor(1, 2)} </td>
                <td className="tgbnone" colSpan={5} />
              </tr>
              <tr>
                <td className="tg-7eit" colSpan={20} />
                <td
                  className="tgbnone"
                  style={{ borderBottom: 'none !important' }}
                >
                  <UserChildStyled>
                    <Tooltips name="name of red" message={'You'}>
                      <User className="main-user" />
                    </Tooltips>
                  </UserChildStyled>
                </td>
                <td className="tg-7eit" colSpan={17} />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </MatrixChart>
  );
}
