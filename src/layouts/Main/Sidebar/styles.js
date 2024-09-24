export const WIDTH = 300

export default ({ palette }) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: WIDTH,
    padding: 40,
    backgroundColor: palette.secondary.main
  },

  navMenu: {
    display: 'flex',
    flexDirection: 'column',
    color: palette.primary.contrastText
  }
})
