module.exports = {
  apps : [{
    name   : "PG",
    script : "./server/server.js",
    instances  : 1,
    exec_mode  : "cluster",
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
       "NODE_ENV": "production"
    },
    watch  : true,
    ignore_watch : [
        "node_modules",
        "website/view",
    ],
    watch_options: {
        followSymlinks: false
    }
  }]
}
