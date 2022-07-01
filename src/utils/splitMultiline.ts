export function splitMultiline(string: string) {
  return string
    .split(/\\n/)
    .map((line) => line.trim())
    .filter((line) => line);
}
