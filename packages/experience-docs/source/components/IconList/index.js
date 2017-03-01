import React from 'react'
import {comp} from '@edh/stranger'

const ICONS = [
  {
    title: 'Camera',
    src: require('./images/camera.svg')
  },
  {
    title: 'Clapping Hands',
    src: require('./images/claphands.svg')
  },
  {
    title: 'Donation',
    src: require('./images/donation.svg')
  },
  {
    title: 'Earth',
    src: require('./images/earth.svg')
  },
  {
    title: 'Duck',
    src: require('./images/duck.svg')
  },
  {
    title: 'Penguin',
    src: require('./images/penguin.svg')
  },
  {
    title: 'Open Book',
    src: require('./images/openbook.svg')
  },
  {
    title: 'Question',
    src: require('./images/question.svg')
  },
  {
    title: 'Search',
    src: require('./images/search.svg')
  },
  {
    title: 'Star',
    src: require('./images/star.svg')
  },
  {
    title: 'Heart',
    src: require('./images/heart.svg')
  },
  {
    title: 'Share',
    src: require('./images/share.svg')
  },
  {
    title: 'Check',
    src: require('./images/check.svg')
  },
  {
    title: 'Cross',
    src: require('./images/cross.svg')
  },
  {
    title: 'Plus',
    src: require('./images/plus.svg')
  },
  {
    title: 'Minus',
    src: require('./images/minus.svg')
  }
]

const IconList = () => (
  <div>
    {ICONS.map(({title, src}) => (
      <img src={src} title={title} alt={title} />
    ))}
  </div>
)

export default IconList

// Styled components
