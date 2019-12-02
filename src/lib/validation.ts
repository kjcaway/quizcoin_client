export function isValidUserId(str: string) {
  const num = str.search(/[0-9]/g);
  const eng = str.search(/[a-z]/ig);
  const spc = /[~!@#$%^&*()_+|<>?:{}]/;

  if (((eng >= 0) || num > 0) && str.length >= 4 && !spc.test(str)) {
    return true;
  } else {
    return false;
  }
}

export function isValidPassword(str: string) {
  const num = str.search(/[0-9]/g);
  const eng = str.search(/[a-z]/ig);

  if (((eng > 0) || num > 0) && str.length >= 8) {
    return true;
  } else {
    return false;
  }
}

export function isValidName(str: string) {
  const spc = /[~!@#$%^&*()_+|<>?:{}]/;

  if (str.length >= 2 && !spc.test(str)) {
    return true;
  } else {
    return false;
  }
}