"use client";
import React from "react";
import Link from "next/link";
import WhatsAppImg from "../../../public/whatsapp.svg"
import Image from "next/image";



export default function WhatsApp({ number }) {
    const [whatsapp, setWhatsapp] = React.useState("");

    React.useEffect(() => {
        if (screen.width < 768) {
            setWhatsapp(`wa.me/${number}?`);
        } else {
            setWhatsapp(
                `web.whatsapp.com/send?phone=${number}&`,
            );
        }
    }, []);

    return (
        <Link
        href={`https://${whatsapp}text=Hola%20Team%20Crossi,%20necesito%20hacerles%20una%20consulta...`}
        target="_blank"
        >
            <Image src={WhatsAppImg} width={"30px"} height={"30px"} alt="WhatsApp"/>
            {number}
        </Link>
    )
}