import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { ActionTypes } from '@constants/index';

export const walletStateDefault: walletState = {
    walletData: [],
    walletDetail: [],
    withdrawData: {},
    transferData: {}
};

export default {
    wallet: handleActions(
        {
            [ActionTypes.WALLET_GET_SUCCESS]: (state, action) => {
                const { walletData } = action.payload;
                return immutable(state, {
                    walletData: { $set: walletData }
                });
            },
            [ActionTypes.WALLET_DETAIL_GET_SUCCESS]: (state, action) => {
                const { walletDetail } = action.payload;
                return immutable(state, {
                    walletDetail: { $set: walletDetail }
                });
            },
            [ActionTypes.WITHDRAW_MONEY_SUCCESS]: (state, action) => {
                const { withdrawData } = action.payload;
                return immutable(state, {
                    withdrawData: { $set: withdrawData }
                });
            },
            [ActionTypes.TRANSFER_MONEY_GET_SUCCESS]: (state, action) => {
                const { transferData } = action.payload;
                return immutable(state, {
                    transferData: { $set: transferData }
                });
            }
        },
        walletStateDefault
    )
};