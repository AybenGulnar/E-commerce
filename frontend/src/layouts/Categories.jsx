import React from "react";
import { Menu } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item
          name="Bilgisayar"
        />
        <Menu.Item
          name="Telefon"
        />
        <Menu.Item
          name="Elektronik"
        />
        <Menu.Item
            name="Beyaz Eşya"
        />
        <Menu.Item
            name="Kırtasiye"
        />
        <Menu.Item
            name="Kitap"
        />
        <Menu.Item
            name="Kozmetik"
        />
        <Menu.Item
            name="Spor"
        /> <Menu.Item
          name="Giyim"
      /> <Menu.Item
          name="Ev"
      />

      </Menu>
    </div>
  );
}
