import { Fragment } from "react";
import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";

const App: React.FC = () => (
  <Fragment>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />

    <Home />
  </Fragment>
);

export default App;
