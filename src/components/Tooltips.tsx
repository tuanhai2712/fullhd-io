import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

type TooltipsProps = {
  name: string;
  message: string;
  children: any;
  placement?: any;
};

export default function Tooltips({
  name = 'commision',
  placement = 'top',
  message,
  children,
}: TooltipsProps) {
  return (
    <OverlayTrigger
      placement={placement ? placement : 'top'}
      overlay={<Tooltip id={`tooltip-top-${name}`}>{message}</Tooltip>}
    >
      {children}
    </OverlayTrigger>
  );
}
