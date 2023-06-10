# Cinematheque

## Реализованный функционал:

### React

- Функциональные компоненты c хуками в приоритете над классовыми. (Классовый только Error Boundaries)
- Есть разделение на умные([movieInfo](https://github.com/Kuljeanne/cinematheque/blob/main/src/components/pages/MovieInfo/MovieInfo.jsx), [Search](https://github.com/Kuljeanne/cinematheque/blob/main/src/components/ui/Search/Search.jsx) и др) и глупые([histiryItem](https://github.com/Kuljeanne/cinematheque/blob/main/src/components/ui/HistoryItem/HistoryItem.jsx), [SigninPage](https://github.com/Kuljeanne/cinematheque/blob/main/src/components/pages/SignInPage/SignInPage.jsx)) компоненты
- Есть рендеринг списков [PaginatedMovies](https://github.com/Kuljeanne/cinematheque/blob/main/src/components/elements/PaginatedMovies/PaginatedIMovies.jsx)
- Реализована форма [signUp](https://github.com/Kuljeanne/cinematheque/blob/main/src/components/elements/SignIn/SignIn.jsx), [logIn](https://github.com/Kuljeanne/cinematheque/blob/main/src/components/elements/Login/Login.jsx)
- Применение Контекст API [TelegramShare -feature flag](https://github.com/Kuljeanne/cinematheque/tree/main/src/context) - добавляет кнопку поделиться в [MovieInfo](https://github.com/Kuljeanne/cinematheque/blob/main/src/components/pages/MovieInfo/MovieInfo.jsx)
- Применение предохранителя [ErrorBoundery](https://github.com/Kuljeanne/cinematheque/blob/main/src/components/elements/ErrorBoundary/ErrorBoundary.jsx)
- Кастомный хук [hooks](https://github.com/Kuljeanne/cinematheque/tree/main/src/hooks)
- Хотя бы несколько компонентов используют PropTypes [MovieCard](https://github.com/Kuljeanne/cinematheque/blob/main/src/components/ui/MovieCard/MovieCard.jsx), [Logo](https://github.com/Kuljeanne/cinematheque/blob/main/src/components/ui/Logo/Logo.jsx), [HistiryItem](https://github.com/Kuljeanne/cinematheque/blob/main/src/components/ui/HistoryItem/HistoryItem.jsx) ...
- Поиск не триггерит много запросов к серверу- для этого используется кастомный хук [useDebounce](https://github.com/Kuljeanne/cinematheque/blob/main/src/hooks/useDebounce.js) и [useSearch](https://github.com/Kuljeanne/cinematheque/blob/main/src/hooks/useSearch.js)
- Есть применение lazy + Suspense [App](https://github.com/Kuljeanne/cinematheque/blob/main/src/rotes/AppRotes.jsx)

### Redux

- [Modern Redux with Redux Toolkit](https://github.com/Kuljeanne/cinematheque/tree/main/src/store)
- [Cлайсы](https://github.com/Kuljeanne/cinematheque/blob/main/src/store/userSlice/userSlice.js)
- [Кастомная мидлвара](https://github.com/Kuljeanne/cinematheque/blob/main/src/store/middlewares/saveUserData.js)
- [RTK Query](https://github.com/Kuljeanne/cinematheque/blob/main/src/store/api/api.js)
- [Используется Transforming Responses](https://github.com/Kuljeanne/cinematheque/blob/main/src/store/api/api.js)

### Дополнительно
- Авторизация реализована через localStorage
- API: [IMDb-api](https://imdb-api.com/)
