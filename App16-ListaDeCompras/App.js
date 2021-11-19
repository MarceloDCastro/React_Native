import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, Pressable, FlatList } from "react-native";
import * as SQLite from 'expo-sqlite';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const db = SQLite.openDatabase("compras.db");

const App = () => {
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [produtos, setProdutos] = useState([]);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS compras (id INTEGER PRIMARY KEY AUTOINCREMENT, produto VARCHAR(30), quantidade INT)`,
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

  const addProduto = () => {
    if (!produto) {
      alert("Digite o produto!");
      return false;
    }
    if (!quantidade) {
      alert("Digite a quantidade!");
      return false;
    }
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO compras (produto,quantidade) VALUES (?,?)`,
        [produto,quantidade],
        (sqlTxn, res) => {
          console.log(`Produto ${produto} adicionada!`);
          getProdutos();
          setProduto("");
          setQuantidade("");
        },
        error => {
          console.log("Erro ao adicionar produto " + error.message);
        },
      );
    });
  };

  const delProduto = (id) => {
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM compras WHERE id = ?`,
        [id],
        (sqlTxn,res) => {
          console.log(`Produto ${id} excluído!`);
          getProdutos();
        },
        error => {
          console.log("Erro ao excluir produto " + error.message);
        }
      )
    })
  }

  const getProdutos = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM compras`,
        [],
        (sqlTxn, res) => {
          let len = res.rows.length;
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, produto: item.produto, quantidade: item.quantidade });
            }
            setProdutos(results);
          }
        },
        error => {
          console.log("Erro ao obter produtos " + error.message);
        },
      );
    });
  };
  
  const renderProduto = ({ item }) => {
    return (
      <View style={{display:"flex", flexDirection: "row", padding: 10, borderBottomWidth: 1, justifyContent: "space-between", marginHorizontal: 10}}>
        <View style={{display:"flex", flexDirection: "row"}}>
          <Text style={{marginRight: 5}}>{item.produto}</Text>
          <Text>({item.quantidade})</Text>
        </View>
        <Pressable onPress={() => { delProduto(item.id) }}>
          <FontAwesome name='trash' size={22} color='red' />
        </Pressable>
      </View>
    );
  };

  useEffect(async () => {
    await createTables();
    await getProdutos();
  }, []);

  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 25, textAlign: "center", margin: 30 }}>Lista de Compras</Text>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <TextInput
        placeholder="Qnt"
        keyboardType = 'number-pad'
        value={quantidade}
        onChangeText={setQuantidade}
        style={{ marginRight: 10, borderWidth: 1, borderRadius: 10, fontSize: 18, width: 40, height: 45, textAlign: "center"}}
        />
        <TextInput
        placeholder="Adicionar produto"
        value={produto}
        onChangeText={setProduto}
        style={{ marginRight: 10, borderWidth: 1, borderRadius: 10, fontSize: 18, width: 220, height: 45, paddingHorizontal: 8}}
        />
        <Pressable title="Adicionar Produto" onPress={addProduto}>
          <FontAwesome name='plus-square' size={45} color='lightgreen' />
        </Pressable>
      </View>
      <FlatList
      data={produtos}
      renderItem={renderProduto}
      key={p => p.id}
      />
    </View>
  );
};

export default App;
