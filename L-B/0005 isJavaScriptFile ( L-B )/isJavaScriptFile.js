function isJavaScript(file) {
    let trueName = [];
    for (const ele of file) {
        if (ele.endsWith(".js")){
            trueName.push(true)
        }
        else{
            trueName.push(false)
        }
    }
    return trueName;
}

const fileInputName = ["javascriptProject.js", "app.js","js.png","clock.java", "image.js"];
const fileName = isJavaScript(fileInputName);
console.log(fileName);