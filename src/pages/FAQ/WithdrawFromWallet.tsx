import React from 'react';

const WithdrawFromWallet: React.FC = () => {
  return (
    <>
      <h5>F. How can I withdraw funds from my eWallet?</h5>
      <br />
      <h5>
        Step 1: You can access directly via the following link: <a href="https://fullhd.io/wallet">https://fullhd.io/wallet</a>
      </h5>
      <h5>
        Step 2: Click “WITHDRAW" button in the Wallet interface (Available for USDT or ETH)
      </h5>
      <br />
      <img style={{
        objectFit: "contain",
        width: '100%'
      }} src="/faq/6.1.png" alt="first" />
      <br />
      <h5>Step 3: Follow the prompts in a “CONFIRM” Window and fill out your information including: Amounts of money; Your Wallet’s address; your account password. </h5>
      <br />
      <img style={{
        objectFit: "contain",
        width: '100%'
      }} src="/faq/6.2.png" alt="first" />
    </>
  );
};

export default WithdrawFromWallet;
