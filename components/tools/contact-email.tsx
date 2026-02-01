import { Html } from "@react-email/components";

export default function ContactEmail({ email, message }: { email: string; message: string }) {
    return (
        <Html>
            <h2>Nuevo mensaje de contacto</h2>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Mensaje:</strong> {message}</p>
        </Html>
    );
}
