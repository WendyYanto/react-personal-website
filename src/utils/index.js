export function formatToKebabCase(value) {
  if (!value) return '';
  return value.toLowerCase().trim().split(' ').join('-')
}