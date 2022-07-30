import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export const Home: React.FC = () => {
  function handleAddParticipant() {}

  function handleRemoveParticipant() {}

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          autoComplete="off"
          autoCapitalize="words"
          onSubmitEditing={handleAddParticipant}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant name="Wallace Júnior" onRemove={handleRemoveParticipant} />
    </View>
  );
};
