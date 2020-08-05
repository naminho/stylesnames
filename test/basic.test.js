const stylesnames = require('./..')
const styles = require('./fixtures/styles')

test('Always adds styles for strings', () => {
  const boundStylesNames = stylesnames.default.bind(styles)
  const inputStyle = boundStylesNames('input')
  const buttonStyle = boundStylesNames('button')
  const bothStyles = boundStylesNames('input', 'button')

  expect(inputStyle[0].backgroundColor).toEqual('red')
  expect(inputStyle.length).toEqual(1)

  expect(buttonStyle[0].color).toEqual('blue')
  expect(buttonStyle.length).toEqual(1)

  expect(bothStyles[0].backgroundColor).toEqual('red')
  expect(bothStyles[1].color).toEqual('blue')
  expect(bothStyles.length).toEqual(2)
})

test('Conditionally applies styles', () => {
  const boundStylesNames = stylesnames.default.bind(styles)
  const conditionalStyleTrue = boundStylesNames({
    disabled: true,
  })
  const conditionalStyleFalse = boundStylesNames({
    disabled: false,
  })
  const severalConditionalStyles = boundStylesNames({
    disabled: true,
    button: true,
  })

  expect(conditionalStyleTrue[0].opacity).toEqual(0.5)
  expect(conditionalStyleTrue.length).toEqual(1)

  expect(conditionalStyleFalse.length).toEqual(0)

  expect(severalConditionalStyles[0].opacity).toEqual(0.5)
  expect(severalConditionalStyles[1].color).toEqual('blue')
  expect(severalConditionalStyles.length).toEqual(2)
})
