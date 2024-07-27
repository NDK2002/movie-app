import React from "react";
import { FormProvider, FTextField } from "../components/form";
import { Button, colors, Stack, styled, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const defaultValues = {
  username: "",
  password: "",
};

function LoginPage() {
  // let navigate = useNavigate();
  // let location = useLocation();
  // let auth = useAuth();

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  // const onSubmit = async (data) => {
  //   let from = location.state?.from?.pathname || "/";
  //   let username = data.username;

  //   auth.login(username, () => {
  //     navigate(from, { replace: true });
  //   });
  // };

  return (
    <FormProvider methods={methods}>
      <Stack spacing={3} sx={{ minWidth: "350px" }}>
        <Typography
          variant="h4"
          textAlign="left"
          color="#FFF"
          fontSize="32px"
          fontWeight="bold"
        >
          Sign In
        </Typography>
        <FTextField
          name="username"
          label="Username"
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#383838",
            },
            borderRadius: "10px",
          }}
        />

        <FTextField
          name="password"
          label="Password"
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#383838",
            },
            borderRadius: "10px",
          }}
        />

        <Button
          variant="contained"
          sx={{
            // bgcolor: (theme) => theme.palette.primary.main,
            borderRadius: "20px",
          }}
        >
          Login
        </Button>
      </Stack>
    </FormProvider>
  );
}

export default LoginPage;
