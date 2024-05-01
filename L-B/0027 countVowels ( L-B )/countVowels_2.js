function countVowels(str) {

    str = str.toLowerCase();

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let vowelCount = 0;

    for (let i = 0; i < str.length; i++) {

        if (vowels.includes(str[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}