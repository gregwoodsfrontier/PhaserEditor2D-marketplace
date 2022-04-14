import { readFileSync, writeFileSync } from "fs";

console.log("Start making data for offline apps");

const data = JSON.parse(readFileSync("www/data.json"));


for (const kind of ["starters", "examples"]) {

    const inputData = data.$pages.find(p => p.$name === kind);

    const outputData = [];

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

