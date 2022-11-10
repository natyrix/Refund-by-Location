const Refund = artifacts.require("RefundByLocation.sol")
contract("Refund",  function(accounts){
    it('add employee',function(done){
        Refund.deployed().then(instance=>{
            instance.init_employee("Name","0xC28cf2b7dc8a7a26Cd1B6Cd55986D91e08C12022").then(value=>{
                assert(value['receipt']['status'] === true);
                done()
            })
        })
    })
    
    it('check employeecount count', function(done){
        Refund.deployed().then(instance=>{
            instance.employeecount().then(value=>{
                assert(value['length'] === 1);
                done()
            })
        })
    })
})