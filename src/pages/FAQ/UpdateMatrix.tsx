import React from 'react';

const UpdateMatrix: React.FC = () => {
  return (
    <>
      <h5>10. How could I update to Matrix Package? </h5>
      <br />
      <h5>
        Step 1: You can access directly via the following link: <a href="https://fullhd.io/matrix">https://fullhd.io/matrix</a>
      </h5>
      <h5>
        Step 2: The matrix page interface will appear including 2 tags: Package and User List. We will go through 2 tags in turn to understand the items inside:
      </h5>
      <div style={{ marginLeft: 10 }}>
        <h5>
          No.1: Package Tag
        </h5>
        <br />
        <img style={{
          objectFit: "contain",
          width: '100%'
        }} src="/faq/10.png" alt="first" />
        <br />
        <h5>Providing information about commissions and matrix purchases for you </h5>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <img style={{
            objectFit: "contain",
            width: '60%'
          }} src="/faq/10.1.png" alt="first" />
        </div>
        <br />
        <div style={{ marginLeft: 10 }}>
          <h5>
            - Balance (2% of Withdrawal): When you withdraw money, the exchange will deduct 2% to put into this Table. This money cannot be withdrawn to your main account, but only used to buy the Matrix package
          </h5>
          <h5>
            - Commission Balance: When each member of your downlines activates the Matrix package, this table will update the total of commision you will get. This money can be withdrawn to your main account by clicking the “WITHDRAWAL" button right below.
          </h5>
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <img style={{
              objectFit: "contain",
              width: '60%'
            }} src="/faq/10.2.png" alt="first" />
          </div>
        </div>
        <br />
        <h5>The list of Matrix packages. You must buy each package from low to high by clicking the “UPGRADE" button. Then, confirm which payment channel you use to buy in the “CONFIRM” window.</h5>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <img style={{
            objectFit: "contain",
            width: '60%'
          }} src="/faq/10.3.png" alt="first" />
        </div>
        <br />
        <h5>There are 3 payment channels available for you, including: </h5>
        <div style={{ marginLeft: 10 }}>
          <h5>
            - Account Money: Money from your main account
          </h5>
          <h5>
            - Your Balance (2% of Withdrawal): Money from the 2% withdrawal fee is deducted by FullHD for you
          </h5>
          <h5>
            - Both: The system will give priority to using the main account by default. If the main account is not enough, the system will subtract the remaining amount into 2% of the withdrawal fee deducted by FullHD for you.
          </h5>
        </div>
        <h5>Clicking the “UPGRADE" button to complete the transaction.</h5>
        <h5>The package will turn purple color with V to indicate your purchase as shown below:</h5>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <img style={{
            objectFit: "contain",
            width: '60%'
          }} src="/faq/10.4.png" alt="first" />
        </div>
        <br />
        <h5>
          No.2: User List Tag
        </h5>
        <img style={{
          objectFit: "contain",
          width: '100%'
        }} src="/faq/10.5.png" alt="first" />
        <h5>
          There are list members of your downlines following package. You can look up members by their name and check their 3 downlines in your Matrix system.
        </h5>
      </div>
    </>
  );
};

export default UpdateMatrix;
