# 🔥 Configuração Firebase para PESTA

## Passo 1: Criar Projeto Firebase

1. Acede a [Firebase Console](https://console.firebase.google.com/)
2. Clica em **"Adicionar projeto"** ou **"Create a project"**
3. Nome do projeto: `pesta-organizador` (ou o que quiseres)
4. Aceita os termos e clica **"Continuar"**
5. Google Analytics: **opcional** (podes desativar para simplificar)
6. Clica **"Criar projeto"** e aguarda

---

## Passo 2: Adicionar App Web

1. No dashboard do projeto, clica no ícone **`</>`** (Web)
2. Nickname da app: `PESTA Web App`
3. **NÃO** seleciones Firebase Hosting (já tens GitHub Pages)
4. Clica **"Registar app"**
5. Aparecerá um código `firebaseConfig` — **COPIA ISTO!**

Exemplo do código que vais ver:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyA1234567890abcdefg",
  authDomain: "pesta-organizador.firebaseapp.com",
  projectId: "pesta-organizador",
  storageBucket: "pesta-organizador.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456"
};
```

---

## Passo 3: Ativar Firestore Database

1. No menu lateral, clica em **"Build"** → **"Firestore Database"**
2. Clica **"Create database"**
3. Escolhe o modo:
   - **Production mode** (mais seguro) — recomendado
   - Ou **Test mode** (apenas para testes — dados públicos por 30 dias)
4. Escolhe localização: **`europe-west1`** (Bélgica - mais próximo de Portugal)
5. Clica **"Enable"**

---

## Passo 4: Configurar Regras de Segurança

### ⚠️ IMPORTANTE: Segurança dos Dados

Por padrão, se escolheste **Production mode**, ninguém consegue ler/escrever. 

### Opção A: Acesso Público (APENAS PARA TESTE!)
**⚠️ NÃO usar em produção - qualquer pessoa pode modificar os teus dados!**

1. Vai a **Firestore Database** → **Rules**
2. Substitui o código por:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /pesta/{document=**} {
      allow read, write: if true;  // ⚠️ PÚBLICO - só para teste!
    }
  }
}
```
3. Clica **"Publish"**

### Opção B: Acesso com Autenticação (RECOMENDADO)
Implementar login Google/Email no futuro para proteger os dados.

---

## Passo 5: Colar Credenciais no Código

1. Abre `pesta.html`
2. Procura a secção:
```javascript
const firebaseConfig = {
    apiKey: "AIzaSyBLcU-3JPu3NYNlJgvWg9Hr4cz6DanXeU0",
    authDomain: "pesta-organizador.firebaseapp.com",
    // ...
};
```
3. **SUBSTITUI** pelos valores que copiaste no Passo 2
4. Guarda o ficheiro

---

## Passo 6: Testar

1. Abre o ficheiro localmente ou faz push para GitHub Pages
2. Abre a página no browser
3. Deves ver uma notificação:
   - ✅ **"Sincronizado com Firebase"** — funcionou!
   - ⚠️ **"Firebase não configurado"** — verifica as credenciais

4. Adiciona uma tarefa e recarrega a página
5. Se a tarefa persistir, está tudo OK! 🎉

---

## Verificar Dados no Firebase

1. Vai ao Firebase Console → **Firestore Database**
2. Deves ver uma collection chamada `pesta`
3. Dentro, um documento `tasks` com os teus dados

---

## 🔒 Segurança - Próximos Passos

Para proteger os teus dados:

1. **Implementar autenticação** (Google Sign-In ou Email/Password)
2. **Atualizar regras do Firestore** para:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /pesta/{document=**} {
      // Apenas utilizadores autenticados
      allow read, write: if request.auth != null;
    }
  }
}
```

---

## Custos

**Firebase Free Tier (Spark Plan):**
- ✅ 1 GB armazenamento
- ✅ 50,000 leituras/dia
- ✅ 20,000 escritas/dia
- ✅ 20,000 deletes/dia

**Para uso pessoal é 100% GRÁTIS!** 🎉

---

## Troubleshooting

### Erro: "Missing or insufficient permissions"
→ Configura as regras do Firestore (Passo 4)

### Erro: "Firebase: Firebase App named '[DEFAULT]' already exists"
→ Recarrega a página (já está configurado)

### Dados não aparecem
→ Verifica:
1. Credenciais corretas no código
2. Regras do Firestore permitem acesso
3. Console do browser (F12) para ver erros

---

## Suporte

Dúvidas? Consulta a [Documentação Firebase](https://firebase.google.com/docs/firestore)
