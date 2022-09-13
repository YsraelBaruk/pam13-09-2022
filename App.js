//import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TelaJavaScript from "./componentes/TelaJavaScript";
import TelaReact from "./componentes/TelaReact";
import TelaNode from "./componentes/TelaNode";

const MenuNav = createDrawerNavigator();

export default function App() {
  return (
    <Navigation.Container>
      <MenuNav.Navigator>
        <MenuNav.Screen name="Java Script" component={ TelaJavaScript } />
        <MenuNav.Screen name="React" component={ TelaReact } />
        <MenuNav.Screen name="Node" component={ TelaNode } />
      </MenuNav.Navigator>
    </Navigation.Container>
  );
}