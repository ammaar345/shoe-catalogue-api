const assert=require("assert");
const ShoeCatalogue=require("../shoe-catalogue")
const pg=require("pg")
const Pool=pg.Pool;
const connectionString = process.env.DATABASE_URL || 'postgresql://sneakygoblin:codex123@localhost:5432/waiters';
const pool = new Pool({
    connectionString
  });
  beforeEach(async () => {


  }) 
describe("should ...", () => {
  it('should bread',function(){
    const shoe=ShoeCatalogue(pool);

    assert.deepStrictEqual(shoe.bread(),'bread')
    
    
  })




})