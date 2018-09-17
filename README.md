# stylesnames

style**s**names conditionally applies style objects for react and react-native
similar to how classes can be combinded in react with  [classnames](https://github.com/JedWatson/classnames).

## Installation

```
npm i stylesnames
```

## Usage

```
import stylesnames from 'stylesnames'

const styles = stylesnames.bind({
  // Any object with style objects inside.
})

const result = styles(
  'title',
  'paragraph',
  {
    disabled,
  },
  {
    highlight: true,
    focus: value === 5
  }
)

// result will be an array with all the style objects that apply. If disabled is
// false it won't be in the resulting array. highlight will always be added,
// while focus is only present if value is equal to 5.
```

### React

```
import React, { Component } from 'react'
import stylesnames from 'stylesnames'

const styles = stylesnames.bind({
  button: {
    backgroundColor: 'red'
  },
  disabled: {
    opacity: 0.5
  }
})

export default class FakeButton extends Component {
  render() {
    const { disabled, label } = this.props

    return (
      <div style={styles(button, { disabled })}>
        {label}
      </div>
    )
  }
}
```

This will result in the following styles being applied:

`<FakeButton label="Regular Button" />`

```
backgroundColor: red;
```

`<FakeButton label="Disabled Button" disabled />`

```
backgroundColor: red;
opacity: 0.5;
```

### React Native

```
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import stylesnames from 'stylesnames'

const styles = stylesnames.bind(StyleSheet.create({
  button: {
    backgroundColor: 'red'
  },
  disabled: {
    opacity: 0.5
  }
}))

export default class FakeButton extends Component {
  render() {
    const { disabled, label } = this.props

    return (
      <View style={styles('button', { disabled })}>
        <Text>
          {label}
        </Text>
      </View>
    )
  }
}
```

The result will be the same as for the `react` example.

## License

MIT
