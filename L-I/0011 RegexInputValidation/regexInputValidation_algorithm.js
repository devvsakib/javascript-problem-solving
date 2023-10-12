function validateInput(input, type) {
  // Create a regular expression for the given type
  const regex = {
    "email": /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    "name": /^[A-Z][A-Za-zéç]+(\s[A-Z][A-Za-zéç]+)*$/,
    "address": /^[A-Za-z0-9éç°',]+(\s[A-Za-z0-9éç°',]+)*$/,
    "zip code": /^\d{5}(-\d{4})?$/,
    "tel": /^\d{3}-\d{3}-\d{4}$/
  };

  // Test the input against the regular expression
  return regex[type].test(input);
}

module.exports = validateInput;