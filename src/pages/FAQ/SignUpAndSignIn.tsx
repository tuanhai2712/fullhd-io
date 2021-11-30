import React from 'react';
import YouTube from 'react-youtube';
const SignUpAndSignIn: React.FC = () => {
  return (
    <>
      <h5>A. How could I sign up and Log in</h5>
      <br />
      <h5>
        We have a video tutorial on how to sign up and log in below.
      </h5>
      <YouTube videoId="qCBepyJXlB8" /> {/* Thay id video */}
    </>
  );
};

export default SignUpAndSignIn;
