# React + TypeScript + Vite

Este projeto foi realizado utilizando Node + React + Vite,utilizando para tal TypeScript

Para rodar,basta ter o node instalado no computador, fazer download ou clonar o repositório.
em seguida acesse a pasta baixada abra o prompt de comando nessa página e insira o comando
```
   npm install
```

Isso instalará todas as bibliotecas necessárias para o projeto rodar sem maiores problemas.
após a instalação, rode o comando:
```
   npm run dev
```
para iniciar o projeto e acesse-o no seu navegador utilizando a URL

[http://localhost:5173/](http://localhost:5173/)
## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
