/**
 * Conditionally add style objects to the array returned.
 * Similar to classnames for putting togethter classes conditionally.
 **/
export default function(...args) {
  const styles = this
  const result = []

  args.forEach(condition => {
    // Regular string
    if (typeof condition === 'string' && styles[condition]) {
      result.push(styles[condition])
    }

    // Object with one or more keys to conditionally apply
    if (typeof condition === 'object') {
      const keys = Object.keys(condition)

      keys.forEach(key => {
        if (condition[key] && styles[key]) {
          result.push(styles[key])
        }
      })
    }
  })

  return result
}
