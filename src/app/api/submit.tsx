"use server";
import { revalidateTag } from "next/cache"; 

export async function submitForm(formData: FormData) {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const birthday = formData.get("birthday");
    const email = formData.get("email");
    const password = formData.get("password");

    // Here you would typically handle the form submission e.g. save to a database
    // But for this project I will just store it in a variable.
    const loginInfo = {
        firstName,
        lastName,    
        birthday,
        email,
        password
    };

    console.log("Login info:", loginInfo);

    // Revalidate a specific tag to update the cache
    revalidateTag("loginForm");
}

