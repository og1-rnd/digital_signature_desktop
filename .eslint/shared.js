const PASCAL_CASE_REGEX = '([A-Z]+([A-Za-z0-9]+)*([A-Z])?)';
const PASCAL_CASE_REGEX_STRICT = '(([A-Z][a-z0-9]+)(([A-Z0-9][a-z0-9]+))*([A-Z])?)';
const CAMEL_CASE_REGEX = '([a-z]+([A-Za-z0-9]+)*([A-Z])?)';
const CAMEL_CASE_REGEX_STRICT = '([a-z]+(([A-Z0-9][a-z0-9]+))*([A-Z])?)';
const UPPER_CASE_REGEX = '([A-Z]+(([A-Z0-9]+)|_)*([A-Z])?)';
const CLASS_PREFIX_REGEX = '(EX_)';
const DECORATOR_PREFIX_REGEX = '(D_)';

module.exports = {
  plugins: ['react', '@typescript-eslint', 'prettier', 'jsdoc'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': [
      'node_modules',
      'node_modules/@types',
      'release/app/node_modules',
      'release/app/node_modules/@types',
    ],
  },
  rules: {
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-uses-react': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-curly-brace-presence': ['off'],
    'react/no-unescaped-entities': ['off'],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    // ругается если в key элемента передается index
    'react/no-array-index-key': ['warn'],
    // разрешает использовать <></> с одним элементом
    'react/jsx-no-useless-fragment': ['off'],

    'class-methods-use-this': ['off'],
    'consistent-return': ['off'],
    'no-underscore-dangle': ['warn'],
    'no-unsafe-optional-chaining': ['off'],
    'no-restricted-syntax': ['off'],
    // предупреждение если в выражении больше 1 тернарной операции
    'no-nested-ternary': ['warn'],
    'no-param-reassign': ['off'],
    'no-throw-literal': ['off'],
    'no-return-assign': ['off'],
    'no-plusplus': ['off'],
    'no-continue': ['off'],
    'no-void': ['off'],
    'guard-for-in': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'import/prefer-default-export': ['off'],
    '@typescript-eslint/no-throw-literal': ['off'],

    // Не интерактивный элемент не поддерживает обработчики событий, например если на div висит onClick
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    // Статические элементы HTML не имеют семантического значения.
    'jsx-a11y/no-static-element-interactions': ['off'],
    // Принудительное исполнение onClick сопровождается хотя бы одним из следующего: onKeyUp, onKeyDown, onKeyPress.
    'jsx-a11y/click-events-have-key-events': ['off'],
    // <a/> элемент с действительным href атрибутом формально определяется как представляющий гиперссылку
    'jsx-a11y/anchor-is-valid': ['off'],

    // требует деструктуризацию для объектов
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
    ],

    // правила для наименования переменных классов и тд
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      // класс с префиксом $ и дальше в PascalCase - $PascalCase
      {
        selector: 'class',
        format: ['PascalCase'],
        prefix: ['$'],
      },
      // classProperty принимает либо EX_PascalCase или _camelCase или camelCase
      {
        selector: 'classProperty',
        format: null,
        custom: {
          regex: `^((${CLASS_PREFIX_REGEX}?${PASCAL_CASE_REGEX})|(_?${CAMEL_CASE_REGEX}))$`,
          match: true,
        },
      },
      {
        selector: 'property',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
        leadingUnderscore: 'allowDouble',
      },
      // у интерфейсов должен быть префикс I
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'],
      },
      // у типов должен быть префикс T
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        prefix: ['T'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
      },
      // переменные: camelCase, PascalCase, UPPER_CASE, EX_PascalCase(экземпляр класса)
      {
        selector: 'variable',
        format: null,
        custom: {
          regex: `^(${PASCAL_CASE_REGEX}|${CAMEL_CASE_REGEX}|${UPPER_CASE_REGEX}|(${CLASS_PREFIX_REGEX}?${PASCAL_CASE_REGEX}))$`,
          match: true,
        },
      },
      {
        selector: 'enum',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
      },
      // function: camelCase, D_camelCase(декораторы)
      {
        selector: 'function',
        format: null,
        custom: {
          regex: `^(${DECORATOR_PREFIX_REGEX}?${CAMEL_CASE_REGEX})$`,
          match: true,
        },
      },
      // у булевых переменных должен быть один из перечисленных префиксов
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: [
          'is',
          'should',
          'has',
          'can',
          'did',
          'will',
          'default',
          'no',
          'need',
          'active',
          'selected',
          'checked',
          'disabled',
          'required',
          'show',
        ],
      },
    ],

    // no-restricted-globals
    // Отключил требование такой формы Number.isNaN/isFinite, на что это может повлиять?
    // Global isNaN приводит нечисловые значения к числам,
    // возвращая true для всего, что приводит к NaN.
    // Если такое поведение желательно, сделайте его явным.
    // bad
    // isNaN('1.2'); // false
    // isNaN('1.2.3'); // true
    // good
    // Number.isNaN('1.2.3'); // false
    // Number.isNaN(Number('1.2.3')); // true
    'no-restricted-globals': ['off'],

    // определяем для чего требуется jsdoc
    // если функция меньше 5 строк то jsdoc не обязателен
    'jsdoc/require-jsdoc': [
      'error',
      {
        contexts: [
          { context: 'ArrowFunctionExpression', minLineCount: 5, inlineCommentBlock: true },
          { context: 'FunctionDeclaration', minLineCount: 5, inlineCommentBlock: true },
          { context: 'FunctionExpression', minLineCount: 5, inlineCommentBlock: true },
        ],
        require: {
          FunctionDeclaration: true,
          MethodDefinition: false,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],

    // так как в проекте typescript
    // отключаем требование типов параметров
    'jsdoc/no-types': 1,
    'jsdoc/require-param-type': 0,
    'jsdoc/require-property-type': 0,
    'jsdoc/require-returns-type': 0,

    // отключаем требование returns и описание параметров
    'jsdoc/require-returns': 0,
    'jsdoc/require-returns-check': 0,
    'jsdoc/require-param-description': 0,

    'jsdoc/require-param': [2, { unnamedRootBase: ['prm', 'arg'] }],
    'jsdoc/require-description': [
      1,
      {
        descriptionStyle: 'tag',
      },
    ],

    'jsdoc/sort-tags': 1,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // The following rules are enabled in Airbnb config, but are already checked (more thoroughly) by the TypeScript compiler
        // Some of the rules also fail in TypeScript files, for example: https://github.com/typescript-eslint/typescript-eslint/issues/662#issuecomment-507081586
        // Rules are inspired by: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
        'constructor-super': 'off',
        'getter-return': 'off',
        'no-const-assign': 'off',
        'no-dupe-args': 'off',
        'no-dupe-class-members': 'off',
        'no-dupe-keys': 'off',
        'no-func-assign': 'off',
        'no-import-assign': 'off',
        'no-new-symbol': 'off',
        'no-obj-calls': 'off',
        'no-redeclare': 'off',
        'no-setter-return': 'off',
        'no-this-before-super': 'off',
        'no-undef': 'off',
        'no-unreachable': 'off',
        'no-unsafe-negation': 'off',
        'valid-typeof': 'off',
        // The following rules are enabled in Airbnb config, but are recommended to be disabled within TypeScript projects
        // See: https://github.com/typescript-eslint/typescript-eslint/blob/13583e65f5973da2a7ae8384493c5e00014db51b/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import
        'import/named': 'off',
        'import/no-named-as-default-member': 'off',
        // Disable `import/no-unresolved`, see README.md for details
        'import/no-unresolved': 'off',

        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              String: false,
              Boolean: false,
              Number: false,
              Symbol: false,
              '{}': false,
              Object: false,
              object: false,
              Function: false,
            },
            extendDefaults: true,
          },
        ],
      },
    },
  ],
};
