function stringContain(s1, s2) {
    if (s1 === s2) {
        return true;
    }
    if (s2.includes(s1)) {
        return true;
    }
    let revStr = "";
    for (let i = s2.length - 1; i >= 0; i--) {
        revStr += s2[i]
    }

    if (revStr.includes(s1)) {
        return true;
    }
    return false
}

s1 = "cs";
s2 = "disco";
console.log(stringContain(s1, s2));

