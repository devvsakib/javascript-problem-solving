const revMyString = str => {
    let revStr = "";

    const arrStr = str.split("")

    for (let i = arrStr.length - 1; i >= 0; i--) revStr += arrStr[i]


    return revStr;

}

console.log(revMyString("he"));