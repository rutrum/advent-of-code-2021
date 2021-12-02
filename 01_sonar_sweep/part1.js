fs = require('fs')

fs.readFile("report.txt", "utf8", (err, data) => {
    if (err) exit(1);

    const lines = data.trim().split("\n")
    let total = 0;
    for (let i = 0; i < lines.length - 1; i++) {
        total += parseInt(lines[i]) < parseInt(lines[i+1])
    }
    console.log(total)
})
