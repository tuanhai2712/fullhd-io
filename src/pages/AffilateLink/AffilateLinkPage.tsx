import React, { useRef, useEffect, useState } from 'react';
import {
  AffilateLinkStyled,
  RightCardStyled,
  AffilateItemListStyled,
} from './style';
import {
  Button,
  InputGroup,
  FormControl,
  Overlay,
  Tooltip,
  Row,
  Col,
} from 'react-bootstrap';
import BuyIBModal from './BuyIBModal';
import { useSelector } from 'react-redux';

const AffilateItems = [
  {
    imageUrl: '/affilate/a1.png',
    text: 'Invite Friends',
    subText: 'Invite friends to register FullHD through the link',
  },
  {
    imageUrl: '/affilate/a2.png',
    text: 'Member F1',
    subText: 'Each subscriber from the link becomes F1 in your system',
  },
  {
    imageUrl: '/affilate/a3.png',
    text: 'Activate & Receive IB Commissions',
    subText:
      'When member F1 activates the $ 100 package, you will receive a commission depending on the depth of the 10 levels',
  },
  {
    imageUrl: '/affilate/a4.png',
    text: 'Receive IB Volume',
    subText:
      'The more F1 activated, you will  accumulate of more commission tiers - Up to 20 tiers',
  },
];

const AffilateLinkPage = () => {
  const { userInfo } = useSelector((state: globalState) => state.user);
  const addressERC = useRef<HTMLInputElement>(null);
  const target = useRef(null);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      if (copied) {
        setCopied(false);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [copied]);
  const copyTextToClipboard = () => {
    setCopied(!copied);
    addressERC.current?.select();
    document.execCommand('copy');
  };
  return (
    <AffilateLinkStyled>
      <h1>Affiliate Link</h1>
      <Row className="mb-5">
        <Col lg={6} className="mb-4 mb-lg-0">
          <div>
            <h5>You need to buy Agency license to receive </h5>
            <h5>
              <span style={{ fontWeight: 'bold' }}>Agency Commissions</span> and{' '}
              <span style={{ fontWeight: 'bold' }}>Trading Commissions</span>
            </h5>
            {!userInfo.is_ib ? (
              <BuyIBModal />
            ) : (
              <div className="info-level">
                <span className="level">IB</span>
              </div>
            )}
          </div>
        </Col>
        <Col lg={6} className="mb-4 mb-lg-0">
          <RightCardStyled>
            <div className="content">
              <p>{`Copy Affilate Link & send to your friends`}</p>
              <InputGroup className="mb-3">
                <FormControl
                  ref={addressERC}
                  value={`${process.env.REACT_APP_WEB_URL}/register?sponsor=${userInfo.username}`}
                  readOnly
                  aria-describedby="basic-addon2"
                />
                <Button ref={target} onClick={copyTextToClipboard}>
                  Copy
                </Button>
                <Overlay
                  target={target.current}
                  show={copied}
                  placement="right"
                >
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Copied
                    </Tooltip>
                  )}
                </Overlay>
              </InputGroup>
            </div>
          </RightCardStyled>
        </Col>
      </Row>
      <Row>
        <div className="row stock-exchange-card-container">
          {AffilateItems.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <AffilateItemListStyled>
                <div>
                  <img src={item.imageUrl} alt={item.text} />
                  <h5>{item.text}</h5>
                  <p>{item.subText}</p>
                </div>
              </AffilateItemListStyled>
            </div>
          ))}
        </div>
      </Row>
      <Row>
        <a href="/affiliate-program" className="affilate-guide">
          {' '}
          See more detailed FullHD Affiliate guide here!
        </a>
      </Row>
    </AffilateLinkStyled>
  );
};

export default AffilateLinkPage;
