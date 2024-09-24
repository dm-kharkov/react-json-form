export default {
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 20px'
  },

  children: {
    flexGrow: 1
  },

  reverse: {
    '& > *': {
      flexDirection: 'row-reverse'
    }
  },

  icon: {
    display: 'flex',
    flexShrink: 0,
    marginRight: 10
  },

  reverseIcon: {
    marginRight: 0,
    marginLeft: 10
  }
}
