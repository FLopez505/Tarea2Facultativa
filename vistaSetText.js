import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    SafeAreaView,
    DrawerLayoutAndroid,
    Alert,
} from 'react-native';


  function Separador(){
    return <View style={styles.separator}></View>;
  }


const VistaSetText = (propiedades) => {
    const {mostrarTexto,cambiarPagina} = propiedades;

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View>
                    <View>
                        <Text style={styles.title}>
                             Intenta ingresar un texto en este espacio que te mostraré a continuación
                        </Text>
                    </View>
                    <Separador/>
                    <View>
                    <TextInput 
                    style={styles.title}
                    placeholder='Escribe'
                    onChangeText={mostrarTexto}
                    />     
                    </View>
                    <Separador/>
                    <Button 
                    title='Insertar texto'
                    onPress={cambiarPagina}
                    />
                </View>
               
            </View>
        </SafeAreaView>
    );
};

//Prueba de estilos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#B2FCFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    //marginVertical: 5,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
}); 
//Fin de pruebas de estilos

export default VistaSetText;