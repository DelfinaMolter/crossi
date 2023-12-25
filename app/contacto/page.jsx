"use client";
import Image from "next/image";
import FormContact from "./formContact/formContact";
import Banner from "public/banner_contacto.png";
import Sobre from "public/sobre.png";
import MDQ from "public/mdq.png";
import Avion from "public/avion.png";
import './contact.css'
import { contactSchema } from "./rule/index.js";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Container } from "@mui/material";

export default function ContactoPage() {

  const method = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {},
  });

  return (
    <main >
      <Image
        src={Banner}
        width={2560}
        height={507}
        style={{ maxWidth: '100%', height: 'auto' }}
        className="bannerContact"
      />
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ mx:'auto', my:'40px'}} className="contactBox">
          <div className="contactDiv">
        
            <h1>Contactanos</h1>
            <FormProvider {...method}>
              <FormContact/>
            </FormProvider>

          </div>
          <Image
            src={Sobre}
            width={50}
            height={50}
            alt="Sobre"
            className="sobreImg"
          />
          <Image
            src={MDQ}
            width={40}
            height={40}
            alt="logo MDQ"
            className="mdqImg"
          />
          <Image
            src={Avion}
            width={100}
            height={50}
            alt="Avioncito"
            className="avionImg"
          />
        </Box>
      </Container>
    </main>
  )
}
  