# Создание и настройка React-App

## 1. Создать репозиторий и склонировать на ПК

## 2. Установить React application

Открыть терминал в папке проекта и установить `react-app`

```powershell
npx create-react-app .
```

## 3. Удалить ненужные файлы

### 3.1 `public/index.html`

В папке `public` оставить только `index.html`. Удалить код из `index.html`,
создать базовую разметку с помощью Emmet.

Разметка может выглядеть так:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### 3.2 `/src`

В папке `/src` достаточно оставить `index.js`, `App.js`, `index.css`, `App.css`

В папке `/src` создать папку `components` для размещения будущих компонентов.

### 3.3 `index.js`

В `index.js` достаточно оставить следующий код:

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
```

### 3.4 `App.js`

В `App.js` достаточно оставить следующий код:

```js
// App.js
import './App.css';

function App() {
  return <div className="App">TEST</div>;
}

export default App;
```

### 3.4 `App.css`

В `App.css` удалить ненужные стили.

## 4. Запустить сервер проверить, нет ли ошибкок.

```powershell
npm start
```

## 5. Настройка pre-commit хуков

### 5.1 Установка зависимостей

Установить в проект следующие пакеты.

`Примечание:` react-app корректно работает с более старой версией
`eslint 7.11.0`

```powershell
npm install --save-dev prettier eslint@7.11.0
```

### 5.2 Инициализация lint-staged и husky

Пользователям `MacOS` и `Linux` систем необходимо выполнить в терминале
следующую команду. Она установит и настроит husky и lint-staged в зависимости от
инструментов качества кода из зависимостей проекта в package.json.

```powershell
npx mrm lint-staged
```

Пользователям `Windows` необходимо выполнить следующую команду. Она делает тоже
самое.

```powershell
npx mrm@2 lint-staged
```

### 5.3 Настройка в VSCode

Провреить наличие следующих раширений:

`Prettier - Code formatter`

`Formatting Toggle`

`ESLint`

Можно добавить настройки `Prettier`, создав файл `.prettierrc.yaml` в корневой
папке проекта. Можно добавить следующие настройки.

```yaml
printWidth: 100
useTabs: false
semi: true
singleQuote: true
trailingComma: 'all'
bracketSpacing: true
arrowParens: 'avoid'
proseWrap: 'always'
```

Открыть настройки `VSCode` и проверить следующее:

`autoSave`

![Превью настроек VSCode](./README/1.png)

`formatOnSave`

![Превью настроек VSCode](./README/2.png)

`codeActionsOnSave`

![Превью настроек VSCode](./README/3.png)

Или же добавить код в файл `settings.json`

`Ctrl + Shift + P` => `settings.json` => `Open Settings (JSON)`

```json
{
  "files.autoSave": "onFocusChange",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 6. Настройка Деплоя

[Ссылка на create-react-app](https://create-react-app.dev/docs/deployment#github-pages)

В `package.json` добавить следующию строку:

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория"
```

Сделать билд через терминал:

```powershell
npm run build
```

Установить пакет `gh-pages`

```powershell
npm install --save gh-pages
```

В `package.json` в `scripts` добавить 2 скрипта:

```json
  "scripts": {
    // добавить к остальным скриптам
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
```

Запустить деплой

```powershell
npm run deploy
```

Скрипт `predeploy` запускать не нужно, он выполнится автоматически. Будет
создана ветка `gh-pages`, выполнен автоккоммит и её пуш в ваш репозиторий на
GitHub.сom, в настройках GitHub Pages автоматически будет подставлена ветка
`gh-pages`, достаточно взять ссылку. Сам проект как обычно коммитим, пушим,
чтобы код отразился в ветке `main`.

## Если у кого-то не получилось настроить, я не виноват :)

### Не забудьте

## 7. Дальнейшая работа с проектом

Работаем, делаем коммиты и пушим на `GitHub` как обычно. Страница автоматически
не обновится. Если нужно залить на GitHub Pages, делаете повторно
`npm run deploy`. Или же можете настроить автодеплой. Меня этот вопрос на данный
момент не волнует.

## Дополнительные пакеты

### Nano ID

Генератор уникальных ID для JavaScript

[ссылка на пакет](https://github.com/ai/nanoid/blob/HEAD/README.ru.md#nano-id)

`npm install --save nanoid`

```js
import { nanoid } from 'nanoid';
```

### Classnames

Простая утилита JavaScript для условного объединения classNames вместе

[ссылка на пакет](https://www.npmjs.com/package/classnames)

[ссылка на лекцию](https://www.youtube.com/watch?v=2tPxoJxaCes&t=3255s)

`npm install classnames`

```js
import classNames from 'classnames';
```

### node-sass

Для того, чтобы подключить к React проекту предпроцессор Sass достаточно
воспользоваться пакетом node-sass. Данный пакет позволяет без дополнительных
установок добавить Sass в ваш React проект. Для его установки достаточно
воспользоваться командой

`npm install node-sass`

### Emotion

Виблиотека для стилизации JS

[ссылка на пакет](https://emotion.sh/docs/introduction)

[ссылка на лекцию](https://www.youtube.com/watch?v=Itl8A6g4p4Y&ab_channel=GoIT)

`npm i @emotion/styled @emotion/react`

```js
import styled from '@emotion/styled';
```

### React Icons

Иконки для React

[ссылка на пакет](https://react-icons.github.io/react-icons)

`npm install react-icons --save`

### React-toastify

[ссылка на пакет](https://github.com/fkhadra/react-toastify)

[ссылка на лекцию](https://www.youtube.com/watch?v=xoG3l2PgiYY&t=1595s)

`npm install --save react-toastify`

```js
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast('Wow so easy!');

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}
```

### React Loader Spinner

[ссылка на пакет](https://github.com/mhnpd/react-loader-spinner)
