# Cinematheque

## Реализованный функционал:

### React

- Функциональные компоненты c хуками в приоритете над классовыми. (Классовый только Error Boundaries)
- Есть разделение на умные и глупые компоненты
- Есть рендеринг списков [PaginatedMovies](https://github.com/Kuljeanne/cinematheque/blob/main/src/components/elements/PaginatedMovies/PaginatedIMovies.jsx)
- Реализована форма [signUp](https://github.com/Kuljeanne/cinematheque/blob/main/src/components/elements/SignIn/SignIn.jsx), [logIn](https://github.com/Kuljeanne/cinematheque/blob/main/src/components/elements/Login/Login.jsx)
- Применение Контекст API [TelegramShare -feature flag] (https://github.com/Kuljeanne/cinematheque/tree/main/src/context) - добавляет кнопку поделиться в [MovieInfo](https://github.com/Kuljeanne/cinematheque/blob/main/src/components/pages/MovieInfo/MovieInfo.jsx)
- Применение предохранителя [ErrorBoundery](https://github.com/Kuljeanne/cinematheque/blob/main/src/components/elements/ErrorBoundary/ErrorBoundary.jsx)
- Кастомный хук [hooks] (https://github.com/Kuljeanne/cinematheque/tree/main/src/hooks)
- Хотя бы несколько компонентов используют PropTypes [](), []()
- Поиск не должен триггерить много запросов к серверу- для этого используется кастомный хук [useDeboumce](https://github.com/Kuljeanne/cinematheque/blob/main/src/hooks/useDebounce.js) и [useSearch](https://github.com/Kuljeanne/cinematheque/blob/main/src/hooks/useSearch.js)
- Есть применение lazy + Suspense [App](https://github.com/Kuljeanne/cinematheque/blob/main/src/rotes/AppRotes.jsx)

### Redux

- Используем Modern Redux with Redux Toolkit
- Используем слайсы
- Есть хотя бы одна кастомная мидлвара
- Используется RTK Query
- Используется Transforming Responses
