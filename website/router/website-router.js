const websiteController = require('../controller/website-controller')


let routes = [
    {
        method: 'GET',
        url: '/*',
        handler: websiteController.websiteIndex,
    },
]

let websiteRouter = async (fastify, opts, next) => {
    routes.forEach((route) => {
        fastify.route(route)
    })
}


module.exports = websiteRouter
