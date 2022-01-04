import { Col, Image, Row } from "antd";
import { arrayWallet } from "./utilitiesWalletIcon";
import { useContext } from "react";

import IconWalletContext from "../../context/IconWalletContext";
import { Link } from "react-router-dom";

//? todo
// ListWalletIcon
export default function ListWalletIcon() {
  const { type, setType } = useContext(IconWalletContext);

  const listWalletIcon = arrayWallet.map(item =>
    <Col
      key={item.id}
      span={12}
      style={type === item.id && { backgroundColor: "var(--neutral-40)" }}
    >
      <Row justify="center">
        <Col>
          <Link to="/add-new-wallet">
            <Image
              alt=""
              src={item.icon}
              preview={false}
              width="120px"
              onClick={() => setType(item.id)}
            />
          </Link>
        </Col>
      </Row>
    </Col>
  );

  return (
    <Row gutter={[0, 8]}>
      {listWalletIcon}
    </Row>
  );
}
