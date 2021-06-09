import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://launchwebsitedesign.com/wp-content/uploads/2017/09/josh-d-avatar.jpg"
        />
        <Dropdown pointing="top left" text="Fərəh">
          <Dropdown.Menu>
            <Dropdown.Item text="Məlumatlarım" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıxış elə" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}

// onClick heryerde isleyir
// props obje gelir onu distructed eleyirem {x, y, z....}
