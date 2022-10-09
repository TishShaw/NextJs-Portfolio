import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"
import { Portfolio } from '../typings';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
};

type Props = {
    portfolio: Portfolio
}

const Contact = ({portfolio}: Props) => {
    const { register, handleSubmit } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:Tishtanya.Shaw24@gmail.com?email=${formData.email}&subject=${formData.subject}&body=${formData.message}`
    }

    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h1 className="absolute text-2xl text-gray-500 top-24 uppercase tracking-[20px]">Contact</h1>

            <div className="flex flex-col space-y-10 mt-32">
                <h4 className="text-4xl font-semi-bold text-center">
                    I have just what you need. {" "}
                    <span className="decoration-[#f7aaba]/50 underline">Lets Talk.</span>
                </h4>
                <div className="space-y-8 flex flex-col items-start md:items-center justify-center">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#f7aaba] animate-pulse h-7 w-7" />
                        <p className="text-xl">{portfolio.phoneNumber}</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#f7aaba] animate-pulse h-7 w-7" />
                        <p className="text-xl">{portfolio.email}</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#f7aaba] animate-pulse h-7 w-7" />
                        <p className="text-xl">{portfolio.address}</p>
                    </div>
                </div>
                <form className="flex flex-col space-y-2 w-fit mx-auto " onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex space-x-2">
                            <input {...register('name')} type="text" placeholder="Name" className="contact-input" />
                            <input {...register('email')} type="email" placeholder="Email" className="contact-input" />
                        </div>
                        <input {...register('subject')} type="text" placeholder="Subject" className="contact-input" />
                        <textarea {...register('message')} placeholder="Message" className="contact-input"/>
                        <button type="submit" className="bg-[#f7aaba]/70 py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
                    </form>
            </div>
        </div>
    )
}

export default Contact