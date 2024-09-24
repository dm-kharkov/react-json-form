export default ({ palette }) => ({
  root: {
    alignItems: 'center',

    '& input': {
      textAlign: 'center',
      textOverflow: 'ellipsis'
    },

    '&::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0
    },

    '& input[type=number]': {
      MozAppearance: 'textfield'
    }
  },

  label: {
    width: '100%',
    marginBottom: 4
  },

  input: {
    margin: '0 10px'
  },

  button: {
    borderRadius: '50%',
    padding: 0,
    height: 30,
    width: 30,
    minWidth: 30,
    fontSize: '16px',
    backgroundColor: palette.primary.main
  }
})
