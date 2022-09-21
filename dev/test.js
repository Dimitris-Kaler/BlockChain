const Blockchain = require('./blockchain');



const bitcoin=new Blockchain();
console.log(bitcoin);
const previousBlockHash="ASFNSJDG74330659SKJDVBSKDJNGVKJSD"
const currentBlockData=[
    {
        amount:10,
        sender:"alexgeuihge40ti04",
        recepient:'90SIDVBFIJVGNE0I0DJVB'
    }, {
        amount:10000,
        sender:"alexdvgdfg13",
        recepient:'90SIDVBFIJdvdsVGNE0I0DJV'
    }, {
        amount:10,
        sender:"asasfgtrjhty4657",
        recepient:'90SID24345JVGNE0I'
    }
]
// bitcoin.createNewBlock(2389,"OI09087BAEF","90ICBIWE243")
// bitcoin.createNewTransaction(100,'ALEX89ibwivfwe2324','JEN224234dajfbsjifb')
// bitcoin.createNewBlock(2289,"OFGDFHDFH","9994534GDRFG")
// bitcoin.createNewTransaction(150,'ALEX89ibwivfwe2324','JEN224234dajfbsjifb')
// bitcoin.createNewTransaction(10,'ALEX89ibwivfwe2324','JEN224234dajfbsjifb')
// bitcoin.createNewTransaction(1000,'ALEX89ibwivfwe2324','JEN224234dajfbsjifb')
// bitcoin.createNewBlock(89,"OFGDFHDFH","9994534GDRsdgerh")

console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,16781));


console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData))
// console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce))