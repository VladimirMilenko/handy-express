var cluster = require('cluster')

if (cluster.isMaster) {

    console.log('Master cluster setting up ' + numWorkers + ' workers...')

    cluster.on('online', worker => {
        console.log('Worker ' + worker.process.pid + ' is online')
    })

    cluster.on('exit', (worker, code, signal) => {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal)
        console.log('Starting a new worker');
        cluster.fork()
    });

    var numWorkers = require('os').cpus().length;

    for (var i = 0; i < numWorkers; i++) cluster.fork()

} else {
    var app = require('./index');
}