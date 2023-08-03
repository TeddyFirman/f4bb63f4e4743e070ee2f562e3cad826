'use client';

import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {};

function ContactMe({ }: Props) {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:teddyfirman902@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, and this is my message: ${formData.message}, from: (${formData.email})`;
    };

    return (
        <div className="h-screen-[8000px] flex flex-col justify-center items-center">
            <h3 className="text-gray-500 text-2xl uppercase mt-[80px] md:mt-3 mb-3 md:mb-3">Contact Me</h3>

            <div className="flex flex-col space-y-10 md:space-y-4 text-center md:text-left h-screen">
                <h4 className="text-lg font-semibold">
                    I have got just what you need.{" "}
                    <span className="relative underline">
                        Lets Talk.
                        <span className="absolute bottom-0 left-1/2 w-1/4 h-[1px] bg-[#F7AB0A] transform -translate-x-1/2" />
                    </span>
                </h4>

                <div className="space-y-5 ml-10">
                    <div className="flex items-center space-x-2">
                        <PhoneIcon className="text-[#F7AB0A] h-4 w-4 animate-pulse" />
                        <p className="text-sm">+6282244599770</p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <EnvelopeIcon className="text-[#F7AB0A] h-4 w-4 animate-pulse" />
                        <p className="text-sm">teddyfirman902@gmail.com</p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <MapPinIcon className="text-[#F7AB0A] h-4 w-4 animate-pulse" />
                        <p className="text-sm">Jombang, Jawa Timur</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5 md:space-y-2 max-w-md mx-auto">
                    <div className="flex space-x-4">
                        <input {...register('name')} placeholder="Name" className="contactInput w-36" type="text" />
                        <input {...register('email')} placeholder="Email" className="contactInput flex-grow" type="email" />
                    </div>

                    <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />

                    <textarea {...register('message')} placeholder="Message" className="contactInput" />

                    <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default ContactMe;