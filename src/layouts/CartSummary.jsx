import React from "react";
import { NavLink } from "react-router-dom";
import {  Dropdown } from "semantic-ui-react";
export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Səbətiniz">
        <Dropdown.Menu>
          <Dropdown.Item>Chai</Dropdown.Item>
          <Dropdown.Item>Chang</Dropdown.Item>
          <Dropdown.Item>Aniseed Syrup</Dropdown.Item>
          <Dropdown.Divider>
            <Dropdown.Item as = {NavLink} to = "/cart">Səbətə get</Dropdown.Item>
          </Dropdown.Divider>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

//  as = {NavLink} to = "/cart" ,angularin routerlinki ,href deyil bu href sehife yenileyir biz bi yerden diger yere gedirik
