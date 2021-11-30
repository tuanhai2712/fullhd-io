import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import QRCode from 'qrcode.react';

interface IProps {
  currency: string,
  minDeposit: number
}

const WalletDeposit = (props: IProps) => {
  const addressERC = useRef<HTMLInputElement>(null);

  const { userInfo } = useSelector((state: globalState) => state.user);

  const copyTextToClipboard = () => {
    addressERC.current?.select();
    document.execCommand("copy");
  }

  return (
    <div className="content">
      <p>This is wallet's deposit address, which accepts only {props.currency.toUpperCase()}.ERC20. <br />
      Please do not deposit other cryptocurrency
      </p>
      <InputGroup className="mb-3">
        <FormControl
          ref={addressERC}
          readOnly
          placeholder="Wallet link"
          aria-label="Wallet link"
          aria-describedby="basic-addon2"
          value={userInfo.eth_address || ""}
        />
        <Button onClick={copyTextToClipboard}>Copy</Button>
      </InputGroup>
      <div className="qrinfo">
        {userInfo.eth_address ?
          <>
            <div className="mb-2">
              <QRCode
                id='qrcode'
                value={userInfo.eth_address}
                level={'H'}
                includeMargin={true}
              />
            </div>
            <p className="qrtext">Deposit QR code</p>
          </> : null}
        <p className="qrnote">
          Note: the minimum deposit amount is {props.minDeposit} {props.currency.toUpperCase()}, less than this
          amount will not be credited to your balance wallet.
              </p>
      </div>
    </div>
  );
};

export default React.memo(WalletDeposit);
