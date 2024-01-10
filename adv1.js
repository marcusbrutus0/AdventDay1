const fs = require('node:fs');

function partOne(file){
    const lines = fs.readFileSync(file , 'utf8').trim().split("\n");
    
    const values = lines.map((line) => {
        
        let first = line.split('').find((v) => !Number.isNaN(Number(v)));
        let last  = line.split('').reverse().find((v) => !Number.isNaN(Number(v)));
        return Number(first + last);
        
    });
    
    return values.reduce((s,v) => s + v);
}

partOne('sample.txt');
