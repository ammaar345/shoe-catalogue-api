 module.exports = function shoeCatFunction(pool) {
    async function addStock(qty, brand, color, size) {
        await pool.query('insert into shoeinfo(qty,brand,color,size) values($1,$2,$3,$4)', [qty, brand, color, size])
    }
    async function filterBySize(size) {
        const filteredBySize = await pool.query('select * from shoeinfo where size=$1', [size])
        return filteredBySize.rows

    }
d 
    async function filterByBrand(brand) {
        const filterByBrand = await pool.query('select * from shoeinfo where brand=$1', [brand])
        return filterByBrand.rows
    }
    async function filterByBrandSize(brand, size) {
        const filteredByBrandSize = await pool.query(`
        SELECT *
        FROM shoeinfo
        WHERE (brand = $1 AND size=$2)`,[brand,size]);
        return filteredByBrandSize.rows;
    }
    async function allStock() {
        const allStock = await pool.query('SELECT * FROM shoeinfo')
        return allStock.rows;
    }
    async function updateStock(qty) {
        await pool.query(`UPDATE shoeinfo
                         SET qty = qty-$1
`                                   , qty)
    }
    return {
        filterBySize,
        filterByBrand,
        addStock,
        filterByBrandSize,
        allStock,
        updateStock

    }
}