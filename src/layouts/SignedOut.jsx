import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Item>
        <Button primary onClick={signIn}>Daxil ol</Button>
        <Button primary style={{ marginLeft: "0.5em" }}>
          Qeydiyyatdan keç
        </Button>
      </Menu.Item>
    </div>
  );
}
