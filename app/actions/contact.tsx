"use server";
import { Resend } from "resend";
import ContactEmail from "../../components/tools/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendContactEmail(formData: FormData) {
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "daniellacaballeroo@gmail.com",
            subject: `Nuevo mensaje desde el portfolio, de ${email}`,
            react: <ContactEmail email={email} message={message} />,
        });
        return { success: true };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error: error instanceof Error ? error.message : "Error desconocido" };
    }
}
