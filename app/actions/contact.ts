"use server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactEmail from "../../components/tools/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendContactEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const emailHtml = render(
        <ContactEmail name={ name } email = { email } message = { message } />
  );

    try {
        await resend.emails.send({
            from: "portfolio@yourdomain.com",
            to: "your@email.com",
            subject: `Nuevo mensaje de contacto de ${name}`,
            html: emailHtml,
        });
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}
