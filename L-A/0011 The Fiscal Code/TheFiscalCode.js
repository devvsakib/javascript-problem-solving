function fiscalCode(data) {
  const monthsConversion = {
    '01': 'A', '02': 'B', '03': 'C', '04': 'D', '05': 'E', '06': 'H',
    '07': 'L', '08': 'M', '09': 'P', '10': 'R', '11': 'S', '12': 'T'
  };

  // Helper function to generate code for names and surnames
  function generateCode(name, isSurname) {
    const vowels = 'AEIOU';
    let consonants = '';
    let code = '';

    // Helper function to check if a character is a consonant
    function isConsonant(char) {
      return /[BCDFGHJKLMNPQRSTVWXYZ]/.test(char);
    }

    for (let i = 0; i < name.length && consonants.length < 3; i++) {
      const char = name[i].toUpperCase();
      if (isConsonant(char)) {
        consonants += char;
      }
    }

    if (consonants.length < 3) {
      for (let i = 0; i < name.length && consonants.length < 3; i++) {
        const char = name[i].toUpperCase();
        if (vowels.includes(char)) {
          consonants += char;
        }
      }
    }

    if (consonants.length < 3) {
      consonants += 'X'.repeat(3 - consonants.length);
    }

    code = consonants;

    if (isSurname) {
      code += 'XXX';
    } else {
      code += name.length >= 3 ? name[0] + name[2] + name[3] : name + 'XX';
    }

    return code;
  }

  const surnameCode = generateCode(data.surname, true);
  const nameCode = generateCode(data.name, false);

  const year = data.dob.split('/')[2].slice(-2);
  const month = monthsConversion[data.dob.split('/')[1]];
  const day = (data.gender === 'F' ? 40 + parseInt(data.dob.split('/')[0]) : parseInt(data.dob.split('/')[0])).toString().padStart(2, '0');

  return `${surnameCode}${nameCode}${year}${month}${day}`;
}

// Examples
console.log(fiscalCode({
  name: "Matt",
  surname: "Edabit",
  gender: "M",
  dob: "1/1/1900"
})); // ➞ "DBTMTT00A01"

console.log(fiscalCode({
  name: "Helen",
  surname: "Yu",
  gender: "F",
  dob: "1/12/1950"
})); // ➞ "YUXHLN50T41"

console.log(fiscalCode({
  name: "Mickey",
  surname: "Mouse",
  gender: "M",
  dob: "16/1/1928"
})); // ➞ "MSOMKY28A16"
