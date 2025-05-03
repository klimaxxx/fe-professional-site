## Instalação e execução do projeto

### 1. Atualize a lista de pacotes:
```bash
sudo apt update
```

### 2. Adicione o repositório do Node.js 20.x:
Adiciona o repositório oficial do Node.js 20.x ao seu sistema.
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
```

### 3. Instale o Node.js e o npm:
Instala o Node.js e seu gerenciador de pacotes, o npm.
```bash
sudo apt install -y nodejs
```

### 4. Verifique a versão do Node.js:
Exibe a versão instalada do Node.js.
```bash
node -v
```

### 5. Verifique a versão do npm:
Exibe a versão instalada do npm.
```bash
npm -v
```

### 6. Instale as dependências do projeto:
Instala todas as dependências listadas no package.json.
```bash
npm install
```
### 7. Inicie o servidor de desenvolvimento:
Inicia o projeto em modo de desenvolvimento com hot reload.
```bash
npm run dev
```
### 8. Execute uma prévia de produção:
Inicia uma versão do projeto simulando o ambiente de produção.
```bash
npm run preview
```
### 9. Acesse o projeto localmente:
Endereço local onde o projeto estará disponível após o npm run preview.
```bash
Local: http://localhost:4173/
```