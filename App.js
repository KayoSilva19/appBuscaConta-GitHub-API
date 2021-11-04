import React, { useState, useRef  } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, Image, SafeAreaView, Keyboard } from 'react-native';

import api from './src/Services/api';

export default function App() {
    const [idUser, setIdUser] = useState('')
    const inputRef = useRef(null);
    const [userPerfil, setUserPerfil] = useState(null);

    async function buscarPerfil() {
        if (!idUser) {
            alert("Digite um perfil válido!")
            return;
        }
        try {
            const response = await api.get(`${idUser}`);
            console.log(response.data);
            console.log(response.data.avatar_url);
            setUserPerfil(response.data);
            Keyboard.dismiss(); //Garantir que o teclado sera fechado!

        } catch (error) {
            console.log('ERROR: ' + error);

        }


    }

    function limpar(){
        setIdUser('')
        inputRef.current.focus();
        setUserPerfil(null)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <StatusBar backgroundColor="#F77C39" barStyle="light-content" />
                <View style={styles.areaPesquisa}>
                    <Text style={styles.textInfo}> Busca.Git </Text>
                    <TextInput
                        style={styles.textNameInput}
                        placeholder="Digite o nome do perfil desejado"
                        placeholderTextColor="#B5B5B5"
                        onChangeText={(valor) => setIdUser(valor)}
                        ref={inputRef}
                    >

                    </TextInput>
                    <TouchableOpacity
                        style={styles.botaoBusca}
                        onPress={buscarPerfil}

                    >
                        <Text style={styles.textBusca}> BUSCAR PERFIL! </Text>
                    </TouchableOpacity>
                </View>

                {userPerfil &&
                    <View style={styles.areaPerfil}>
                        <Image
                            source={{uri: userPerfil.avatar_url}}
                            style={styles.imgPerfil}
                        />

                        <Text style={styles.namePerfil}>{userPerfil.name}</Text>
                        <View style={styles.areaBio}>
                            <Text
                                style={{
                                    marginLeft: 10,
                                    marginTop: 10,
                                    fontFamily: "Roboto-Light",
                                    fontWeight: 'bold',
                                    color: "#79797A"
                                }}
                            >Biografia:</Text>
                            <Text style={styles.bioPerfil}>{userPerfil.bio}</Text>
                        </View>
                        <Text style={[styles.namePerfil, { fontFamily: "Roboto-Light", fontSize: 15 }]}>Localização: {userPerfil.location}</Text>

                        <TouchableOpacity
                            style={styles.buttonClear}
                            onPress={limpar}
                        >
                            <Text style={styles.textLimpar}> LIMPAR </Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2e2d2d"
    },
    areaPesquisa: {
        alignSelf: 'center',
        marginTop: 50,
        backgroundColor: "#FFF",
        height: 200,
        width: "80%",
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 5,
        }
    },
    textInfo: {
        fontSize: 20,
        fontFamily: "Roboto-Medium",
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
        color: "#79797A"

    },
    botaoBusca: {
        backgroundColor: "#F77C39",
        height: 50,
        alignItems: 'center',
        justifyContent: "center",
        margin: 16,
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7
    },
    textBusca: {
        fontFamily: "Roboto-Medium",
        color: "#FFF",
        fontWeight: 'bold',
        fontSize: 15
    },
    textNameInput: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#F77C39",
        margin: 16,
        borderRadius: 10,
        paddingLeft: 10,
        fontFamily: "Roboto-Light",
        color: "#79797A"
    },
    areaPerfil: {
        backgroundColor: "#F77C39",
        minHeight: 350,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 7,
        borderBottomLeftRadius: 7

    },
    imgPerfil: {
        // backgroundColor: "#FFF",
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 20,
        zIndex: 9,
    },
    namePerfil: {
        marginTop: 16,
        fontFamily: "Roboto-Medium",
        fontSize: 20,
        color: "#FFF"
    },
    areaBio: {
        marginTop: 16,
        backgroundColor: "#FFF",
        minHeight: 50,
        width: "80%",
        borderRadius: 7,
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.7,
        shadowRadius: 0.2,
        shadowOffset: {
            width: 7,
            height: 10,
        }
    },
    bioPerfil: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        fontFamily: "Roboto-Light",
        color: "#79797A"

    },
    buttonClear:{
        backgroundColor: "#FFF",
        borderRadius: 7,
        marginTop: 16, 
        marginBottom: 16,
        height: 30,
        width: 90,
        alignItems: 'center',
        justifyContent: 'center'

    },
    textLimpar:{
        fontFamily: "Roboto-Light",
        fontWeight: 'bold',
        color: "#F77C39",
        
    }

})
