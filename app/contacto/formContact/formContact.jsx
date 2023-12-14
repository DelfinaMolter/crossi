"use client"
import ButtonComponent from "@/app/components/button/button";
import { CustomTextField } from "@/app/components/customTextField/CustomTextFields";
import { ErrorMessage } from "@hookform/error-message";
import { Box, FormControl, FormGroup, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Controller, useFormContext } from "react-hook-form";
import { theme } from "../../styles/materialThemeFormContact";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
// import { sendEmail } from "@/app/utils/sendEmail";

export default function FormContact() {
  const reasons = [ 'Eventos', 'Trabajar con Nosotros', 'Otros']

  const [recaptchaError, setRecaptchaError] = React.useState(null)
  const [btnActive, setBtnActive] = React.useState(false)
  const [reason, setReason] = React.useState("")
  const captcha = React.useRef(null);

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    trigger,
  } = useFormContext();

  function onChange() {
    if(captcha.current.getValue()){
        setRecaptchaError(false)
    }
  }
  function onChangeReason(event) {
    console.log(event.target.value)
    setReason(event.target.value);
  }
  React.useEffect(()=>{
    if(captcha.current.getValue()){
      setBtnActive(true)
    }else{
      setBtnActive(false)
    }
	}, [recaptchaError])
  const onSubmit = async (data) => {
    // sendEmail(data)
    console.log(data)
    // if (response.status == 200) {
    //   console.log(response)
    // } else if (response.status == 401) {
    //   Swal.fire({
    //     title: "Error!",
    //     text: response.data,
    //     imageUrl: "../../images/icons/no-beer.jpg",
    //     imageWidth: 150,
    //     imageHeight: 150,
    //     imageAlt: "No puede ingresar",
    //     confirmButtonText: "OK",
    //     confirmButtonColor: "#ceb5a7",
    //     focusConfirm: false,
    //   });
    //   console.error(response.data);
    // } else if (response.status == 500) {
    //   Swal.fire({
    //     title: "Ups!",
    //     text: response.data,
    //     imageUrl: "../../images/icons/no-beer.jpg",
    //     imageWidth: 150,
    //     imageHeight: 150,
    //     imageAlt: "No puede ingresar",
    //     confirmButtonText: "OK",
    //     confirmButtonColor: "#ceb5a7",
    //     focusConfirm: false,
    //   });
    //   console.error(response.data);
    // }
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <FormControl component="fieldset">
          <FormGroup aria-label="position" sx={{ mt: 3, display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
            <Controller
              name="reason"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl fullWidth variant="filled" sx={{ mt: "10px", mx:"auto" }} className={"width70"}>
                  <InputLabel id="simple-select-label">Motivo</InputLabel>
                  <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={reason}
                    label="Motivo"
                    onChange={onChangeReason}
                    onBlur={(e) => {
                      field.onChange(e);
                      trigger("reason");
                    }}
                  >
                    {
                      reasons.map((item)=>(
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
              )}
            />
            <Typography variant="caption" color="red">
              <ErrorMessage errors={errors} name="reason" />
            </Typography>
            <Box fullWidth  className="nameBox"> 
              <Box className={"midWidth"}>
                <CustomTextField
                  name="name"
                  label="Nombre"
                  type="text"
                  control={control}
                  defaultValue=""
                  aria_describedby="outlined-day-helper-text"
                />
                <Typography variant="caption" color="red">
                  <ErrorMessage errors={errors} name="name" />
                </Typography>
              </Box>
              <Box className={"midWidth"}>
                <CustomTextField
                  name="lastName"
                  label="Apellido"
                  type="text"
                  control={control}
                  defaultValue=""
                  aria_describedby="outlined-day-helper-text"
                  
                />
                <Typography variant="caption" color="red">
                  <ErrorMessage errors={errors} name="lastName" />
                </Typography>
              </Box>
            </Box>
            <CustomTextField
              name="email"
              label="Email"
              type="email"
              control={control}
              defaultValue=""
              aria_describedby="outlined-day-helper-text"
            />
            <Typography variant="caption" color="red">
              <ErrorMessage errors={errors} name="email" />
            </Typography>
            <CustomTextField
              name="phone"
              label="Telefono"
              type="text"
              control={control}
              defaultValue=""
              aria_describedby="outlined-day-helper-text"
            />
            <Typography variant="caption" color="red">
              <ErrorMessage errors={errors} name="phone" />
            </Typography>

            <ReCAPTCHA
                ref={captcha}
                sitekey="6Le9FEMnAAAAAIf6XrzjM1_ZEdy9EY-O_5Hh969f"
                onChange={onChange}
                className="recaptcha"
            />
            {
              recaptchaError &&
              <small className="error-msg ">Por favor acepta el captcha.</small>

            }

            {isSubmitting ? (
            <ButtonComponent
              disabled
              className="btnEnvio"
            >
              Enviando...
            </ButtonComponent>
          ) : (
            <ButtonComponent
              type="submit"
              disabled={btnActive?false:true}
              className="btnEnvio"
            >
              Enviar
            </ButtonComponent>
          )}
          </FormGroup>
        </FormControl>
      </form>
      </ThemeProvider>
  )
}