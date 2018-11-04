export default function replaceEllipsis (str, n) {
  if (typeof str !== 'string') return str
  if (str.length < n) return str
  return `${str.slice(0, str)}…`
}
