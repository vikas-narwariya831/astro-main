'use client'

import { postMessage } from "@/actions/message.action";
import { FlexColInput } from "@/components/FlexColInput";
import { SymbolsBgContainer } from "@/components/SymbolsBgContainer";
import { TextDecorate } from "@/components/TextDecorate";
import { Button } from "@/components/ui/button";
import countries from "@/constants/countries.json";
import { toast } from "sonner"
import Link from "next/link";
import { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({});
    const [telCode, setTelCode] = useState(91);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCountryChange = (e) => {
        setTelCode(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formdata = new FormData(e.target);

        const payload = {
            name: formdata.get('name'),
            email: formdata.get('email'),
            mobileNumber: {
                telCode: +formdata.get('telCode'),
                number: +formdata.get('number')
            },
            message: formdata.get('message')
        }

        try {
            let { data } = await postMessage(payload);
            e.target.reset();
            setTelCode(91)
            toast(data?.message)
        } catch (error) {
            toast(error?.message)
        }
        setIsSubmitting(false)
    };

    return (
        <SymbolsBgContainer>
            <div className="mt-16 mb-24 flex flex-col lg:flex-row justify-center gap-10 md:gap-16 w-[95%] lg:w-[80%] max-w-7xl m-auto">
                <div className="w-full lg:w-1/3 space-y-6 py-4">
                    <h1 className="text-3xl lg:text-4xl font-georgia-bold text-primary">
                        <TextDecorate>Get </TextDecorate>
                        <TextDecorate>In </TextDecorate>
                        <TextDecorate>Touch </TextDecorate>
                        With Us
                    </h1>
                    <p className="text-primary opacity-70 text-sm">
                        Have questions or need assistance? Contact us for personalized support and guidance. Our team is here to help you on your astrological journey.
                    </p>
                    <hr />
                    <div>
                        <p className="text-primary font-medium opacity-70">Email Us</p>
                        <Link className="text-primary font-medium" href="mailto:support@astrovoice.com">support@astrovoice.org</Link>
                    </div>
                    <div>
                        <p className="text-primary font-medium opacity-70">Office Address</p>
                        <p className="text-primary font-medium">
                            Sector 11, CBD Belapur, Navi Mumbai
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <form onSubmit={onSubmit} className="rounded-xl border bg-white grid gap-x-2 gap-y-4 p-4 grid-cols-1 md:grid-cols-2 shadow-md">
                        <FlexColInput className={'z-20'} name="name" label="Full Name" placeholder="Enter Full Name" required />
                        <FlexColInput className={'z-20'} label="Phone Number">
                            <div className="w-full flex border rounded-md py-3 px-2">
                                <select
                                    required
                                    className="border-0 w-24 mr-2 outline-none"
                                    name="telCode"
                                    onChange={handleCountryChange}
                                    value={telCode}
                                >
                                    {countries.map(({ name, prefix }) => (
                                        <option value={prefix} key={name}>{name}</option>
                                    ))}
                                </select>
                                <p>+{telCode}</p>
                                <input
                                    name="number"
                                    type="number"
                                    required
                                    className="border-0 z-20 w-full ml-2 outline-none"
                                    maxLength={10}
                                    placeholder="Enter Number"
                                />
                            </div>
                        </FlexColInput>
                        <FlexColInput name="email" className="md:col-span-2 z-20" type="email" label="Email Address" placeholder="Enter Email Address" required />
                        <FlexColInput className="md:col-span-2 z-20" label="Message" placeholder="Your Message..." required>
                            <textarea name="message" className="rounded-lg border w-full p-3" required rows={5} />
                        </FlexColInput>

                        <Button className="z-20" type="submit" variant="gradientPurple" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                    </form>
                </div>
            </div>
        </SymbolsBgContainer>
    );
};

export default ContactUs;
