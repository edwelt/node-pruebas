= Instalar Node.js
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install nodejs
== chequear versiones node y npm
node -v 
npm -v
== instanciar webserver demo
cd 01-webserver
node server.js
En modo debug: 
node --inspect server.js
Acceder a http://127.0.0.1:3000
= Instalar yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install yarn
== chequear yarn
yarn -v
== crear proyecto
mkdir 02-fastity & cd fastify
yarn init
== agregar dependencias fastify, typescript
yarn add fastify typescript 
== agregar dependencia ts-node-dev en desarrollo 
yarn add -D ts-node-dev
ts-node-dev transpila typescript y permite hot reload
== Para que typescript detecte los tipings de node:
yarn add @types/node
== en package.json agregar scripts
  "scripts": {
    "start": "node build/server3.js",  //ejecuta en produccion transpilado a js
    "build": "tsc -p tsconfig.json", //compila todos los ts
    "dev": "ts-node-dev server3.js" //para desarrollo, transpila ejecuta y hot reload
  }

