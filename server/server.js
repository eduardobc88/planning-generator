const fastify = require('fastify')({logger: false})
const fastifyStatic = require('fastify-static')
const fastifyFormBody = require('fastify-formbody')
const fastifyURLData = require('fastify-url-data')
const pointOfView = require('point-of-view')
const path = require('path')
const ejs = require('ejs')

const websiteRouter = require('../website/router/website-router')
const websiteAPIRouter = require('../website/router/website-api-router')


// body parse
fastify.register(fastifyFormBody)

// template engine
fastify.register(pointOfView, {
    engine: {
        ejs: ejs,
    },
    options: {
        filename: path.resolve('website/view'),
    },
    templates: 'website/view',
    includeViewExtension: true,
})

// static directory
fastify.register((instance, opts, next) => {
    instance.register(fastifyStatic, {
        root: path.join(__dirname, '../website/static'),
        prefix: '/website',
    })
    next()
})

// support for getting raw URL information from the request
fastify.register(fastifyURLData)

// router website
fastify.register(websiteRouter)

// router website dashboard api
fastify.register(websiteAPIRouter, { prefix: '/api' })

// listener
fastify.listen(3000, '0.0.0.0', (err, address) => {
    if(err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info('Server listening on port: ',address)
})

// TODO: finish session stored
