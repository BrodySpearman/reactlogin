export default function LoginForm() {
    return (
        <div className="loginBox bg-background items-center justify-center flex flex-col h-full w-full">
            <div className="signupTitle items-center justify-center flex flex-col w-full">
                <p className="max-w-fit text-5xl">Hello there.</p>
                <p className="max-w-fit text-sm mt-2">Welcome to our fake sign-up page.</p>
                <p className="max-w-fit text-sm">Please enter some information to continue.</p>
                <p className="max-w-fit text-sm">Signing up will redirect you to a simple landing page.</p>
                <p className="max-w-fit text-sm pb-3">Your input will not be saved. however, <span className="underline">it's obvously not recommended to use real information.</span></p>
            </div>

            <div className="loginFormArea w-7/8 h-4/6">
                <form className="loginGrid grid grid-cols-2 grid-rows-3 gap-x-3 w-full h-8/12 mt-4">
                    <div>
                        <label htmlFor="firstName">First Name
                        <input type="text" id="firstName" name="firstName" placeholder="John" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name
                        <input type="text" id="lastName" name="lastName" placeholder="Doe" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="birthday">Birthday
                        <input type="date" id="birthday" name="birthday" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="email">Email
                        <input type="email" id="email" name="email" placeholder="xG2Ct@example.com" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password">Password
                        <input type="password" id="password" name="password" placeholder="Password" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                        </label>
                    </div>
                </form>
                <div className="">
                    <button type="submit" className="submitBtn w-full bg-background border-2 border-foreground pt-2 pb-2 mt-3 text-foreground rounded-md relative">Sign up</button>
                </div>
            </div>
        </div>
    );
}