export function add(...args) {
  const arr = []
  let total = 0
  args.map(item => {
    const num = (item.toString().split('.')[1] || '').length
    arr.push(num)
  })
  const baseNum = Math.pow(10, Math.max(...arr))
  args.map(item => {
    total += item * baseNum
  })
  return total / baseNum
}

export function mul(...args) {
  const arr = []
  let total = 1
  args.map(item => {
    const num = (item.toString().split('.')[1] || '').length
    arr.push(num)
  })
  const baseNum = Math.pow(10, Math.max(...arr))
  args.map(item => {
    total = total * Number(item.replace(".",""))
  })
  return total / baseNum
}