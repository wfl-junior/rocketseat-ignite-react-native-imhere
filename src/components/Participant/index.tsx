import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ParticipantProps {
  name: string;
  onRemove: () => void;
}

export const Participant: React.FC<ParticipantProps> = ({ name, onRemove }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>

    <TouchableOpacity style={styles.button} onPress={onRemove}>
      <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>
  </View>
);
