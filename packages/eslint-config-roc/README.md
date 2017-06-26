# eslint-config-roc

An ESLint configuration specific for Roc projects integrating with [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import).

## Install

```bash
$ npm install --save-dev eslint-config-roc
```

## Why

Addresses two rules that might be problematic when using Roc together with [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import), used by the very propular [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) and [`eslint-config-airbnb-base`](https://www.npmjs.com/package/eslint-config-airbnb-base).

- `no-unresolved`
- `no-extraneous-dependencies`

## How to use

Add `"extends": "roc"` to your .eslintrc

__Example__  
```json
{
  "extends": [
    "airbnb",
    "roc"
  ]
}
```
Used here together with [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb).

## Special note about `import/core-modules`

This configuration uses `import/core-modules` internally to work around a missing feature in `eslint-plugin-import`, see [eslint-plugin-import#479](https://github.com/benmosher/eslint-plugin-import/issues/479) for more information.

This means that if a project or a configuration uses this configuratiuon the projects will need to manually add Roc's `core-modules`.

This can be done using `eslint-config-roc/core-modules` that exports an array of core modules that Roc uses to avoid false warnings about `no-extraneous-dependencies`. Another alternative is to turn of that rule altogether.
