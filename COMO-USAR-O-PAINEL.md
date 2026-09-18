# 📱 Como Funciona o Painel Táboa Brasil

O seu projeto agora possui uma **Área Administrativa Mobile-First** feita sob medida para o lojista gerenciar produtos pelo celular de forma tão fácil quanto postar no WhatsApp ou Instagram!

---

## 🚀 1. Como acessar agora (Modo Local / Teste Imediato)

1. Abra o arquivo [`admin.html`](file:///d:/Pessoal/A%20Landing/T%C3%A1boa%20Brasil/admin.html) no navegador (ou clique no link discreto **"Área do Lojista 🔒"** no rodapé de [`index.html`](file:///d:/Pessoal/A%20Landing/T%C3%A1boa%20Brasil/index.html)).
2. Digite o **PIN inicial padrão**: `1234`.
3. Pronto! Você já pode:
   - **Alterar qualquer preço com 1 clique**: Toque no botão de preço do card, use os atalhos (+R$5, +R$10, etc.) e salve.
   - **Cadastrar novos produtos**: Clique em **"+ Nova Peça"** e aperte o botão **"📷 Escolher foto da galeria"**. O celular abrirá a galeria ou a câmera, e o sistema já redimensiona a foto para não ficar pesada!
   - **Pausar produto esgotado**: Clique no botão "Pausar" e ele sai temporariamente da vitrine sem você precisar apagá-lo.

---

## ☁️ 2. Como ativar a Nuvem Gratuita (Firebase) para qualquer cliente na Internet ver as alterações

Para que qualquer alteração feita no celular do lojista apareça instantaneamente para todos os visitantes do site na internet:

1. Acesse [firebase.google.com](https://firebase.google.com/) e faça login com sua conta do Google.
2. Clique em **"Ir para o console"** e depois em **"Adicionar projeto"** (ex: `taboa-brasil`).
3. No menu lateral do Firebase:
   - Clique em **Criação > Firestore Database** e depois em **Criar banco de dados** (escolha o modo de teste para começar).
   - Clique em **Criação > Storage** e depois em **Começar** (para guardar as fotos).
4. No menu lateral, clique na **engrenagem (Configurações do projeto)**, role até o final e clique no ícone **Web `</>`** para registrar o aplicativo.
5. Ele vai exibir um bloco com as credenciais. Basta abrir o arquivo [`js/firebase-config.js`](file:///d:/Pessoal/A%20Landing/T%C3%A1boa%20Brasil/js/firebase-config.js) no seu projeto e preencher:

```javascript
window.FIREBASE_CONFIG = {
  enabled: true, // <- mude para true
  apiKey: "SUA_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "...",
  appId: "..."
};
```

Assim que você mudar `enabled: true`, o painel e o site principal passarão a sincronizar tudo em tempo real pela nuvem do Google de forma 100% gratuita!

---

## 🔑 3. Como mudar o PIN de acesso

Por padrão o PIN é `1234`. Se você ou o cliente quiserem trocar, basta definir uma nova chave no navegador do lojista executando no console ou alterando a constante `DEFAULT_PIN` no arquivo [`js/admin.js`](file:///d:/Pessoal/A%20Landing/T%C3%A1boa%20Brasil/js/admin.js).
