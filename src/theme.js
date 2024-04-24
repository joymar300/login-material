import { createTheme } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";

const textColor = "#161616";

const theme = createTheme({
  palette: {
    primary: {
      main: "#002B44",
      contrastText: textColor,
    },
    secondary: {
      main: "#C1D5D7",
      contrastText: "#0782C3"
    },
    text: {
      primary: textColor,
    },
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    color: "#260944",
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#fff"
          
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            fontWeight: 400,
          },
          label: {
            fontWeight: 500,
            color: "#a7a7a7bd!important"
          },
          "& .Mui-disabled": {
            "-webkit-text-fill-color": "#a7a7a7bd!important",
            color: "#a7a7a7bd!important",
            fontWeight: 400
          },
          "fieldset": {
            borderColor: "#b0b0b0d9"
          },
          "input::placeholder": {
            color: "#777777",
          },
          "& .MuiInput-root::before": {
            // borderBottom: "1px solid #fff"
          }
        },
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          // color: "#fff"
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          zIndex: 2000,
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "1px 1px 6px -3px #898989"
        },
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#9eb2b38a!important",
        }
      },
      defaultProps: {
        variant: "fullWidth",
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontWeight: "600!important"
        }
      }
    },
    MuiAlert: {
      variants: [
        {
          props: { severity: "error" },
          style: {
            backgroundColor: "rgb(255 184 184 / 100%)",
            fontWeight: 500,
            svg: {
              color: "#dd0000"
            }
          }
        },
        {
          props: { severity: "success" },
          style: {
            backgroundColor: "rgb(177 247 177 / 100%)",
            fontWeight: 500,
            svg: {
              color: "#00a31d"
            }
          }
        }
      ]
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          paddingTop: "13px",
          paddingBottom: "13px",
          fontSize: "0.938rem",
        }
      },
      defaultProps: {
        variant: "contained",
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            color: "#fff"
          }
        }
      ]
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          color: textColor
        }
      },
      variants: [
        {
          props: { className: "link" },
          style: {
            cursor: "pointer",
            textDecoration: "underline",
            transition: "color 0.3s ease",
            ":hover": {
              color: "#999999",
            }
          }
        }
      ],
    },
    MuiLoadingButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
});

export default theme;
