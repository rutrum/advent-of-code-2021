fs = require('fs')

fs.readFile("report.txt", "utf8", (err, data) => {
    if (err) exit(1);

    const lines = data.trim().split("\n")
    let sums = [];

    for (let i = 0; i < lines.length - 2; i++) {
        sums.push(parseInt(lines[i]) + parseInt(lines[i+1]) + parseInt(lines[i+2]));
    }

    let total = 0;
    for (let i = 0; i < sums.length - 1; i++) {
        total += sums[i] < sums[i+1]
    }
    console.log(total)
})
