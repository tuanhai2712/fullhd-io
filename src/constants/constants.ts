import { keyMirror } from '@utils/utils';

export const Constants = keyMirror({});

export const FetchingStatus = {
  start: 0,
  end: 1
};

export const MatrixPackages = [10, 50, 100, 200, 500, 1000, 2000, 5000];
export const FSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const UpPackageSelect = {
  use_excess_money: 0,
  use_your_balance_and_account_money: 2,
  use_account_money: 1
};

export const MaxAmountPlace = 9999;

export const PlaceType = {
  Add: 1,
  Subtract: 2,
  Multiply: 3,
  Devide: 4
};

export default {};
