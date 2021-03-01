const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(boolean = true) {
    this.boolean = boolean;
  }

  cipher(message, key){
    message = message.toLowerCase();
    key = key.toLowerCase();
    // объявление пеменных
    let arr_en = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', ' ', '!', '#', '$', '%', '&', '(',
    ')', '*', '+', ',', '-', '.', '0', '1', '2', '3', '4',
    '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?',
     '@', '[', ']', '^', '_', '{', '|', '}', '~', '/'
    ];
    let list_code = []; // лист кода строки message
    let key_code = []; // код ключа key 
    let newKey = ''; // новый ключ (для удлинения)
    let mlen = message.length; // длина строки message
    let klen = key.length; // длина ключа key
  
    // удлинение ключа до строки message
    let messageTrim = message.replace(/\s+/g, '').trim() // удаление всех пробелов в message
    let mTrimLen = messageTrim.length;
    for(let x = 0; x < mlen; x++) {
        newKey += key;
    } // 'key'*mlen
    let keys = ''; 
    keys = newKey.substr(0, mlen); // keykeykeyke
    let keyslen = keys.length; // длина ключа как у message
    //console.log(keyslen)
  
    // создание массива с кодом символов строки message
    for(let w = 0; w < mlen; w++) {
      for(let i = 0; i < arr_en.length; i++){
        if (message[w].toLowerCase() == arr_en[i]){
          list_code.push(message.charCodeAt(w));
        }
      }
    }
    // console.log(list_code)
    
    // создание массива с кодом символов ключа keys
    for(let w = 0; w < keyslen; w++) {
      for(let i = 0; i < arr_en.length; i++){
        if (keys[w].toLowerCase() == arr_en[i]){
          key_code.push(keys.charCodeAt(w));
        }
      }
    }
    //console.log(key_code)
  
    // нахождение по таблице символы в виде кода
    let count = 0; // счётчик для не букв
    let go = 0; // буква в символьном коде ASCII
    let cod = []; // array с кодом символов
  
    for(let v = 0; v < keyslen; v++) {
      //if для не букв, пушим их
      if (list_code[v] >= 32 && list_code[v] <= 64 || 
          list_code[v] >= 91 && list_code[v] <= 96 ||
          list_code[v] >= 123 && list_code[v] <= 126) {
        cod.push(list_code[v]);
        continue;
      } 
      go = (((list_code[v] - 97)+ (key_code[count % keyslen] -97)) % 26) + 97;
      cod.push(go);
      count++;
    }
    // console.log(cod)
  
    // кодовое слово
    let lenCod = cod.length; // 11
    let codeStr = ''; // строка с зашифрованым сообщением
    for (let j = 0; j < lenCod; j++) {
      // перевод символов ASCII в строку
      codeStr += String.fromCharCode(cod[j]);
    }
    codeStr = codeStr.toUpperCase(); // не забываем делать большие буквы
    //console.log(codeStr)
    return codeStr;
  }

  encrypt(message, key) {
    if(this.boolean){
      return this.cipher(message, key);
    } else {
      return this.cipher(message, key).split("").reverse().join("");
    }
  }    

  decipher(message, key) {
  message = message.toLowerCase();
  key = key.toLowerCase();
  // объявление пеменных
  let arr_en = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', ' ', '!', '#', '$', '%', '&', '(',
    ')', '*', '+', ',', '-', '.', '0', '1', '2', '3', '4',
    '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?',
     '@', '[', ']', '^', '_', '{', '|', '}', '~', '/'
    ];
  let list_code = []; // лист кода строки message
  let key_code = []; // код ключа key 
  let newKey = ''; // новый ключ (для удлинения)
  let mlen = message.length; // длина строки message
  let klen = key.length; // длина ключа key

  // удлинение ключа до строки message
  let messageTrim = message.replace(/\s+/g, '').trim() // удаление всех пробелов в message
  let mTrimLen = messageTrim.length;
  for(let x = 0; x < mlen; x++) {
      newKey += key;
  } // 'key'*mlen
  let keys = ''; 
  keys = newKey.substr(0, mlen); // keykeykeyke
  let keyslen = keys.length; // длина ключа как у message
  //console.log(keyslen)

  // создание массива с кодом символов строки message
  for(let w = 0; w < mlen; w++) {
    for(let i = 0; i < arr_en.length; i++){
      if (message[w].toLowerCase() == arr_en[i]){
        list_code.push(message.charCodeAt(w));
      }
    }
  }
  //console.log(list_code)
  
  // создание массива с кодом символов ключа keys
  for(let w = 0; w < keyslen; w++) {
    for(let i = 0; i < arr_en.length; i++){
      if (keys[w].toLowerCase() == arr_en[i]){
        key_code.push(keys.charCodeAt(w));
      }
    }
  }
  //console.log(key_code)
  
  // нахождение по таблице символы в виде кода
  let count = 0; // счётчик для не букв
  let go = 0; // буква в символьном коде ASCII
  let cod = []; // array с кодом символов

    for(let v = 0; v < keyslen; v++) {
      //if для не букв, пушим их
      if (list_code[v] >= 32 && list_code[v] <= 64 || 
          list_code[v] >= 91 && list_code[v] <= 96 ||
          list_code[v] >= 123 && list_code[v] <= 126) {
        cod.push(list_code[v]);
        continue;
      } 
      go = (((list_code[v] - 97) -  (key_code[count % keyslen] -97) + 26) % 26) + 97;
      cod.push(go);
      count++;
    }
  //console.log(cod)

  // раскодированое слово
  let lenCod = cod.length; // 11
  let codeStr = ''; // строка с расшифрованым сообщением
  for (let j = 0; j < lenCod; j++) {
    // перевод символов ASCII в строку
    codeStr += String.fromCharCode(cod[j])
  }
  codeStr = codeStr.toUpperCase(); // не забываем делать большие буквы
  //console.log(codeStr)
  return codeStr
  }

  decrypt(message, key) {
    if(!this.boolean){
      return this.decipher(message, key).split("").reverse().join("");
    } else {
      return this.decipher(message, key);
    }
  }
}

module.exports = VigenereCipheringMachine;
