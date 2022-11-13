export const kanaToHira = (str: string): string => {
  return str.replace(/[\u30a1-\u30f6]/g, function (match) {
    const chr = match.charCodeAt(0) - 0x60
    return String.fromCharCode(chr)
  })
}
