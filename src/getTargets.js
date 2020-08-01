const data = require("./data.json");
const fs = require("fs");

let targets = [];
let targets0 = [];

for (let a = 0; a < data.length; a++) {
    if (data[a].targets)
        data[a].targets.target.forEach((target) => {
            id = target.id;
            if (!targets0.includes(id)) {
                targets0.push(id);
                targets.push(target);
                console.log(target.id);
            }
        });
    let strout = JSON.stringify(targets);
    fs.writeFileSync("./targets.json", strout);
}
