"use server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactEmail from "../../components/tools/contact-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendContactEmail(formData: FormData) {
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const emailHtml = await render(
        React.createElement(ContactEmail, { email, message })
    );

    try {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "daniellacaballeroo@gmail.com",
            subject: `Nuevo mensaje de contacto de ${email}`,
            html: emailHtml,
        });
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}
