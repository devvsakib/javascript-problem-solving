function pathDataParser(data) {
  const commands = [];
  let currentCommand = null;
  let currentParams = [];
  let currentParam = '';

  for (let i = 0; i < data.length; i++) {
    const char = data[i];

    if (char === ' ' || char === ',') {
      if (currentParam !== '') {
        currentParams.push(parseFloat(currentParam));
        currentParam = '';
      }
    } else if (/[a-zA-Z]/.test(char)) {
      if (currentCommand !== null) {
        commands.push({ command: currentCommand, parameters: currentParams });
        currentParams = [];
      }
      currentCommand = char;
    } else {
      currentParam += char;
    }
  }

  if (currentCommand !== null) {
    if (currentParam !== '') {
      currentParams.push(parseFloat(currentParam));
    }
    commands.push({ command: currentCommand, parameters: currentParams });
  }

  return commands;
}

// Examples
console.log(pathDataParser(""));
console.log(pathDataParser("M 0 0"));
console.log(pathDataParser("M 1 1.5 L 0 1.5 0 0.5 1 0.5 0.5 0 0 0.5 1 1.5 1 0.5 0 1.5"));
console.log(pathDataParser("M 0,1 h 1 v -1 h 1 v 1 h 1 C 2,1 3,3 1.5,3 C 0,3 1,1 0,1 z"));
