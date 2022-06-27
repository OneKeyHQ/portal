const jsRules = {
  // eslint-disable-next-line global-require
  'prettier/prettier': ['error', require('./.prettierrc.js')],
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',
  'no-shadow': 'off',
  'import/no-extraneous-dependencies': 'off',
  'no-restricted-exports': 'off',
  'func-names': 'off',
  'class-methods-use-this': 'off',
  'import/extensions': 'off',
  'react/function-component-definition': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/prop-types': 'off',
};
const tsRules = {
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': 'error',
  '@typescript-eslint/no-unused-vars': 'off',
  '@typescript-eslint/no-use-before-define': ['error'],
  '@typescript-eslint/no-shadow': ['error'],
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  'sort-imports': [
    'error',
    {
      ignoreMemberSort: false,
      ignoreDeclarationSort: true,
    },
  ],
  'import/order': [
    'error',
    {
      groups: [
        'builtin',
        'internal',
        'index',
        'external',
        'parent',
        'sibling',
        'object',
        'type',
      ],
      pathGroups: [
        {
          pattern: 'react',
          group: 'builtin',
          position: 'before',
        },
        {
          pattern: '@onekeyhq/**',
          group: 'external',
          position: 'after',
        },
      ],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      'newlines-between': 'always',
      pathGroupsExcludedImportTypes: ['builtin'],
      warnOnUnassignedImports: true,
    },
  ],
};
module.exports = {
  plugins: ['unused-imports'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    es6: true,
    webextensions: true,
    serviceworker: true,
    worker: true,
  },
  globals: {
    PUBLIC_URL: true,
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.text-js'],
      extends: ['wesbos'],
      rules: {
        ...jsRules,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['wesbos/typescript'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        ...jsRules,
        ...tsRules,
      },
    },
  ],
};
