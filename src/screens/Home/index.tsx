import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const Home: React.FC = () => {
  function handleAddParticipant() {}

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
        autoComplete="off"
        autoCapitalize="words"
      />

      <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
