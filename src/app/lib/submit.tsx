"use server";
import { cookies } from "next/headers";
import * as z from "zod/v4";


// zod defines the schema for the form validation
const formSchema = z.object({
    firstName: z.string().trim()
        .min(1, "First name is required")
        .max(30, "First name must be less than 30 characters")
        .regex(/^[a-zA-Z]+$/, "First name must contain only letters"),
    lastName: z.string().trim()
        .min(1, "Last name is required")
        .max(30, "Last name must be less than 30 characters")
        .regex(/^[a-zA-Z]+$/, "Last name must contain only letters"),
    birthday: z.string()
        .refine((date) => {
            const today = new Date();
            const birthDate = new Date(date);
            return birthDate <= today; 
        }, "Birthday must be in the past")
        .regex(/^\d{4}-\d{2}-\d{2}$/, "Birthday must be in YYYY-MM-DD format"),
    email: z.email()
        .max(50, "Email must be less than 50 characters")
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"),
    password: z.string()
        .min(6, "Password must be at least 6 characters")
        .max(50, "Password must be less than 50 characters"),
    confirmPassword: z.string()
}).check(z.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword", "password"]
})); // Passwords are checked after the schema is defined

export async function submitForm(_: unknown, formData: FormData) {
    const formVals = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        birthday: formData.get("birthday") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        confirmPassword: formData.get("confirmPassword") as string
    };

    const { success, error, data } = formSchema.safeParse(formVals);

    // If the form is not valid, return the errors
    if (!success) {
        console.log(data);
        return {
            errors: z.flattenError(error).fieldErrors,
            values: formVals,
            redirect: null
        };
    };

    // Server-side cookie storage for non-sensitive user data.
    // Since this isn't a full website, I've opted for a simpler solution
    // rather than building a full session/authentication management system.
    const cookieStore = await cookies();
    const cookieData = {
        firstName: formVals.firstName,
        lastName: formVals.lastName,
        birthday: formVals.birthday,
        email: formVals.email
    };
    cookieStore.set("userData", JSON.stringify(cookieData), { path: "/" });

    // destination URL with the encoded data
    const destinationUrl = `/confirmed_page`; 

    return {
        success: true,
        redirect: {
            destination: destinationUrl,
            permanent: false,
        }
    };
};

