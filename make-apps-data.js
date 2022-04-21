import { readFileSync, writeFileSync } from "fs";

console.log("Start making data for offline apps");

const data = JSON.parse(readFileSync("www/data.json"));


for (const kind of ["starters", "examples"]) {

    const inputData = data.$pages.find(p => p.$name === kind);

    const outputData = [];

    const pages = inputData.$pages;
    
    pages.sort((a, b) => {

        const aa = a.author === "phasereditor2d"? 0 : 1;
        const bb = b.author === "phasereditor2d"? 0 : 1;

        return aa - bb;
    });

    for (const itemData of inputData.$pages) {

        const {
            $name,
            title,
            description,
            image,
            zip_url,
            tags,
            author } = itemData;

        outputData.push({
            path: `${kind}/${$name}`,
            title,
            description,
            image: `${kind}/${$name}/${image}`,
            zip_url,
            tags,
            author
        });
    }

    console.log(`Writing to www/${kind}-data.json`);
    writeFileSync(`www/${kind}-data.json`, JSON.stringify(outputData, null, 1))
}

