import React from 'react';

const TransferMoney: React.FC = () => {
  return (
    <>
      <h5>G. How could I transfer money to another user?</h5>
      <br />
      <h5>
        Step 1: You can access directly via the following link: <a href="https://fullhd.io/wallet">https://fullhd.io/wallet</a>
      </h5>
      <h5>
        Step 2: Click “TRANSFER" button
      </h5>
      <br />
      <img style={{
        objectFit: "contain",
        width: '100%'
      }} src="/faq/7.1.png" alt="first" />
      <br />
      <h5>
        Step 3: Follow the prompts in a “TRANSFER” Window and fill out your information including: Amount of transfer money; Recipient's name; your account password
      </h5>
      <br />
      <img style={{
        objectFit: "contain",
        width: '100%'
      }} src="/faq/7.2.png" alt="first" />
    </>
  );
};

export default TransferMoney;
