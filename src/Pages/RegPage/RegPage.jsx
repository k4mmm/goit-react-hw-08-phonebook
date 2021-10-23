import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { register as registration } from "../../Redux/auth/authOperations";
import { useForm } from "react-hook-form";

const theme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Submit = (data) => {
    dispatch(registration(data));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(Submit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {errors.name ? (
                  <TextField
                    error
                    id="outlined-error"
                    label="Incorrect Name"
                    name="name"
                    required
                    fullWidth
                    autoFocus
                    {...register("name", {
                      required: true,
                      maxLength: 80,
                      minLength: 1,
                    })}
                    helperText="Does not include numbers."
                  />
                ) : (
                  <TextField
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    {...register("name", {
                      required: true,
                      maxLength: 80,
                      minLength: 1,
                    })}
                  />
                )}
              </Grid>

              <Grid item xs={12}>
                {errors.email ? (
                  <TextField
                    error
                    id="outlined-error"
                    label="Incorrect Email"
                    required
                    fullWidth
                    name="email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    helperText="example@example.com"
                  />
                ) : (
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                {errors.password ? (
                  <TextField
                    error
                    id="outlined-error"
                    label="Incorrect Password"
                    required
                    fullWidth
                    name="password"
                    type="password"
                    {...register("password", {
                      required: true,
                      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    })}
                    helperText="Min 8 numbers and letters."
                  />
                ) : (
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    {...register("password", {
                      required: true,
                      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    })}
                  />
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
