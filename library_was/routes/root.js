'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (req, reply) {
    return '도서 대출 관리 WAS';
  })
}