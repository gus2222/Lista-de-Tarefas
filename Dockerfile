# Use a imagem oficial do Node.js como base
FROM node:18

# Crie um diretório para o aplicativo
WORKDIR /usr/src/app

# Copie os arquivos do projeto para o diretório do aplicativo
COPY . .

# Instale o http-server globalmente
RUN npm install -g http-server

# Exponha a porta que o http-server usará
EXPOSE 8080

# Comando para iniciar o http-server
CMD ["http-server", "-p", "8080"]
