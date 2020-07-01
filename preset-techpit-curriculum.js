const { moduleInterop } = require('@textlint/module-interop');

module.exports = {
  rules: {
    'preset-ja-technical-writing': moduleInterop(require('textlint-rule-preset-ja-technical-writing')),
    'prh': moduleInterop(require('textlint-rule-prh')),
    'spellcheck-tech-word': moduleInterop(require('textlint-rule-spellcheck-tech-word')),
  },
  rulesConfig: {
    'preset-ja-technical-writing': true,
    'prh': {
      rulePaths: ['./prh-rules.yml']
    },
    'spellcheck-tech-word': true,
  },
};
