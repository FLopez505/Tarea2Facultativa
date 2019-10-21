import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    SafeAreaView,
    DrawerLayoutAndroid,
    Alert,
} from 'react-native';


  function Separador(){
    return <View style={styles.separator}></View>;
  }


const VistaShowText = (propiedades) => {
    const {TextoExtraido,cambiarPagina} = propiedades;

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <View>
                    <Text style={styles.title}>
                        Este Fué el texto que Escribiste, Saludos!
                    </Text>
                </View>
                <Separador/>
                <View>
                    <Text style={{fontWeight: 'bold',textAlign: 'center'}}>
                    {TextoExtraido}
                    </Text>
                    <Separador/>
                     <Button 
                        title='Ingresar otro texto'
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

export default VistaShowText;