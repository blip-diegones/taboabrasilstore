/**
 * TÁBOA BRASIL - CONFIGURAÇÃO DO FIREBASE (NUVEM COMPARTILHADA)
 * 
 * Para que qualquer alteração feita no celular apareça instantaneamente
 * para todos os clientes que visitarem o site pela internet, basta preencher
 * as chaves do seu projeto gratuito do Firebase abaixo.
 * 
 * SE DEIXAR VAZIO (ou enabled: false):
 * O painel funcionará automaticamente no modo local do navegador (ótimo para testes!).
 */

window.FIREBASE_CONFIG = {
  enabled: false, // Mude para true quando preencher as credenciais abaixo
  apiKey: "SUA_API_KEY_AQUI",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};
