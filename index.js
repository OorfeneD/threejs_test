const fastify = require('fastify')()
const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/', // optional: default '/'
})
fastify.get('/', function (req, reply) {
  return reply.sendFile('index.html')
})
fastify.get('/js/three.js', function (req, reply) {
  return reply.sendFile('js/three.js')
})
fastify.get('/js/mousetrap.js', function (req, reply) {
  return reply.sendFile('js/mousetrap.js')
})
fastify.get('/media/ding.ogg', function (req, reply) {
  return reply.sendFile('media/ding.ogg')
})
fastify.listen(process.env.PORT, (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})