const LOGIN_ERR_UNAUTHORIZED = "Вы ввели неправильный логин или пароль.";
const LOGIN_TOKEN_ERR = 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.';
const LOGIN_TOKEN_INCORRECT = 'При авторизации произошла ошибка. Переданный токен некорректен.';
const CONFLICT_ERR = 'Пользователь с таким email уже существует.';
const REGISTER_ERR = 'При регистрации пользователя произошла ошибка.';
const REGISTER_SUCCESS = 'Регистрация прошла успешно.';
const UPDATE_ERR = 'При обновлении профиля произошла ошибка.';
const UPDATE_SUCCESS = 'Профиль успешно обновлён.';
const SERVER_ERR = 'На сервере произошла ошибка.';
const LOADING_ERR = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';

const REG_EMAIL = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-].[a-zA-Z0-9-.]+$/

const CARDS_NUMBERS_DESKTOP = 4;
const CARDS_NUMBERS_TABLET_lARGE = 3;
const CARDS_NUMBERS_TABLET_SMALL = 2;
const CARDS_NUMBERS_MOBILE = 2;
const DURATION = 40;

module.exports = {
  LOGIN_ERR_UNAUTHORIZED,
  LOGIN_TOKEN_ERR,
  LOGIN_TOKEN_INCORRECT,
  CONFLICT_ERR,
  REGISTER_ERR,
  REGISTER_SUCCESS,
  UPDATE_ERR,
  UPDATE_SUCCESS,
  SERVER_ERR,
  LOADING_ERR,
  CARDS_NUMBERS_DESKTOP,
  CARDS_NUMBERS_TABLET_lARGE,
  CARDS_NUMBERS_TABLET_SMALL,
  CARDS_NUMBERS_MOBILE,
  REG_EMAIL,
  DURATION,
}
