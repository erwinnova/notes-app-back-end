const Hapi = require('@hapi/hapi');

const server = Hapi.server({
  port: 5000,
  host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});

server.start();
console.log('SERVER STARTED ON PORT: 5000');
