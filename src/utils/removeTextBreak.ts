export function removeTextBreak(text: string) {
  return text.replace(/\\n/g, ' ');
}
