import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0
    };
  }

  soma1() {
    this.setState({ valor: this.state.valor + 20 });
  };

  soma2() {
    this.setState({ valor: this.state.valor + 50 });
  }
  soma3() {
    this.setState({ valor: this.state.valor + 35 });
  }
  soma4() {
    this.setState({ valor: this.state.valor + 60 });
  }
  soma5() {
    this.setState({ valor: this.state.valor + 5 });
  }
  soma6() {
    this.setState({ valor: this.state.valor + 12 });
  }

  zerar() {
    this.setState({ valor: this.state.valor - this.state.valor });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>BURGUERLIMA</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.soma1()} ><Text style={styles.textbutton}> BURGUER ONE R$:20.00</Text><Image style={styles.icon} source={require('./assets/burguer.png')} /></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.soma2()}><Text style={styles.textbutton}> SPLASH BURGUER R$50.00</Text><Image style={styles.icon} source={require('./assets/burguer(2).png')} /></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.soma3()}><Text style={styles.textbutton}> BURGUER JUNIOR R$35.00</Text><Image style={styles.icon} source={require('./assets/burguer.png')} /></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.soma4()}><Text style={styles.textbutton}> BURGUER TURBO  R$60.00</Text><Image style={styles.icon} source={require('./assets/burguer(2).png')} /></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.soma5()}><Text style={styles.textbutton}> COCA-COLA: R$5.00</Text><Image style={styles.icon} source={require('./assets/cola.png')} /></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.soma6()}><Text style={styles.textbutton}> FRITAS: R$12.00</Text><Image style={styles.icon} source={require('./assets/burguer.png')} /></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.zerar()}><Text style={styles.textbuttonfim}> FINALIZAR</Text></TouchableOpacity>

        <Text style={styles.total}>Total: R${this.state.valor}.00</Text>
      </View>
    );
  }
}

export default App;




const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 30,
    marginLeft: 10,
  },
  button: {
    height: 70,
    width: 340,
    marginTop: 12,
    backgroundColor: '#e1e1e1',
    borderRadius: 9,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  textbuttonfim: {

    fontWeight: 'bold',
    fontSize: 19,
    marginLeft: 115,
    marginTop: 18,
  },
  textbutton: {

    fontWeight: 'bold',
    fontSize: 19,
    marginLeft: 5,
    marginTop: 18,

  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
  },
  total: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  icon: {
    height: 35,
    width: 35,
    marginTop: 18,

  }

});

