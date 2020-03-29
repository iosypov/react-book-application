


export default ((theme) => {
  const margin = `${theme.spacing(1)}px`;
  return {
    root: {
      padding: 0
    },
    grow: {
      flex: 1
    },

    button: {
      margin: `0 ${margin}`,
      "&:last-of-type": {
        marginRight: 0
      }
    }

  }
});


