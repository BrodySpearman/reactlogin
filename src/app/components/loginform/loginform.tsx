'use client';

import { submitForm } from '@/app/lib/submit';
import { useActionState } from 'react';
import { redirect } from 'next/navigation';

export default function LoginForm() {
    const [state, submit, pending] = useActionState(submitForm, null);

    if (state?.redirect) {
        redirect(state.redirect.destination as '/confirmed_page');
    };

    return (
        <div className="loginBox flexBox bg-background items-center justify-center flex flex-col h-full w-full">
            <div className="signupTitle items-center justify-center flex flex-col w-full">
                <p className="max-w-fit text-5xl">Hello there.</p>
                <p className="max-w-fit text-sm mt-2">Welcome to my fake sign-up page.</p>
                <p className="max-w-fit text-sm">Please enter some information to continue.</p>
                <p className="max-w-fit text-sm">Signing up will redirect you to a simple landing page.</p>
                <p className="max-w-fit text-sm pb-3">Your input will not be saved. however, <span className="underline">it's obvously not recommended to use real information.</span></p>
            </div>

            <div className="loginFormArea w-7/8 h-4/6">
                <form id="loginForm" className="loginGrid grid grid-cols-2 grid-rows-3 gap-x-3 w-full h-8/12 mt-4">
                    <fieldset>
                        <label htmlFor="firstName"> First Name
                        {state?.errors?.firstName && <p className="errorMsg" aria-live="polite">{state.errors.firstName}</p>}
                        <input type="text" id="firstName" name="firstName" placeholder="John" defaultValue={state?.values?.firstName ?? ''} required />
                        </label>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="lastName"> Last Name
                        {state?.errors?.lastName && <p className="errorMsg" aria-live="polite">{state.errors.lastName}</p>}
                        <input type="text" id="lastName" name="lastName" placeholder="Doe" defaultValue={state?.values?.lastName ?? ''} required />
                        </label>
                        
                    </fieldset>

                    <fieldset>
                        <label htmlFor="birthday"> Birthday
                        {state?.errors?.birthday && <p className="errorMsg" aria-live="polite">{state.errors.birthday}</p>}
                        <input type="date" id="birthday" name="birthday" maxLength={8} max={new Date().toISOString().split('T')[0]} />
                        </label>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="email"> Email
                        {state?.errors?.email && <p className="errorMsg" aria-live="polite">{state.errors.email}</p>}
                        <input type="email" id="email" name="email" placeholder="xG2Ct@example.com" />
                        </label>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="password"> Password
                        {state?.errors?.password && <p className="errorMsg" aria-live="polite">{state.errors.password}</p>}
                        <input type="password" id="password" name="password" placeholder="Password" />
                        </label>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="confirmPassword"> Confirm Password
                        {state?.errors?.confirmPassword && <p className="errorMsg" aria-live="polite">{state.errors.confirmPassword}</p>}
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                        </label>
                    </fieldset>
                </form>

                <div className="">
                    <button type="submit" form="loginForm" formAction={submit} disabled={pending}
                    className="submitBtn w-full bg-background border-2 border-foreground pt-2 pb-2 mt-3 text-foreground rounded-md relative">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
}