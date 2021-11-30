import React from 'react';

const Start2FA: React.FC = () => {
  return (
    <>
      <h5>M. How to start 2FA?</h5>
      <br />
      <img style={{
        objectFit: "contain",
        width: '100%'
      }} src="/faq/11.1.png" alt="first" />
      <h5>
        At Homepage, click to your account in on the top right hand, you will see a personal information table. The, click to “SECURITY" button as shown below:
      </h5>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <img style={{
          objectFit: "contain",
          width: '60%'
        }} src="/faq/11.2.png" alt="first" />
      </div>
      <br />
      <h5>
        Then, click the “ENABLE" button (1) to show 2FA code (2), you can use Google Authenticator to receive the code and enter the “VERIFY CODE" button (3). Note that you should take a screenshot and save the 2FA Code in case you want to scan on another machine.
      </h5>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <img style={{
          objectFit: "contain",
          width: '60%'
        }} src="/faq/11.3.png" alt="first" />
      </div>
      <h5>Click the “COFIRM" button. From the next login you must get the code from the device you used to scan the 2FA code and enter the username and password.</h5>
    </>
  );
};

export default Start2FA;
