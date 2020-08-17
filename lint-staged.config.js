module.exports = {
  '*.{vue,js}': [
    'prettier --write',
    'yarn lint --fix --max-warnings 0 --ignore-pattern "!.eslintrc.js',
    'git add',
  ],
  '*.{scss,json,yml}': ['prettier --write', 'git add'],
}
