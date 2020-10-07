import React from 'react'

import { Icon } from '../src'

export default {
  title: 'Icon',
  component: Icon,
}

export const withText = ({ name }) => {
  return (
    <p>
      <Icon name={name} /> {name}
    </p>
  )
}

withText.args = {
  name: 'add-to-list',
}

export const withButton = ({ name }) => {
  return (
    <button>
      <Icon name={name} /> {name}
    </button>
  )
}

withButton.args = {
  name: 'add-to-list',
}
