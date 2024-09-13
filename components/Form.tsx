import { useFormStatus } from 'react-dom';
import Button from "./Button";
import { useState } from 'react';
import { formFields } from '@/constants';

//image & icons
import { FaEdit } from "react-icons/fa";


// interface FormProps {
//     onSubmit: (data: FormData) => void
// { onSubmit }: FormProps  << pass this to form prop
// }

interface FormData  {
    name: string,
    email: string,
    message: string,
}
export default function Form () {
    const [formData, setFormData] = useState<FormData>({ name: "" , email: "", message: "", });
    const { pending } = useFormStatus();

//handle input change
    function handleInputChange (event:React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value });
    };
//handle textarea change
    function handleTexareaChange (event:React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value });
    };

//handleSubmit
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("submitting....")
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <div className="flex flex-row w-full flex-wrap">

            {formFields.map(field => {
                const Icon = field.icon
                return <>
                    <div className="w-1/2 p-3">
                        <label htmlFor={field.label}>{field.label}</label>
                        <div key={field.id} className=" w-full rounded-md bg-slate-200 text-main-800 border-none text-sm mb-4">
                            <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name as keyof FormData]}
                            onChange={handleInputChange}
                            required={field.required}
                            placeholder={field.placeHolder}
                            className=" outline-none bg-transparent p-6 placeholder:text-blue focus:outline-none focus:ring-0"/>
                            {/* <span><Icon/></span> */}
                        </div>
                    </div>

                    </>
                })}
            </div>

           {/* Message */}

            <div className="p-3 w-full">
                <label htmlFor='Message'>Message</label>
                <div className=" bg-slate-200 border-solid border-2 rounded-2xl w-full flex items-center justify-center mb-4 p-4 md:text-lg text-sm">
                <textarea
                name="message"
                value={formData.message}
                onChange={handleTexareaChange}
                className="border-none outline-none resize-none bg-transparent p-6 placeholder:text-blue w-full focus:outline-none focus:ring-0"
                placeholder="Type Your Message Here..." />
                <span><FaEdit/></span>
                </div>
            </div>

        <Button
        variant="orange"
        type="submit"
        disabled={pending}
        >{pending ? "Submitting..." : "Submit" }</Button>

      </form>
    )
}
