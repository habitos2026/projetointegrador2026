# Usa uma imagem oficial do Nginx baseada no Alpine Linux (leve e segura)
FROM nginx:alpine

# Remove a página padrão de boas-vindas do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia todos os arquivos da pasta do projeto web local para o diretório padrão do Nginx no container
COPY . /usr/share/nginx/html

# Expõe a porta padrão HTTP do Nginx
EXPOSE 80

# O Nginx já possui um comando padrão (CMD) para iniciar em primeiro plano, 
# portanto não é necessário reescrevê-lo.