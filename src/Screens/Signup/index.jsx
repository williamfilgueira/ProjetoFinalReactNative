import React, { useState } from "react";

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  CheckBox,
  Image,
} from "react-native";

import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

export default function Signup() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [CPF, setCPF] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const [isSelected, setSelection] = useState(false);

  const createAccount = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Signup</Text>
      </View>
      <View style={styles.textContainer}>
        <TextInput
          onChangeText={setEmail}
          placeholder="Email"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setUsername}
          placeholder="Username"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setName}
          placeholder="Nome"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setCPF}
          placeholder="CPF"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setBirthDate}
          placeholder="Data de nascimento"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setPassword}
          placeholder="Senha"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setPassword}
          placeholder="Repita sua senha"
          style={styles.textInput}
        />
        <View style={styles.checkContainer}>
          <CheckBox value={isSelected} onValueChange={setSelection} />
          <Text>Lembrar de mim</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => createAccount()} style={styles.button}>
          <Text>Criar conta</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Já tenho uma conta</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}