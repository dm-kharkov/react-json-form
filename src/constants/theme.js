import { createTheme } from '@mui/material/styles'
import { createBreakpoints } from '@mui/system'

const palette = {
  primary: {
    disabled: '#909090',
    main: '#1f7ac0',
    text: '#242323'
  },
  secondary: {
    main: '#002447'
  },
  background: {
    default: '#fafafa'
  },
  color: {
    error: '#ff5630',
    warn: '#fba800',
    success: '#02b679',
    info: '#606060'
  }
}

const spacing = 10

const breakpoints = createBreakpoints({})

const mixins = {
  bgImage (image) {
    return {
      backgroundImage: `url('${image}')`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }
  },
  scrollbarHide: {
    msOverflowStyle: 'none', // IE
    scrollbarWidth: 'none', // Firefox

    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }
}

const typography = {
  fontFamily: '-apple-system, Roboto, Helvetica, Arial, sans-serif',
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700
}

const components = {
  MuiCssBaseline: {
    styleOverrides: {
      'html, body': {
        color: palette.primary.text,
        fontFamily: typography.fontFamily,
        fontSize: 14,
        height: '100%',
        width: '100%',
        margin: 0
      },

      body: {
        backgroundColor: palette.background.default
      },

      a: {
        textDecoration: 'none',
        cursor: 'pointer',
        color: 'inherit'
      },

      '#root': {
        height: '100%'
      },

      img: {
        display: 'block',
        maxWidth: '100%',
        userSelect: 'none',
        pointerEvents: 'none',
        border: 0
      },

      'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus input:-webkit-autofill, textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus, select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus': {
        borderRadius: 2,
        border: 'none !important',
        WebkitTextFillColor: `${palette.primary.text} !important`,
        WebkitBoxShadow: '0 0 0px 1000px transparent inset',
        transition: 'background-color 5000s ease-in-out 0s'
      },

      'input:-internal-autofill-selected': {
        background: 'none'
      },

      'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0
      },

      /* Firefox */
      'input[type=number]': {
        MozAppearance: 'textfield'
      }
    }
  },

  MuiButton: {
    defaultProps: {
      variant: 'contained'
    },

    styleOverrides: {
      root: {
        height: 50,
        minWidth: 120,
        fontSize: 15,
        fontWeight: typography.fontWeightBold
      }
    }
  },

  MuiFormLabel: {
    styleOverrides: {
      root: {
        display: 'inline-block',
        fontSize: '14px',
        lineHeight: 2,
        fontWeight: 500
      }
    }
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        backgroundColor: '#fff',
        lineHeight: '14px',
        borderRadius: 8,

        '& .MuiOutlinedInput-notchedOutline': {
          display: 'none'
        }
      },

      inputMarginDense: {
        paddingTop: 18,
        paddingBottom: 18
      },

      inputAdornedEnd: {
        paddingRight: 14
      },

      input: {
        height: 46
      }
    }
  },

  MuiFormControl: {
    defaultProps: {
      fullWidth: true,
      margin: 'normal'
    },

    styleOverrides: {
      root: {
        '& input': {
          boxSizing: 'border-box'
        },

        '& textarea': {
          minHeight: 80,
          resize: 'none',
          borderColor: 'transparent',
          padding: 12,
          borderRadius: 8,
          backgroundColor: palette.background.default,
          color: palette.primary.contrastText
        }
      },

      marginNormal: {
        marginTop: 8,
        marginBottom: 30
      },

      marginDense: {
        marginTop: 8,
        marginBottom: 12
      }
    }
  },

  MuiFormHelperText: {
    styleOverrides: {
      root: {
        fontSize: '10px',
        lineHeight: '16px',
        top: '100%',
        left: 0,
        position: 'absolute',
        marginLeft: 0
      }
    }
  }
}

const theme = createTheme({
  breakpoints,
  mixins,
  components,
  palette,
  spacing,
  typography
})

export default theme
