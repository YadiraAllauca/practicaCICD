# Establece la imagen base
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos necesarios al contenedor
COPY package.json package-lock.json /app/
COPY index.js /app/

# Instala las dependencias
RUN npm install

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]
