import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ParticipantProps {}

export const Participant: React.FC<ParticipantProps> = () => (
  <View style={styles.container}>
    <Text style={styles.name}>Wallace Júnior</Text>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>
  </View>
);
