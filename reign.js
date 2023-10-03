const Reign = [
    { name: "Dynasty A", start: "MCMXCIV", end: "MMXVIII" }, 
    { name: "Dynasty B", start: "MCMLXXIX", end: "MCMLXXXV" } 
];

const longest = longestDynasty(Reign);

function convertYear(year) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let result = 0;

    for (let i = 0; i < year.length; i++) {
        const currentNumeral = romanNumerals[year[i]];
        const nextNumeral = romanNumerals[year[i + 1]];

        if (nextNumeral && currentNumeral < nextNumeral) {
            result += nextNumeral - currentNumeral;
            i++;
        } else {
            result += currentNumeral;
        }
    }

    return result;
}

function longestDynasty(Reign) {
    if (Reign.length === 0) return "No Data";

    let longestName = "";
    let longestDuration = 0;

    for (const dynasty of Reign) {
        const startYear = convertYear(dynasty.start);
        const endYear = convertYear(dynasty.end);

        if (startYear === "Invalid" || endYear === "Invalid") continue;

        const duration = endYear - startYear + 1;

        if (duration > longestDuration) {
            longestDuration = duration;
            longestName = dynasty.name;
        }
    }

    return longestName;
}

console.log("Longest reigning dynasty:", longest);
