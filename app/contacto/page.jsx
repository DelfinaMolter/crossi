"use client";
import Image from "next/image";
import FormContact from "./formContact/formContact";
import Banner from "public/banner_contacto.png";
import './contact.css'
import { contactSchema } from "./rule/index.js";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";

export default function ContactoPage() {

  const method = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {},
  });

  return (
    <main >
      <Image
        src={Banner}
        width={180}
        height={40}
        alt="Banner de Cafe"
        className="bannerContact"
      />
      <Box>
        <h1>Contactanos</h1>
        <FormProvider {...method}>
          <FormContact/>
        </FormProvider>
      </Box>
    </main>
  )
}
  