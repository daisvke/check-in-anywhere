export function checkName(c) {
  return /^[A-Z/ /'/-/]$/i.test(c)
}

export function checkAddress(c) {
    return /^[0-9/A-Z/ /'/-/./#/&/,/]$/i.test(c)
}

export function checkZipCode(c) {
    return /^[0-9/A-Z/ /-/]$/i.test(c)
}

export function checkPhoneNbr(c) {
    return /^[0-9/-/ /+/]$/i.test(c)
}

export function checkEmail(c) {
    return /^[0-9/-/_/@/./]$/i.test(c)
}

export function isNumeric(c) {
    return /^[0-9/]$/i.test(c)
}

export function checkDate(c) {
    return /^[0-9///]$/i.test(c)
}