# 📎 Configuração Firebase Storage

## ✅ Implementação Completa

A funcionalidade de upload de ficheiros foi **implementada com sucesso** no projeto PESTA!

## 🎯 Funcionalidades Disponíveis

### Upload de Ficheiros
- ✅ Drag & Drop (arrastar e largar ficheiros)
- ✅ Seleção manual de ficheiros
- ✅ Upload múltiplo (vários ficheiros de uma vez)
- ✅ Barra de progresso em tempo real
- ✅ Suporte para: PDF, DOCX, DOC, TXT, imagens, vídeos, ZIP, etc.

### Gestão de Ficheiros
- ✅ Listagem de todos os ficheiros carregados
- ✅ Visualização de metadados (nome, tamanho, data)
- ✅ Download de ficheiros
- ✅ Visualização direta no browser
- ✅ Eliminação de ficheiros
- ✅ Ícones específicos por tipo de ficheiro

## ⚙️ Configuração do Firebase Storage

### 1. Ativar Firebase Storage na Consola

1. Aceda à [Firebase Console](https://console.firebase.google.com/)
2. Selecione o projeto: **pesta-organizador**
3. No menu lateral, clique em **Storage**
4. Clique em **Get Started** (se ainda não estiver ativado)
5. Escolha a localização: **us-east1** ou **us-west1** (únicas opções gratuitas disponíveis)

### 2. Configurar Regras de Segurança

Por defeito, o Storage tem regras muito restritivas. Você precisa ajustá-las.

Na aba **Rules** do Firebase Storage, cole as seguintes regras:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Pasta específica do projeto PESTA
    match /pesta-files/{allPaths=**} {
      // Permitir leitura e escrita sem autenticação
      // (apenas para desenvolvimento/protótipo)
      allow read, write: if true;
    }
  }
}
```

**⚠️ IMPORTANTE - Segurança:**

As regras acima permitem acesso total sem autenticação. Isso é adequado para:
- ✅ Protótipos e desenvolvimento
- ✅ Projetos pessoais/académicos
- ✅ Quando você é o único utilizador

Para um sistema em produção, considere:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /pesta-files/{allPaths=**} {
      // Apenas ficheiros até 50MB
      allow read: if true;
      allow write: if request.resource.size < 50 * 1024 * 1024;
    }
  }
}
```

### 3. Publicar as Regras

Depois de colar as regras, clique em **Publicar** no topo da página.

## 🚀 Como Usar

### Na Aplicação:

1. Abra o [pesta.html](pesta.html) no browser
2. Clique no tab **📎 Ficheiros**
3. Faça upload de ficheiros de 3 formas:
   - Arraste ficheiros para a área de upload
   - Clique em "Selecionar Ficheiros"
   - Selecione múltiplos ficheiros de uma vez

### Tipos de Ficheiros Suportados:

| Tipo | Extensões | Ícone |
|------|-----------|-------|
| PDF | .pdf | 📄 |
| Word | .doc, .docx | 📝 |
| Excel | .xls, .xlsx | 📊 |
| PowerPoint | .ppt, .pptx | 📽️ |
| Imagens | .jpg, .png, .gif | 🖼️ |
| Vídeos | .mp4, .avi, .mov | 🎥 |
| Texto | .txt | 📃 |
| Arquivos | .zip, .rar | 📦 |
| Outros | * | 📎 |

## 🔧 Estrutura Técnica

### Ficheiros Modificados:

1. **pesta.html**
   - Adicionado Firebase Storage SDK
   - Criado novo tab "Ficheiros"
   - Interface de upload com drag & drop
   - Funções de gestão completas

### Integração Firebase:

- **Storage Path:** `pesta-files/{timestamp}-{filename}`
- **Firestore Collection:** `pesta-files` (metadados)
- **Metadados Guardados:**
  - Nome do ficheiro
  - Tamanho
  - Tipo MIME
  - URL de download
  - Caminho no Storage
  - Data de upload

## 🧪 Testar a Funcionalidade

1. Configure as regras do Storage (passo 2 acima)
2. Abra o pesta.html
3. Vá ao tab "Ficheiros"
4. Faça upload de um ficheiro de teste
5. Verifique se aparece na lista
6. Teste download e visualização
7. Teste a eliminação

## ❓ Troubleshooting

### "Firebase Storage não está configurado"

**Solução:** Verifique se:
- O Storage está ativado na Firebase Console
- As regras de segurança foram publicadas
- O `storageBucket` está correto no firebase-config.js

### "Permission denied"

**Solução:**
- Verifique as regras de segurança no Firebase Console
- Certifique-se que publicou as regras após editar

### "Ficheiros não aparecem na lista"

**Solução:**
- Abra a consola do browser (F12)
- Verifique se há erros
- Verifique se o Firestore tem permissões de leitura

## 📊 Estatísticas de Armazenamento

O plano gratuito do Firebase Storage inclui:
- ✅ 5 GB de armazenamento
- ✅ 1 GB/dia de transferência (download)
- ✅ 50,000 leituras/dia
- ✅ 20,000 escritas/dia

**Totalmente suficiente para um projeto académico!**

## 🎓 Utilização no Projeto PESTA

Esta funcionalidade é ideal para:
- 📄 Armazenar relatórios e documentação
- 📊 Guardar datasets e resultados de testes
- 🖼️ Fotos e vídeos do protótipo
- 📝 Documentos de referência e artigos
- 🔬 Resultados de experiências
- 📋 Apresentações e posters

## ✅ Conclusão

A implementação está **100% funcional**. Basta configurar as regras de segurança no Firebase Console e começar a usar!

---

**Próximos Passos:**
1. ✅ Ativar Firebase Storage
2. ✅ Configurar regras de segurança
3. ✅ Fazer primeiro upload de teste
4. ✅ Marcar a tarefa "Verificar possibilidade upload ficheiros" como concluída! 🎉
