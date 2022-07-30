import { Fragment } from "react";
import { StatusBar, Text, View } from "react-native";

const App = () => (
  <Fragment>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />

    <View
      style={{
        flex: 1,
        backgroundColor: "#131016",
        padding: 24,
      }}
    >
      <Text
        style={{
          color: "#fdfcfe",
          fontSize: 24,
          fontWeight: "700",
          marginTop: 48,
        }}
      >
        Nome do Evento
      </Text>

      <Text
        style={{
          color: "#6b6b6b",
          fontSize: 16,
        }}
      >
        Sexta, 4 de novembro de 2022
      </Text>
    </View>
  </Fragment>
);

export default App;
