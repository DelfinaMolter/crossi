// import ButtonComponent from "@/app/components/butoon/button";
import ButtonComponent from "@/app/components/butoon/button";
import { CustomTextField } from "@/app/components/customTextField/CustomTextFields";
import { ErrorMessage } from "@hookform/error-message";
import { FormControl, FormGroup, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function FormContact() {
  const reasons = [ 'Eventos', 'Trabajar con Nosotros', 'Otros']
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useFormContext();

  const onSubmit = async (data) => {
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
    <main >
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <FormControl component="fieldset">
          <FormGroup aria-label="position" sx={{ mt: 3 }} className="loginBox">
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

            {isSubmitting ? (
            <ButtonComponent
              disabled
            >
              Procesando...
            </ButtonComponent>
          ) : (
            <ButtonComponent
              type="submit"
            >
              Ingresar
            </ButtonComponent>
          )}
          </FormGroup>
        </FormControl>
      </form>
      {/* <ButtonComponent text={"Enviar"}/> */}
    </main>
  )
}