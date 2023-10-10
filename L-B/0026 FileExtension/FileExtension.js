function extractFileExtension(fileName) {
    // Split the file name into an array of strings at the dot character.
    const splitFileName = fileName.split('.');

    // Check if the split file name array has more than one element.
    if (splitFileName.length > 1) {
        // Get the last element in the array, which is the file extension.
        const fileExtension = splitFileName.pop();

        // Return the file extension.
        return fileExtension;
    }
    // The file name does not have an extension, so return an empty string.
    return '';
}

module.exports = extractFileExtension;
