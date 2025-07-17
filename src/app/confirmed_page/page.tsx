'use server';
import InfoDisplay from '../components/infodisplay/infodisplay';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logoutUser() {
    const cookieStore = await cookies();
    cookieStore.delete('userData');

    return redirect('/');
}


export default async function ConfirmedPage() {
    const cookieStore = await cookies();
    const preParse = cookieStore.get('userData');
    const userData = JSON.parse(preParse?.value || '{}');
    console.log("User Account:", userData);
    
    return (
        <div className="background bg-opacity-50 h-screen w-screen flex items-center justify-center">
            <div className="flex flex-col flexBox infoBox bg-background items-center justify-center w-1/2 h-fit">
                <h1 className="text-3xl font-bold mb-1 mt-3">Thank You!</h1>
                <p className="text-md">Your information has been submitted successfully.</p>
                <p className="text-md mb-1">Your signup info:</p>
                <InfoDisplay formData={userData} />
                <button type="button" onClick={logoutUser}
                className="submitBtn w-6/7 bg-background border-2 border-foreground pt-1 pb-2 mt-3 mb-2 text-foreground rounded-md">
                    Logout
                </button>
                <p className="text-xs deemphasized mb-2">This is a demo page, no data has been saved.</p>
            </div>
        </div>
    );

};