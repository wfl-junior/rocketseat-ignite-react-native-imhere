import { useState } from "react";
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

export const Home: React.FC = () => {
  const [newParticipant, setNewParticipant] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);

  function handleAddParticipant() {
    const newParticipantTrimmed = newParticipant.trim();

    if (!newParticipantTrimmed) {
      return Alert.alert("Participante", "Informe o participante.");
    }

    if (participants.includes(newParticipant)) {
      return Alert.alert(
        "Participante",
        "Já existe um participante na lista com esse nome.",
      );
    }

    setParticipants(previousParticipants => [
      ...previousParticipants,
      newParticipantTrimmed,
    ]);

    setNewParticipant("");
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
            setParticipants(participants => {
              return participants.filter(participant => participant !== name);
            });
          },
        },
      ],
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Ignite React Native</Text>
      <Text style={styles.eventDate}>Sábado, 30 de julho de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          autoComplete="off"
          autoCapitalize="words"
          onSubmitEditing={handleAddParticipant}
          value={newParticipant}
          onChangeText={setNewParticipant}
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
