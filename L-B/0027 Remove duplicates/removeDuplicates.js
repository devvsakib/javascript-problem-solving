function removeDuplicates(input) {
    let unique = [];
    for (let i = 0; i < input.length; i++) {
        if (!unique.includes(input[i])) {
            unique.push(input[i]);
        }
    }
    if(typeof(input) === "string"){
       unique = unique.toString().replace(/,/g, '');
    }
    console.log(unique);
    return unique;
}

removeDuplicates([2, 4, 8, 4, 2, 6, 9, 2, 6, 8, 10]);
removeDuplicates([1, 1, 1, 4, 0, 6, -2, 2, 6, 7, 10]);
removeDuplicates("zoom");
removeDuplicates("hello world");