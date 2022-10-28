const Casino = artifacts.require("Casino.sol")

contract("Casino",  function(accounts){
    it('Check player exists', function(done){
        // const resp = await Casino.deployed()
        // const val = await resp.checkPlayerExists(accounts[0]);
        // assert(val === false);
        // // val.stopWatching()
        // done()

        Casino.deployed().then(instance=>{
            instance.checkPlayerExists(accounts[0]).then(value=>{
                assert(value === false);
                done()
            });
            // val.watch((err, result)=>{
            //     if (err){
            //         val.stopWatching();
            //         done(err);
            //     }

            //     instance.outcome().then(outcome=>{
            //         console.log(outcome)
            //         done()
            //     })
            // })
        })
    })
    it('Check minimum value', function(done){
        // const resp = await Casino.deployed()
        // const val = await resp.checkPlayerExists(accounts[0]);
        // assert(val === false);
        // // val.stopWatching()
        // done()

        Casino.deployed().then(instance=>{
            instance.minimumBet().then(value=>{
                assert(parseInt(value) === 10);
                done()
            });
            // val.watch((err, result)=>{
            //     if (err){
            //         val.stopWatching();
            //         done(err);
            //     }

            //     instance.outcome().then(outcome=>{
            //         console.log(outcome)
            //         done()
            //     })
            // })
        })
    })

})