import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function ArrowRightIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      {...restProps}
    >
      <path
        fill={color}
        d='M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z'
      />
    </svg>
  )
}

export default withDefaultColor('background.paper')(ArrowRightIcon)
