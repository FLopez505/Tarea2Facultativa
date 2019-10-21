/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import VistaShowText from './vistaShowText';
import VistaSetText from './vistaSetText';

class init extends Component {

  constructor (props){
    super(props);
    this.state = {
        vistaActual: 'pagina1',
        Texto: '',
    }

}

render(){
    var vista = this.state;
    if(vista.vistaActual == 'pagina1'){
        return(
            <VistaSetText 
              mostrarTexto ={this.cambTex}
              cambiarPagina={this.cambiarPagina}  //Pasando la función a la vista poner Text
             />
        );
    }else{
        return(
        <VistaShowText 
          TextoExtraido ={this.state.Texto}
          cambiarPagina={this.cambiarPagina} //Pasando la función a la vista mostrar Text
        />
        );
    }
}

cambTex = (texto) => {
  this.setState({
    Texto: texto
  });

}

cambiarPagina = () => {
  var vistaA = this.state; //Apuntando al estado de cambio de pantallas
  if(vistaA.vistaActual == 'pagina1'){
    this.setState({
      vistaActual: 'pagina2' //Cambiando el estado de vistas
    });
  }
  else if(vistaA.vistaActual == 'pagina2'){
    this.setState({
      vistaActual: 'pagina1' //Camiando el estado de las vistas
    });
  }
} 


}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


export default init;
