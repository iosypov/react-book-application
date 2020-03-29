
export default ((theme) => {
    const margin = `${theme.spacing(1)}px`;
    return {
      form: {
        "& .MuiTextField-root": {
          margin: `${margin} 0`,
          width: "100%"
        }
      }

    }
});

