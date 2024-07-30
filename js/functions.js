// Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее.

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

// Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.

function isPalindrome(string) {
  const normalizeString = string.toLowerCase().replaceAll(' ', '');
  let result = '';

  for (let i = 0; i < normalizeString.length; i++) {
    result = normalizeString[i] + result;
  }

  return result === normalizeString;
}

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN.

function getNumberOfString(string) {
  const normalizeString = isNaN(string) ? string : string.toString();
  let result = '';

  for (let i = 0; i < normalizeString.length; i++) {
    if (!isNaN(parseInt(normalizeString[i], 10))) {
      result += normalizeString[i];
    }
  }
  result = parseInt(result, 10);

  return result;
}
