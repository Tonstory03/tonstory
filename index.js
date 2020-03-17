const fs = require('fs');
let objMaps = JSON.parse(fs.readFileSync("D:/app/100002New.geojson"));
let newLines =  objMaps.features
                        .filter(objMap=>objMap.geometry.type != "Point")
                        .map(objLine=>JSON.stringify(objLine))
                        .join("\n");
fs.writeFileSync("./line.geojson",newLines)