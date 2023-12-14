import * as yup from "yup";

// Creamos el schema
export const contactSchema = yup.object({
  reason: yup
    .string()
    .required("Este campo es obligatorio"),
  name: yup
    .string()
    .required("Este campo es obligatorio")
    .min(2, "Mínimo 2 caracteres")
    .max(15, "Máximo 15 caracteres"),
  lastName: yup
    .string()
    .required("Este campo es obligatorio")
    .min(2, "Mínimo 2 caracteres")
    .max(15, "Máximo 15 caracteres"),
  email: yup
    .string()
    .required("Este campo es obligatorio")
    .email("El correo no es válido"),
  phone: yup
    .string()
    .required("Este campo es obligatorio")
    .matches(/^[0-9]{10,}$/, "El número debe incluir el código de area, pero no el prefijo."),
  })