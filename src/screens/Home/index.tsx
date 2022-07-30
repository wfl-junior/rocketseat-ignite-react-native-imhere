import { Text, View } from "react-native";
import { styles } from "./styles";

export const Home: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.eventName}>Nome do Evento</Text>
    <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>
  </View>
);
