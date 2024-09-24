import { alpha } from 'lib/color'

export default ({ palette, typography }) => {
  return {
    root: {
      height: 46,
      color: palette.primary.contrastText,

      '& > *': {
        zIndex: 1,
        height: '100%'
      }
    },

    dropdown: {
      maxHeight: 300,
      borderColor: palette.primary.contrastText,

      '& > li': {
        '&:not(.Mui-selected)': {
          backgroundColor: palette.background.dark
        },

        '&.Mui-selected': {
          backgroundColor: alpha(palette.secondary.contrastText, 0.3),
          transition: 'background-color .3s',

          '&:hover': {
            backgroundColor: alpha(palette.primary.main, 0.5)
          },

          '& > span:first-of-type': {
            color: palette.primary.main,
            fontWeight: typography.fontWeightBold
          }
        }
      }
    },

    paper: {
      border: `1px solid ${palette.background.default}`
    },

    disabled: {
      backgroundColor: 'transparent'
    },

    selectRootReadOnly: {
      cursor: 'text'
    },

    selectIconReadOnly: {
      display: 'none'
    },

    defaultOption: {
      borderRadius: 8,
      backgroundColor: palette.background.default,
      color: palette.secondary.dark,

      '&.Mui-selected': {
        opacity: 1,
        color: palette.secondary.dark
      }
    }
  }
}
