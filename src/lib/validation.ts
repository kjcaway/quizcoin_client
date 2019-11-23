export function isValidUserId(str: string){
  const num = str.search(/[0-9]/g);
  const eng = str.search(/[a-z]/ig);

  if( ((eng > 0) ||  num > 0) && str.length >= 4){
    return true;
  } else {
    return false;
  }
}