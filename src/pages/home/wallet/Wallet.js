import { Affix, Button, Card, Col, Row, Typography } from "antd";
import { Fragment } from "react";
import { PlusOutlined } from "@ant-design/icons";

import WalletBackground from "../../../assets/background/wallet.svg";
import ListWallet from "../../../components/home/Wallet/ListWallet";
import { Link } from "react-router-dom";

const { Text, Title } = Typography;

const WalletHeader = () =>
  <Card
    style={{ backgroundImage: `url(${WalletBackground})`, height: "240px" }}
  >
    <Row style={{ paddingTop: "50px" }} align="bottom" justify="space-around">
      <Col span={24}>
        <Row justify="center">
          <Col>
            <Title level={5}>Total Balance</Title>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify="center">
          <Col>
            <Title level={1} strong>
              Rp 4,150,000
            </Title>
          </Col>
        </Row>
      </Col>
    </Row>
  </Card>;

const WalletFloatButton = () =>
  <Affix style={{ position: "absolute", bottom: "80px", right: "16px" }}>
    <Link to="/add-new-wallet">
      <Button
        type="primary"
        shape="round"
        icon={<PlusOutlined />}
        size="middle"
      >
        Add Wallet
      </Button>
    </Link>
  </Affix>;

// ? todo
// Wallet pages
// _ O WalletHeader
// _ List Wallet
// __ text "your wallet"
// __ Card Wallet
// _ WalletFloatButton
export default function Wallet() {
  return (
    <Fragment>
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <WalletHeader />
        </Col>
        <Col span={24}>
          <ListWallet />
        </Col>
      </Row>
      <WalletFloatButton />
    </Fragment>
  );
}
