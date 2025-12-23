function lengthConverter(length, fromUnit, toUnit) {
    const units = {
        "meters": 1,
        "kilometers": 1000,
        "centimeters": 0.01,
        "millimeters": 0.001,
        "inches": 0.0254,
        "feet": 0.3048,
        "yards": 0.9144,
        "miles": 1609.34
    };

    if (!units[fromUnit] || !units[toUnit]) {
        throw new Error("Invalid unit");
    }

    const meters = length * units[fromUnit];
    console.log((meters / units[toUnit]).toFixed(2));
    return (meters / units[toUnit]).toFixed(2);
}

lengthConverter(100, "meters", "kilometers");
lengthConverter(5, "miles", "feet");
lengthConverter(12, "inches", "centimeters");
lengthConverter(2500, "centimeters", "meters");
lengthConverter(3, "kilometers", "miles");
lengthConverter(10, "feet", "yards");
lengthConverter(5000, "millimeters", "meters");
lengthConverter(2, "yards", "inches");