import { TValidation } from './typing';

export enum FormFieldNames {
  lastName = 'lastName',
  firstName = 'firstName',
  middleName = 'middleName',
  login = 'login',
  phone = 'phone',
  email = 'email',
  password = 'password',
  passwordRepeat = 'repeatablePassword',
  message = 'message',
  checkbox = 'checkbox',
  daterange = 'daterange',
}

export enum validationTypes {
  name = 'name',
  phoneOrEmail = 'phoneOrEmail',
  phone = 'phone',
  email = 'email',
  password = 'password',
  comment = 'comment',
}

const regexpEmail = /^(?=^.{7,25}$)([A-Za-z\d._%+-]+)@([A-Za-z\d.-]+)\.([A-Za-z.-]+)$/;
const regexpPhone = /^\+(?=(?:\D*\d){11})[\d()\-\s]+$/;

// TODO скорректировать рег.выражения и сообщения об ошибке
export const validationPattern: Record<validationTypes, TValidation> = {
  name: {
    /* Строка состоит из кириллических букв
     * Содержит минимум 2 символа
     * */
    value: /^([А-яЁё]{2,})$/,
    message: 'Должно состоять из кириллицы, минимум 2 символа.',
  },
  phoneOrEmail: {
    /* Проверяет, что строка подходит под правила email ИЛИ телефона */
    value: new RegExp(`^((?=^[^@.]+$)(${regexpPhone.source})|(${regexpEmail.source}))$`),
    message:
      'Телефон должен начинаться с + и содержать минимум 11 цифр. Email должен быть корректным.',
  },
  phone: {
    /* Начинается с плюса
     * Далее проверяет, чтобы строка содержала 11 цифр (не обязательно подряд)
     * Далее проверяет, что срока состоит из цифр, скобок, дефиса и пробелов
     * */
    value: regexpPhone,
    message: 'Телефон должен начинаться с + и содержать минимум 11 цифр.',
  },
  email: {
    /* Вся длина строки от 7 до 25 символов
     * Начинается с латинских букв, цифр и символов ._%+-
     * Затем @
     * Затем латинские буквы и цифры
     * Затем точка
     * В конце латинские буквы
     */
    value: regexpEmail,
    message: 'Email должен быть корректным',
  },
  password: {
    /* Ищет хотя бы одну заглавную латинскую букву
     * Затем хотя бы одну строчную
     * Одну цифру
     * Один спецсимвол (не буква, не цифра)
     * И потом проверяет, чтобы строка была длиной от 8 до 25 символов
     */
    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,25}$/,
    message:
      'Пароль должен быть длиной от 8 до 25 символов, состоять из латинских букв, обязательно иметь заглавную и строчную буквы, а так же минимум одну цифру и один специальный символ.',
  },
  comment: {
    /* Строка состоит из букв и цифр, кириллицы, пробелов и спец. символов
     * Содержит от 2 до 100 символов
     * */
    value: /^[\wА-яЁё\s!"#$%&'()*+,/\\\-.:;<=>?@_`{|}~]{2,100}$/,
    message:
      'Комментарий должен быть длиной от 2 до 100 символов, состоять из букв, спец. символов, цифр и пробелов.',
  },
};
