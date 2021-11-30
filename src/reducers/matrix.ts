import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import { ActionTypes, FetchingStatus } from '@constants/index';

export const matrixStateDefault: matrixState = {
  matrixList: {
    data: [],
    totalItems: null,
    page: 1,
    actionStatus: FetchingStatus.start
  },
  upgradePackage: {
    message: '',
    success: null,
    actionStatus: FetchingStatus.start
  },
  withdrawal: {
    message: '',
    success: null,
    actionStatus: FetchingStatus.start
  },
  matrixInformation: {
    balance: null,
    commission_balance: null,
    actionStatus: FetchingStatus.start
  },
  packagesList: {
    allPackages: [],
    actionStatus: FetchingStatus.start
  },
  matrixChart: {
    matrixDraw: [],
    actionStatus: FetchingStatus.start
  },
  selectPackage: {
    currentPackage: '',
    actionStatus: FetchingStatus.start
  }
};
export default {
  matrix: handleActions(
    {
      [ActionTypes.SET_CURRENT_PACKAGE_SUCCESS]: (state, action) => {
        return update(state, {
          selectPackage: {
            $set: {
              ...action.payload,
              actionStatus: FetchingStatus.end
            }
          }
        });
      },
      [ActionTypes.GET_MATRIX_LIST_SUCCESS]: (state, action) => {
        return update(state, {
          matrixList: {
            $set: {
              ...action.payload,
              actionStatus: FetchingStatus.end
            }
          }
        });
      },
      [ActionTypes.GET_MATRIX_DRAW_SUCCESS]: (state, action) => {
        return update(state, {
          matrixChart: {
            $set: {
              ...action.payload,
              actionStatus: FetchingStatus.end
            }
          }
        });
      },
      [ActionTypes.GET_MATRIX_INFORMATION_OF_USER_SUCCESS]: (state, action) => {
        return update(state, {
          matrixInformation: {
            $set: {
              ...action.payload,
              actionStatus: FetchingStatus.end
            }
          }
        });
      },
      [ActionTypes.GET_MATRIX_INFORMATION_OF_USER_SUCCESS]: (state, action) => {
        return update(state, {
          matrixInformation: {
            $set: {
              ...action.payload,
              actionStatus: FetchingStatus.end
            }
          }
        });
      },
      [ActionTypes.UPGRADE_PACKAGE_SUCCESS]: (state, action) => {
        return update(state, {
          upgradePackage: {
            $set: {
              ...action.payload,
              actionStatus: FetchingStatus.end
            }
          }
        });
      },
      [ActionTypes.GET_ALL_PACKAGE_SUCCESS]: (state, action) => {
        return update(state, {
          packagesList: {
            $set: {
              ...action.payload,
              actionStatus: FetchingStatus.end
            }
          }
        });
      },
      [ActionTypes.WITHDRAWAL_MATRIX_SUCCESS]: (state, action) => {
        return update(state, {
          matrixInformation: {
            $set: {
              commission_balance: 0
            }
          }
        });
      },
      [ActionTypes.GET_MATRIX_LIST_FAILURE]: (state, action) => {
        return update(state, {
          matrixList: { $set: {} }
        });
      },
      [ActionTypes.GET_MATRIX_DRAW_FAILURE]: (state, action) => {
        return update(state, {
          matrixChart: {
            $set: {
              drawData: []
            }
          }
        });
      },
      [ActionTypes.GET_MATRIX_INFORMATION_OF_USER_FAILURE]: (state, action) => {
        return update(state, {
          matrixInformation: { $set: {} }
        });
      },
      [ActionTypes.UPGRADE_PACKAGE_FAILURE]: (state, action) => {
        return update(state, {
          upgradePackage: {
            $set: { ...action.payload, actionStatus: FetchingStatus.end }
          }
        });
      }
    },
    matrixStateDefault
  )
};
