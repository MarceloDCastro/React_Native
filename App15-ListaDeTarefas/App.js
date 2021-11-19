import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, Pressable, FlatList } from "react-native";
import * as SQLite from 'expo-sqlite';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const db = SQLite.openDatabase("tarefas.db");

const App = () => {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY
        AUTOINCREMENT, nome VARCHAR(30))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("Erro ao criar tabela " + error.message);
        },
      );
    });
  };

  const addTarefa = () => {
    if (!tarefa) {
      alert("Preencha o campo!");
      return false;
    }
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`Tarefa ${tarefa} adicionada!`);
          getTarefas();
          setTarefa("");
        },
        error => {
          console.log("Erro ao adicionar tarefa " + error.message);
        },
      );
    });
  };

  const delTarefa = (id) => {
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM tarefas WHERE id = ?`,
        [id],
        (sqlTxn,res) => {
          console.log(`Tarefa ${id} excluída!`);
          getTarefas();
        },
        error => {
          console.log("Erro ao excluir tarefa " + error.message);
        }
      )
    })
  }

  const getTarefas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas`,
        [],
        (sqlTxn, res) => {
          let len = res.rows.length;
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }
            setTarefas(results);
          }
        },
        error => {
          console.log("Erro ao obter Tarefas " + error.message);
        },
      );
    });
  };
  
  const renderTarefa = ({ item }) => {
    return (
      <View style={{display:"flex", flexDirection: "row", padding: 10, borderBottomWidth: 1, justifyContent: "space-between", marginHorizontal: 10}}>
        <View style={{display:"flex", flexDirection: "row"}}>
          <Text>{item.id}</Text>
          <Text style={{marginHorizontal: 15}}>-</Text>
          <Text>{item.nome}</Text>
        </View>
        <Pressable onPress={() => { delTarefa(item.id) }}>
          <FontAwesome name='trash' size={22} color='red' />
        </Pressable>
      </View>
    );
  };

  useEffect(async () => {
    await createTables();
    await getTarefas();
  }, []);

  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 25, textAlign: "center", margin: 30 }}>Lista de Tarefas</Text>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <TextInput
        placeholder="Adicionar tarefa"
        value={tarefa}
        onChangeText={setTarefa}
        style={{ marginRight: 10, borderWidth: 1, borderRadius: 10, fontSize: 18, width: 260, height: 45, paddingHorizontal: 8}}
        />
        <Pressable title="Adicionar Tarefa" onPress={addTarefa}>
          <FontAwesome name='plus-square' size={45} color='lightgreen' />
        </Pressable>
      </View>
      <FlatList
      data={tarefas}
      renderItem={renderTarefa}
      key={t => t.id}
      />
    </View>
  );
};

export default App;
