const websiteAPIController = require('../controller/website-api-controller')

let routes = [
    {
        method: 'GET',
        url: '/aspects*',
        handler: websiteAPIController.getAspects,
    },
]

let websiteAPIRouter = async (fastify, opts, next) => {
    routes.forEach((route) => {
        fastify.route(route)
    })
}


module.exports = websiteAPIRouter
