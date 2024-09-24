import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function BrandArrowDownIcon (props) {
  const { color, brandColor = false, ...restProps } = props

  const fill = brandColor
    ? 'url(#paint0_linear_1346_20070)'
    : color

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='10'
      viewBox='0 0 18 10'
      {...restProps}
    >
      <path
        d='M17.031 1.53055L9.53104 9.03055C9.46139 9.10029 9.37867 9.15561 9.28762 9.19335C9.19657 9.23109 9.09898 9.25052 9.00042 9.25052C8.90186 9.25052 8.80426 9.23109 8.71321 9.19335C8.62216 9.15561 8.53945 9.10029 8.46979 9.03055L0.969792 1.53055C0.829062 1.38982 0.75 1.19895 0.75 0.999929C0.75 0.800906 0.829062 0.610034 0.969792 0.469303C1.11052 0.328573 1.30139 0.249512 1.50042 0.249512C1.69944 0.249512 1.89031 0.328573 2.03104 0.469303L9.00042 7.43962L15.9698 0.469303C16.0395 0.399621 16.1222 0.344345 16.2132 0.306633C16.3043 0.268921 16.4019 0.249512 16.5004 0.249512C16.599 0.249512 16.6965 0.268921 16.7876 0.306633C16.8786 0.344345 16.9614 0.399621 17.031 0.469303C17.1007 0.538986 17.156 0.621712 17.1937 0.712756C17.2314 0.803801 17.2508 0.901383 17.2508 0.999929C17.2508 1.09847 17.2314 1.19606 17.1937 1.2871C17.156 1.37815 17.1007 1.46087 17.031 1.53055Z'
        fill={fill}

      />

      <defs>
        <linearGradient
          id='paint0_linear_1346_20070'
          x1='14.2257'
          y1='2.43726'
          x2='1.75672'
          y2='2.80019'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#8054EE' />
          <stop offset='0.990854' stopColor='#F07FD0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default withDefaultColor('primary.main')(BrandArrowDownIcon)
