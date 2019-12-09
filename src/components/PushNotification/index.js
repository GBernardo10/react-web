import React from 'react'
import firebase from 'firebase'

export const inicializarFirebase = () => {
    firebase.initializeApp({
        messagingSenderId:"860239380508"
    })
}

export const perdirPermissaoParaReceberNotificacoes = async ()=>{
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token =  await messaging.getToken();
        console.log("token do usuario: "+token)
        return token;
    } catch (error) {
        console.error(error)
    }
}
