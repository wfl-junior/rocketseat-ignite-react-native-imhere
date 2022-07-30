import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

const participants = [
  "Wallace",
  "Rodrigo",
  "Vini",
  "Diego",
  "Biro",
  "Ana",
  "Isa",
  "Jack",
  "Mayk",
];

export const Home: React.FC = () => {
  function handleAddParticipant() {
    if (participants.includes("Rodrigo")) {
      return Alert.alert(
        "Participante",
        "Já existe um participante na lista com esse nome.",
      );
    }
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert(
      "Participante",
      `Deseja mesmo remover o participante ${name}?`,
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          style: "destructive",
          onPress: () => {
            Alert.alert("Participante", `Participante ${name} removido.`);
          },
        },
      ],
    );
  }

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

      <FlatList
        data={participants}
        keyExtractor={participant => participant}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: participant }) => (
          <Participant
            name={participant}
            onRemove={() => handleRemoveParticipant(participant)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
};
