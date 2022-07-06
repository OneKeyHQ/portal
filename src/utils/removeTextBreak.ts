export function removeTextBreak(text: string, keepSpace = false) {
  return text.replace(/\\n/g, keepSpace ? ' ' : '');
}
