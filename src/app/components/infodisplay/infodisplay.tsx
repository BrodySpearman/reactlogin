'use client';

export default function InfoDisplay({ formData }: { formData: any }) {
    return (
        <div className="text-center">
            <p className="text-md">Name: <i><b>{formData.firstName} {formData.lastName}</b></i></p>
            <p className="text-md">Email: <i><b>{formData.email}</b></i></p>
            <p className="text-md mb-1">Birthday: <i><b>{formData.birthday}</b></i></p>
        </div>
    )
}