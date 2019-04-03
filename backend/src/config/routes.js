const express = require('express')

module.exports = function(server) {
    // Define base URL
    const router = express.Router()
    server.use('/api', router)

    // Routes
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billing-cycles')
}