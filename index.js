const dotenv = require('dotenv')
const fastify = require('fastify')()
const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/', // optional: default '/'
})
fastify.get('/three/*', (req, reply) => {
  return reply.sendFile('node_modules/' + req.url)
})
fastify.get('/*', (req, reply) => {
  return reply.sendFile(req.url)
})
// fastify.get('/', function (req, reply) {
//   return reply.sendFile('index.html')
// })
// fastify.get('/js/three.js', function (req, reply) {
//   return reply.sendFile('js/three.js')
// })
// fastify.get('/js/mousetrap.js', function (req, reply) {
//   return reply.sendFile('js/mousetrap.js')
// })
// fastify.get('/media/ding.ogg', function (req, reply) {
//   return reply.sendFile('media/ding.ogg')
// })
// fastify.get('/media/noty-do.ogg', function (req, reply) {
//   return reply.sendFile('media/noty-do.ogg')
// })
fastify.listen(3307, (err, address) => {
  if (err) throw err
  console.log('Started on ' + process.env.PORT)
  fastify.log.info(`server listening on ${address}`)
})