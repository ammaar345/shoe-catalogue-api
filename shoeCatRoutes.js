module.exports = function routesCatalogue(shoeCatFunc) {
    async function allStockDisplay(req, res) {
        const stock = await shoeCatFunc.allStock()
        console.log(stock)
        res.send(stock)
    }



    return {
        allStockDisplay
        // home


    }

}