import React from 'react';

const CheckMyIBCommission: React.FC = () => {
  return (
    <>
      <h5>H. How could I check my IB commission?</h5>
      <br />
      <h5>
        Step 1: You can access directly via the following link: <a href="https://fullhd.io/commission">https://fullhd.io/commission</a>
      </h5>
      <h5>Step 2: Check your IB commission according to the respective information:</h5>
      <div style={{ marginLeft: 10 }}>
        <h5>
          No.1: Information about your level (corresponding to the F1 number you have) and a SYMBOL confirming that you have activated the IB package
        </h5>
        <h5>
          No.2: Total Commission Has Withdrawn - The total amount of commissions you have withdrawn to your Account.
      </h5>
        <h5>
          No.3: Volume this week - Your total trading amount for that week
      </h5>
        <h5>
          No.4: Volume Commission - The amount of commissions you get from trading your members
      </h5>
        <h5>
          No.5: IB Commission - The amount of commission you get from your member activating IB
      </h5>
        <h5>
          No.6: Commission Detail - details each commission amount you receive from each downline user right at the time of page load
      </h5>
        <h5>
          No.7: Volume Commission - The commission amount you get from your members aggregated by week (trading commissions)
      </h5>
        <h5>
          No.8: IB Commission - Details of the commissions you get from your member activating IB
      </h5>
        <h5>
          No.9: A list of your downline members is available
      </h5>
      </div>
      <br />
      <img style={{
        objectFit: "contain",
        width: '100%'
      }} src="/faq/8.png" alt="first" />
      <br />
    </>
  );
};

export default CheckMyIBCommission;
