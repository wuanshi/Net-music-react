export function format(count) {
  if(count > 10000) {
    return (count / 100000).toFixed(1) + '万'
  }
  return count
}