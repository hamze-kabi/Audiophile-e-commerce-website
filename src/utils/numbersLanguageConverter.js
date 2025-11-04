'use strict'

// it changes the language of numbers from Farsi to English and viceversa
export const numberLanguageCoverterFunc = function (act, num) {
  if (act === 'enToFa') {
    return enToFa(String(num))
  } else if (act === 'faToEn') {
    return faToEn(String(num))
  }
}

const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

function enToFa(str) {
  return str.toString().replace(/\d/g, (d) => persianDigits[d])
}

function faToEn(str) {
  return str.replace(/[۰-۹]/g, (d) => persianDigits.indexOf(d))
}
