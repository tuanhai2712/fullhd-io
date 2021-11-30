import React from 'react';
import { TableStyled } from './style';

type TableRegularProps = {
  children: any;
};

export default function TableRegular({ children }: TableRegularProps) {
  return <TableStyled>{children}</TableStyled>;
}
