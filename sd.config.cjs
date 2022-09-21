
const { formatHelpers } = require('style-dictionary');
const { fileHeader, formattedVariables } = formatHelpers;

module.exports = {
  source: ['sd-input/src/sd-input.json'],
  fileHeader: {
    autoGeneratedFileHeader: () => {
      return [`Do not edit directly, this file was auto-generated`];
    },
  },

  format: {
    myCssFormat: ({ dictionary, options = {}, file }) => {
      const selector = options.selector ? options.selector : `:root`;
      const { outputReferences } = options;
      dictionary.allTokens = dictionary.allTokens.filter(token => token.attributes.category !== 'tokenSetOrder');
      return fileHeader({ file }) +
        `${selector} {\n` +
        formattedVariables({ format: 'css', dictionary, outputReferences }) +
        `\n}\n`;
    }
  },



  platforms: {
    css: {
      transformGroup: "css",
      prefix: "figma",
      buildPath: "tokens/",
      files: [
        {
          destination: "variables.css",
          format: "myCssFormat",
        },
      ],
    },
  },
};
