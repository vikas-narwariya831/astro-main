'use client'

import { FlexColInput } from "./FlexColInput";
import { Logo } from "./Logo";
import countries from "../constants/countries.json";
import { useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CircleCheck, ImageUp, SearchCheck, Upload, X } from "lucide-react";
import { Button } from "./ui/button";
import { languagesList, servicesList } from "@/constants/applicationEssentials";
import { ReactMultiSelect } from "./ReactMultiSelect";
import Link from "next/link";
import { toast } from "sonner"
import { City, State } from "country-state-city";
import { v4 as uuid } from 'uuid'
import { useLoading } from "@/hooks/useLoading.hook";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";

import { patchApplication, postApplication } from "@/actions/application.action";
import { refresh } from "@/api/refresh";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const steps = [
    {
        label: "Step 1",
    },
    {
        label: "Step 2",
    },
    {
        label: "Step 3",
    },
    {
        label: 'Step 4'
    },
    {
        label: "Step 5"
    },
    {
        label: "Step 6",
    },
    {
        label: "Step 7",
    },
    {
        label: 'Step 8'
    }
]


const statusMap = {
    applied: 3,
    interview: 4,
    finalized: 5,
    revalidation: 5,
    verification: 7,
    approved: 7
}

const initState = {
    applicant: {
        firstname: '',
        lastname: '',
        photograph: '',
        dob: '',
        gender: '',
        email: '',
        mobileNumber: {
            telCode: '',
            number: ''
        },
        experience: {
            year: 0,
            month: 0
        },
        services: [],
        namePreferences: ['', '', ''],
        whatsappNumber: '',
        about: '',
        languages: [],
        address: {
            country: 'IN',
            state: '',
            city: '',
            zipcode: '',
            street: ''
        },
    },
    status: '',
    applicationId: '',
    certificates: [],
    documents: [
        {
            type: 'aadhaar',
            number: '',
            identifiedBy: ''
        },
        {
            type: 'pan',
            number: '',
            identifiedBy: ''
        },
        {
            type: 'cheque',
            identifiedBy: ''
        },
        {
            type: 'bill',
            identifiedBy: ''
        }
    ],
    bank: {
        name: '',
        branch: '',
        ifsc: '',
        accountNumber: ''
    },


}


export const ApplicationForm = ({ defaultValue = initState }) => {


    const [currentStep, setCurrentStep] = useState(statusMap[defaultValue?.status] || 0);
    const { onLoad, onFinish } = useLoading();
    const router = useRouter();
    const [open, setOpen] = useState(false)

    const [firstname, setFirstname] = useState(defaultValue?.applicant?.firstname);
    const [lastname, setLastname] = useState(defaultValue?.applicant?.lastname);
    const [photograph, setAvatar] = useState(defaultValue?.applicant?.photograph)
    const [email, setEmail] = useState(defaultValue?.applicant?.email);
    const [dob, setDob] = useState(defaultValue?.applicant?.dob);
    const [gender, setGender] = useState(defaultValue?.applicant?.gender);
    const [mobileNumber, setMobileNumber] = useState(defaultValue?.applicant?.mobileNumber?.number);
    const [whatsappNumber, setWhatsappNumber] = useState(defaultValue?.applicant?.whatsappNumber);
    const [experienceYear, setExperienceYear] = useState(defaultValue?.applicant?.experience?.year);
    const [experienceMonth, setExperienceMonth] = useState(defaultValue?.applicant?.experience?.month);
    const [about, setAbout] = useState(defaultValue?.applicant?.about);
    const [country, setCountry] = useState(defaultValue?.applicant?.address?.country);
    const [languages, setlanguages] = useState(defaultValue?.applicant?.languages);
    const [certificates, setCertificates] = useState(defaultValue?.certificates);
    const [state, setState] = useState(defaultValue?.applicant?.address?.state);
    const [city, setCity] = useState(defaultValue?.applicant?.address?.city);
    const [zipcode, setZipcode] = useState(defaultValue?.applicant?.address?.zipcode);
    const [street, setStreet] = useState(defaultValue?.applicant?.address?.street);
    const [acknowledged, setAcknowledged] = useState(defaultValue?.applicationId ? 'true' : false);
    const [services, setServices] = useState(defaultValue?.applicant?.services);
    const [namePreferences, setNamePreferences] = useState(defaultValue?.applicant?.namePreferences)

    const [accountNumber, setAccountNumber] = useState(defaultValue?.bank?.accountNumber);
    const [ifscCode, setIfscCode] = useState(defaultValue?.bank?.ifsc);

    const [documents, setDocuments] = useState(!defaultValue?.documents.length ? initState?.documents : defaultValue?.documents);

    const certificatesRef = useRef(null);
    const aadaarRef = useRef(null);
    const panRef = useRef(null);
    const billRef = useRef(null);
    const checkRef = useRef(null);
    const photographRef = useRef(null);



    const { telCode, countryName } = useMemo(() => {
        const result = countries?.find(el => el?.iso2 === country)
        return { telCode: result?.prefix, countryName: result?.name }
    }, [country]);

    const previewAvatar = useMemo(() => {
        if (photograph instanceof File) {
            return URL.createObjectURL(photograph)
        }
        return photograph
    }, [photograph])

    const handleNameChange = (index, value) => {
        const updatedNames = [...namePreferences];
        updatedNames[index] = value;
        setNamePreferences(updatedNames);
    };

    const certificatesPreview = useMemo(() => {
        const certificatesSource = []
        for (let i = 0; i < certificates.length; i++) {
            if (certificates[i] instanceof File) {
                certificatesSource.push({
                    label: `${certificates[i]?.name}`,
                    src: URL.createObjectURL(certificates[i])
                })
            }
            else {
                certificatesSource.push({
                    label: `Cerificate-${i + 1}`,
                    src: certificates[i]?.identifiedBy
                })
            }
        }
        return certificatesSource
    }, [certificates])

    const onPickCertificate = ({ target: { files } }) => {
        const newState = [...certificates];

        if (newState.length + files.length > 2) {
            return toast('Maximum 2 Certificates Allowed');
        }

        for (let i = 0; i < files.length; i++) {
            newState.push(files[i]);
        }

        setCertificates(newState)
    };

    const onRemoveCertificate = (index) => {
        const newState = [...certificates];
        newState.splice(index, 1);
        setCertificates([...newState])
    }

    const languageOptions = useMemo(() => {
        return languagesList.reduce((options, language) => {
            options[language.value] = {
                value: language.value,
                label: language.label
            };
            return options;
        }, {});
    }, []);

    const serviceOptions = useMemo(() => {
        return servicesList.reduce((options, service) => {
            options[service.value] = {
                value: service.value,
                label: service.label
            };
            return options;
        }, {});
    }, []);

    const nextStep = async () => {
        if (currentStep === 0) {
            if (!firstname || !lastname || !dob || !gender || !email || !mobileNumber || !whatsappNumber || !country || !telCode) {
                return toast('Missing required fields');
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return toast('Invalid email format');
            }

            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(mobileNumber)) {
                return toast('Invalid phone number');
            }

            if (!phoneRegex.test(whatsappNumber)) {
                return toast('Invalid whatsapp number');
            }
        }

        if (currentStep === 1 && (!about || !languages.length || !certificates.length || !services.length || namePreferences.includes(''))) {
            return toast('Missing required fields');
        }

        if (currentStep === 5) {
            const isDocumentsValid = documents.every((doc) => {
                if (doc.type === 'aadhaar' || doc.type === 'pan') {
                    return doc.number && doc.identifiedBy;
                }
                if (doc.type === 'cheque' || doc.type === 'bill') {
                    return doc.identifiedBy;
                }
                return true;
            });

            if (!isDocumentsValid || !photograph) {
                return toast('Please complete all required document fields');
            }
        }

        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const constructApplicationPayload = () => {
        const formData = new FormData();

        const files = [];

        const data = {
            application: {
                firstname,
                lastname,
                dob,
                gender,
                email,
                mobileNumber: {
                    telCode,
                    number: mobileNumber
                },
                experience: {
                    year: experienceYear,
                    month: experienceMonth
                },
                services,
                namePreferences,
                whatsappNumber,
                about,
                languages,
                address: {
                    country,
                    state,
                    city,
                    zipcode,
                    street
                }
            },
            keys: []
        }

        if (photograph instanceof File) {
            const id = uuid()
            files.push(photograph);
            data.keys.push(id)
            data['application'].photograph = id
        }

        data["certificates"] = certificates.map((el) => {
            const id = uuid();
            if (el instanceof File) {
                files.push(el);
                data?.keys.push(id);
            }
            return {
                identifiedBy: id
            }
        });

        formData.set("data", JSON.stringify(data));

        let i = 0;

        while (i < files.length && i < data?.keys.length) {
            formData.append("files", files[i])
            i++
        }

        return formData
    }


    const onSubmit = async () => {

        if (currentStep === 2 && (!street || !state || !city || !zipcode)) {
            return toast('Missing required fields');
        }

        const payload = constructApplicationPayload();

        onLoad();
        try {
            let { data } = await postApplication(payload);
            toast(data?.message);
            router.push(`${location.pathname}?applicationId=${data.data.applicationId}`)
        } catch (error) {
            toast(error?.message)
        }
        onFinish();
    };

    const getFilePreview = (type) => {
        const document = documents.find(doc => doc.type === type);
        const file = document?.identifiedBy;

        if (file instanceof File) {
            return {
                src: URL.createObjectURL(file),
                name: file.name
            };
        }

        return {
            src: file || '',
            name: `${type} file`
        };
    };



    const handleNumberChange = (type, value) => {
        const updatedDocuments = documents.map(doc =>
            doc.type === type ? { ...doc, number: value } : doc
        );
        setDocuments(updatedDocuments);
    };

    const handleFileChange = (type, file) => {
        const updatedDocuments = documents.map(doc =>
            doc.type === type ? { ...doc, identifiedBy: file } : doc
        );
        setDocuments(updatedDocuments);
    };

    const handleRemoveFile = (type) => {
        const updatedDocuments = documents.map(doc =>
            doc.type === type ? { ...doc, identifiedBy: null } : doc
        );
        setDocuments(updatedDocuments);
    };


    const onDocumentsUpload = async () => {

        if (currentStep === 6 && (!accountNumber || !ifscCode)) {
            return toast('Missing Required Fields')
        }

        const formData = new FormData;

        const files = [];

        const data = {
            bank: {
                ifsc: ifscCode,
                accountNumber
            },
            status: 'verification',
            keys: [],
            applicant: {}

        }

        if (photograph instanceof File) {
            const id = uuid()
            files.push(photograph);
            data.keys.push(id)
            data.applicant.photograph = id
        }

        data['documents'] = documents?.map((el) => {
            const id = uuid();
            files.push(el?.identifiedBy);
            data?.keys.push(id);
            if (el?.type === 'cheque') {
                data.bank.identifiedBy = id
            }
            return { ...el, identifiedBy: id }
        })

        formData.set('data', JSON.stringify(data));


        let i = 0;

        while (i < files.length && i < data?.keys.length) {
            formData.append("files", files[i])
            i++
        }
        onLoad();
        try {
            let { data } = await patchApplication(defaultValue?.applicationId, formData)
            toast(data?.message);
            setCurrentStep(7)
            refresh();

        } catch (error) {
            toast(error?.message)
        }
        onFinish();
    }


    const isActiveStep = (index) => {

        const activeServerIndex = statusMap[defaultValue?.status];
        if (index === 3) {
            return (index === currentStep) || (currentStep > index) || (index <= activeServerIndex)
        }

        if (index === steps.length - 1) {
            return (defaultValue?.status === 'approved') || (index < activeServerIndex)
        }
        return (index < currentStep) || (index < activeServerIndex)
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-GB', {
            dateStyle: 'short',
            timeStyle: 'short',
            hourCycle: 'h12' // Adds AM/PM to the time format
        }).format(date);
    };


    return (
        <div className="rounded-xl overflow-hidden flex gap-0 md:gap-5 h-[calc(100vh - 72px)] md:h-full">

            {/* Stepper */}
            <section className="min-w-72 hidden md:block rounded-xl bg-secondary relative " >

                <div className="sticky h-[150px] top-0">
                    <div className="flex items-center w-full justify-between">
                        <Logo className="w-24 h-24" href="/" color={'purple'} />
                    </div>
                    <h2 className="text-2xl pl-4 text-primary font-semibold"> New Application </h2>
                </div>

                <div className="h-[calc(100%-230px)] overflow-y-auto pt-2">
                    <ol className="relative ml-6 text-gray-500 border-s-2 border-gray-400">
                        {steps?.map((el, index) => <li key={index} className={` mb-6 ms-6`}>
                            <span
                                className={`absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 
                            ${isActiveStep(index) ? 'bg-green-700 ring-0' : 'bg-secondary ring-1'}  bg ring-primary`}
                            >
                                {isActiveStep(index) && <Check className="text-white w-4 h-4" />}
                            </span>
                            <h3
                                className={`${isActiveStep(index) ?
                                    'text-green-700 font-medium' :
                                    index > currentStep ? 'opacity-50' :
                                        'text-primary'
                                    }`
                                }>
                                {el?.label}
                            </h3>
                        </li>)}

                    </ol>
                </div>

                <div className="sticky h-[80px] bg-secondary bottom-0 left-0 right-0 p-4">
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger className="w-full" asChild>
                            <Button className={'rounded-full font-normal'} >
                                <SearchCheck className=" text-white" />
                                <span className="cursor-pointer">
                                    Track Existing Application
                                </span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="text-center">
                            <p className="text-center font-[500] text-primary text-2xl">Check Your Application Status</p>
                            <p className="text-muted">Enter your application number to check status</p>

                            <form className="flex flex-col gap-6 items-center text-center w-max mx-auto" onSubmit={() => { setOpen(false); onLoad() }}>
                                <InputOTP
                                    name={'applicationId'}
                                    pattern={/[A-Za-z0-9]+/}
                                    maxLength={6}
                                >
                                    <InputOTPGroup>
                                        <InputOTPSlot className={'size-10 md:size-14'} index={0} />
                                        <InputOTPSlot className={'size-10 md:size-14'} index={1} />
                                        <InputOTPSlot className={'size-10 md:size-14'} index={2} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot className={'size-10 md:size-14'} index={3} />
                                        <InputOTPSlot className={'size-10 md:size-14'} index={4} />
                                        <InputOTPSlot className={'size-10 md:size-14'} index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                                <Button className="w-full h-12 mt-4" variant="gradientPurple">Check Status</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>

            </section>

            {/* Form Elements */}

            <div className="w-full relative flex flex-col gap-0 md:gap-5 " >
                <div className="p-6 mb-20 md:mb-0 w-full overflow-y-auto pb-40 rounded-xl h-full shadow-none border-[0px] md:border-[1px] bg-white">
                    {currentStep === 0 &&
                        <section
                            className={`
                        ${defaultValue?.applicationId && 'pointer-events-none cursor-not-allowed select-none opacity-50'} 
                        grid w-full grid-cols-1 lg:grid-cols-2 place-content-start gap-10 `}
                        >
                            <FlexColInput
                                value={firstname}
                                onChange={({ target: { value } }) => setFirstname(value)}
                                label={'First Name'}
                                placeholder="Enter First Name"
                            />
                            <FlexColInput
                                value={lastname}
                                onChange={({ target: { value } }) => setLastname(value)}
                                label={'Last Name'}
                                placeholder="Enter Last Name"
                            />
                            <FlexColInput
                                value={dob ? new Date(dob).toISOString().split('T')[0] : ""}
                                onChange={({ target: { value } }) => setDob(value)}
                                type="date"
                                label={'Date of Birth'}
                            />
                            <FlexColInput label="Gender">
                                <select
                                    value={gender}
                                    onChange={({ target: { value } }) => setGender(value)}
                                    name="gender"
                                    className="p-3 w-full h-12 rounded-lg border placeholder:text-muted focus:ring-1 focus:ring-primary"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </FlexColInput>

                            <FlexColInput
                                className="lg:col-span-2"
                                type="email"
                                label="Email Address"
                                value={email}
                                onChange={({ target: { value } }) => setEmail(value)}
                                placeholder="example@gmail.com"
                            />
                            <FlexColInput
                                type="number"
                                label="Phone Number">
                                <div className="w-full flex border rounded-md py-3 px-2">
                                    <select
                                        required
                                        value={country}
                                        onChange={({ target: { value } }) => setCountry(value)}
                                        className="border-0 w-24 mr-2 outline-none"
                                    >
                                        {countries?.map(({ name, iso2 }) => <option value={iso2} key={name}>{name}</option>)}
                                    </select>
                                    <p>+{telCode}</p>
                                    <input
                                        name="mobileNumber"
                                        type="number"
                                        required
                                        className="border-0 w-full ml-2 outline-none"
                                        maxLength={10}
                                        placeholder="Enter Number"
                                        value={mobileNumber}
                                        onChange={({ target: { value } }) => setMobileNumber(value)}
                                    />
                                </div>
                            </FlexColInput>


                            <FlexColInput type="number" label="Whatsapp Number">
                                <div className="w-full flex border rounded-md py-3 px-2">
                                    <p>+{telCode}</p>
                                    <input
                                        name="whatsappNumber"
                                        type="number"
                                        value={whatsappNumber}
                                        onChange={({ target: { value } }) => setWhatsappNumber(value)}
                                        required
                                        className="border-0 w-full ml-2 outline-none"
                                        maxLength={10}
                                        placeholder="Enter Number"
                                    />
                                </div>
                            </FlexColInput>
                        </section>
                    }

                    {currentStep === 1 &&
                        <section
                            className={`
                        ${defaultValue?.applicationId && 'pointer-events-none cursor-not-allowed select-none opacity-50'} 
                        grid w-full grid-cols-1 lg:grid-cols-2 place-content-start gap-10 `}>
                            <FlexColInput
                                className={'lg:col-span-2'}
                                label={'About You'}
                            >
                                <textarea
                                    rows={6}
                                    value={about}
                                    onChange={({ target: { value } }) => setAbout(value)}
                                    className="border p-3 rounded-lg w-full"
                                    placeholder="Write about yourself"
                                />
                            </FlexColInput>

                            <FlexColInput label="Experience">
                                <div className="flex items-center gap-4">
                                    <select
                                        className="border p-3 rounded-lg w-full"
                                        value={experienceYear}
                                        onChange={({ target: { value } }) => setExperienceYear(value)}
                                    >
                                        {new Array(50).fill(0).map((_, index) => <option
                                            key={index + 1}
                                            value={index}
                                        >
                                            {index}
                                        </option>
                                        )}
                                    </select>

                                    <select
                                        className="border p-3 rounded-lg w-full"
                                        value={experienceMonth}
                                        onChange={({ target: { value } }) => setExperienceMonth(value)}
                                    >
                                        {new Array(12).fill(0).map((_, index) => <option
                                            key={index + 1}
                                            value={index}
                                        >
                                            {index}
                                        </option>
                                        )}
                                    </select>
                                </div>
                            </FlexColInput>

                            <FlexColInput label="Language Known" required>
                                <ReactMultiSelect
                                    value={languages}
                                    onChange={(e) => setlanguages(e)}
                                    name="languages"
                                    options={Object.values(languageOptions)}
                                />
                            </FlexColInput>

                            <FlexColInput className="lg:col-span-2" label="Select Services to be Provided" required>
                                <ReactMultiSelect
                                    value={services}
                                    onChange={(e) => setServices(e)}
                                    name="services"
                                    options={Object.values(serviceOptions)}
                                />
                            </FlexColInput>

                            <FlexColInput className="lg:col-span-2" label="Please enter up to three names you would like displayed on your profile.">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                    {namePreferences.map((name, index) => <input
                                        className="border p-3 rounded-lg w-full"
                                        key={index}
                                        type="text"
                                        placeholder={`Enter preferred name ${index + 1}`}
                                        value={name}
                                        onChange={(e) => handleNameChange(index, e.target.value)}
                                        maxLength="50"
                                    />
                                    )}
                                </div>
                            </FlexColInput>

                            <FlexColInput
                                className="lg:col-span-2"
                                label="Upload Certificates (max 2)"
                            >
                                <input
                                    onChange={onPickCertificate}
                                    ref={certificatesRef}
                                    type="file"
                                    multiple
                                    accept=".pdf, image/*"
                                    className="hidden"
                                />
                                <div className="flex flex-col md:flex-row gap-4 lg:items-center justify-between">
                                    <div className="grid border grid-cols-1 md:grid-cols-2 w-full gap-3 overflow-y-auto max-h-44 rounded-lg p-3">
                                        {!certificatesPreview.length ?
                                            <p className="text-gray-400">Accept only png, jpg and pdf files (allowed max 2 files)</p> :
                                            certificatesPreview?.map((el, index) => <div className="flex p-2 rounded-lg justify-between  bg-gray-100 items-center gap-4" key={el?.label}>
                                                <Link target={'_blank'} className="text-blue-700 line-clamp-1" href={el?.src}>
                                                    {el?.label}
                                                </Link>
                                                <X onClick={() => onRemoveCertificate(index)} className="w-4 h-4 min-w-4 rounded-full bg-red-600 text-white" />
                                            </div>)
                                        }
                                    </div>
                                    <Upload onClick={() => certificatesRef.current.click()} className="text-primary" />
                                </div>
                            </FlexColInput>
                        </section>
                    }

                    {currentStep === 2 &&
                        <section
                            className={`
                        ${defaultValue?.applicationId && 'pointer-events-none cursor-not-allowed select-none opacity-50'} 
                        grid w-full grid-cols-1 lg:grid-cols-2 place-content-start gap-10 `}>

                            <FlexColInput
                                value={street}
                                onChange={({ target: { value } }) => setStreet(value)}
                                className="lg:col-span-2" label="Street" placeholder="Enter your Address"
                            />
                            <FlexColInput
                                className="select-none pointer-events-none"
                                readOnly
                                type="text"
                                label="Country"
                                value={countryName}
                                placeholder="Country"
                            />
                            <FlexColInput
                                label="State"
                                placeholder="State">
                                <select
                                    value={state}
                                    onChange={({ target: { value } }) => setState(value)}
                                    required
                                    name="state"
                                    className="border p-2 w-full h-12 rounded-lg border-input placeholder:text-muted focus:ring-1 focus:ring-primary"
                                >
                                    <option value="">Select State</option>
                                    {State.getStatesOfCountry(country)?.map((el) => <option
                                        key={el?.isoCode}
                                        value={el?.isoCode}
                                    >
                                        {el?.name}
                                    </option>
                                    )}
                                </select>
                            </FlexColInput>
                            <FlexColInput label="City" placeholder="City">
                                <select
                                    disabled={!state}
                                    value={city}
                                    onChange={({ target: { value } }) => setCity(value)}
                                    name="city" required className="border p-2 w-full h-12 rounded-lg border-input placeholder:text-muted focus:ring-1 focus:ring-primary"
                                >
                                    <option value="">Select City</option>
                                    {City.getCitiesOfState(country, state)?.map((el) => <option
                                        key={el?.name}
                                        value={el?.name}
                                    >
                                        {el?.name}
                                    </option>)}
                                </select>
                            </FlexColInput>
                            <FlexColInput
                                type="number"
                                label="Zipcode"
                                value={zipcode}
                                onChange={({ target: { value } }) => setZipcode(value)}
                                placeholder="Enter Pincode" />
                            <div className="flex lg:col-span-2 mt-16 w-full">
                                <input
                                    type="checkbox"
                                    id="acknowledge"
                                    className="mr-2 w-4 h-4"
                                    checked={acknowledged}
                                    onChange={(e) => setAcknowledged(e.target.checked)}
                                />
                                <label htmlFor="acknowledge" className="text-primary text-sm md:text-md">
                                    By Clicking on Submit , I declare that all data is true and match with my legal proofs.
                                </label>
                            </div>
                        </section>
                    }

                    {(currentStep === 3) &&
                        <section
                            className="bg-center flex flex-col justify-center  text-center items-center bg-contain h-full bg-no-repeat"
                            style={{
                                backgroundImage: "url('/bg-zodiac-circle.png')"
                            }}>
                            <div className="space-y-6">
                                <img className="w-28 m-auto" src="/Icons/thumsup.png" alt="thumbsup" />
                                <p className="text-3xl md:text-3xl text-primary font-medium">We have got your application!</p>
                                <p className="text-primary w-full lg:w-2/3 m-auto text-md md:text-lg opacity-95">
                                    Your application is under verification, After verification we will send you a interview details
                                </p>
                                <p className="text-primary ">Your Application Number: <span className="font-semibold whitespace-nowrap"> {defaultValue?.applicationId} </span></p>
                                <Link href="/" className="inline-block">
                                    <Button variant="gradientPurple" size="sm">Back To Home</Button>
                                </Link>
                            </div>
                        </section>
                    }


                    {(currentStep === 4) &&
                        <section
                            className="bg-center flex flex-col justify-center text-center items-center bg-contain h-full bg-no-repeat"
                            style={{
                                backgroundImage: "url('/bg-zodiac-circle.png')"
                            }}
                        >
                            {defaultValue?.status === 'interview' ? <div className="space-y-4">
                                <img className="w-28 m-auto" src="/Icons/thumsup.png" alt="thumbsup" />
                                <p className="text-3xl md:text-4xl text-primary font-medium">Your Interview is Scheduled!</p>
                                <p className="text-primary w-full lg:w-2/3 m-auto  text-md md:text-lg opacity-95">
                                    We have scheduled your interview. Please find the interview date, time, and link below.
                                </p>
                                <p className="text-primary">Your Application Number: <span className="font-semibold whitespace-nowrap">{defaultValue?.applicationId}</span></p>
                                <div className="text-primary w-full lg:w-2/3 m-auto text-md md:text-lg opacity-95">
                                    <p className="text-md">Start Time : <span>{formatDate(defaultValue?.interview?.start)}</span> </p>
                                    <p className="text-md mb-6">End Time : <span>{formatDate(defaultValue?.interview?.end)}</span> </p>

                                    <Link target={'_blank'} href={defaultValue?.interview?.meetLink} className="text-blue-600 underline">
                                        <Button variant="gradientPurple">Join Interview</Button>
                                    </Link>
                                </div>
                            </div> :
                                <div className="space-y-4">
                                    <img className="w-28 m-auto" src="/Icons/thumsup.png" alt="thumbsup" />
                                    <p className="text-3xl md:text-3xl text-primary font-medium">Your have cracked your Interview !</p>
                                    <p className="text-primary">Your Application Number: <span className="font-semibold whitespace-nowrap">{defaultValue?.applicationId}</span></p>
                                    <Link href="/" className="inline-block">
                                        <Button variant="gradientPurple" size="sm">Back To Home</Button>
                                    </Link>
                                </div>
                            }
                        </section>
                    }

                    {currentStep === 5 &&
                        <section
                            className={`
                              ${(defaultValue?.status == 'verification' ||
                                    defaultValue?.status === 'approved') &&
                                'pointer-events-none cursor-not-allowed select-none opacity-50'} 
                        grid w-full grid-cols-1 place-content-start gap-10 `}>

                            <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 lg:col-span-2 justify-between">
                                <div className="space-y-4 order-last lg:order-none">
                                    <FlexColInput
                                        name="aadhaarNumber"
                                        placeholder="Enter Aadhaar Number"
                                        label="Aadhaar Number"
                                        type="number"
                                        value={documents?.find(doc => doc.type === "aadhaar")?.number}
                                        onChange={(e) => handleNumberChange('aadhaar', e.target.value)}
                                    />

                                    {!getFilePreview('aadhaar')?.src ? <div onClick={() => aadaarRef?.current.click()} className="flex mt-2 text-primary items-center gap-2">
                                        <Upload className="min-w-6 w-6 h-6" />
                                        <p className="text-sm lg:text-md">upload aadhaar card (.png/.jpg), max size 2mb</p>
                                        <input
                                            onChange={({ target: { files } }) => handleFileChange('aadhaar', files[0])}
                                            type="file"
                                            ref={aadaarRef}
                                            className="hidden"
                                        />
                                    </div> : <div className="flex p-2 rounded-lg w-fit mt-2 bg-gray-100 items-center gap-4">
                                        <Link target={'_blank'} className="text-blue-700 line-clamp-1" href={getFilePreview('aadhaar')?.src}>
                                            {getFilePreview('aadhaar')?.name}
                                        </Link>
                                        <X onClick={() => handleRemoveFile('aadhaar')} className="w-4 h-4 rounded-full bg-red-600 text-white" />
                                    </div>}

                                    <FlexColInput
                                        name="panNumber"
                                        placeholder="Enter Pan Number"
                                        label="Pan Number"
                                        type="tel"
                                        maxLength={10}
                                        value={documents?.find(doc => doc.type === "pan")?.number}
                                        onChange={(e) => handleNumberChange('pan', e.target.value)}
                                    />

                                    {!getFilePreview('pan')?.src ? <div onClick={() => panRef?.current.click()} className="flex mt-2 text-primary items-center gap-2">
                                        <Upload className="min-w-6 w-6 h-6" />
                                        <p className="text-sm lg:text-md">upload pan card (.png/.jpg), max size 2mb</p>
                                        <input
                                            onChange={({ target: { files } }) => handleFileChange('pan', files[0])}
                                            type="file"
                                            ref={panRef}
                                            className="hidden"
                                        />
                                    </div> : <div className="flex p-2 rounded-lg w-fit mt-2 bg-gray-100 items-center gap-4">
                                        <Link target={'_blank'} className="text-blue-700 line-clamp-1" href={getFilePreview('pan')?.src}>
                                            {getFilePreview('pan')?.name}
                                        </Link>
                                        <X onClick={() => handleRemoveFile('pan')} className="w-4 h-4 rounded-full bg-red-600 text-white" />
                                    </div>}
                                </div>


                                <div className="flex flex-col gap-2 items-center justify-center">
                                    <input onChange={({ target: { files } }) => setAvatar(files[0])} className="hidden" type="file" ref={photographRef} accept="image/*" />
                                    <Avatar onClick={() => photographRef?.current?.click()} className="w-40 h-40 border bg-white">
                                        <AvatarImage src={previewAvatar} />
                                        <AvatarFallback className="bg-white">
                                            <ImageUp className="w-10 h-10 text-muted" strokeWidth={1.2} />
                                        </AvatarFallback>
                                    </Avatar>
                                    <p className="text-primary font-[500]">Upload Photograph <span className="text-red-600">*</span></p>
                                </div>
                            </div>

                            <FlexColInput
                                className="col-span-2"
                                label="ELectricity Bill for Address Proof"
                            >
                                <input
                                    onChange={({ target: { files } }) => handleFileChange('bill', files[0])}
                                    type="file"
                                    ref={billRef}
                                    accept=".pdf, image/*"
                                    className="hidden"
                                />

                                <div className="flex flex-col md:flex-row gap-4 lg:items-center justify-between">
                                    <div className="grid border grid-cols-1 md:grid-cols-2 w-full gap-3 overflow-y-auto max-h-44 rounded-lg p-3">
                                        {!getFilePreview('bill')?.src ?
                                            <p className="text-gray-400">Upload file (.png/.jpg), max size 2mb</p> :
                                            <div className="flex p-2 rounded-lg justify-between  bg-gray-100 items-center gap-4">
                                                <Link target={'_blank'} className="text-blue-700 line-clamp-1 max-w-44" href={getFilePreview('bill')?.src}>
                                                    {getFilePreview('bill')?.name}
                                                </Link>
                                                <X onClick={() => handleRemoveFile('bill')} className="w-4 h-4 min-w-4 rounded-full bg-red-600 text-white" />
                                            </div>
                                        }
                                    </div>
                                    <Upload onClick={() => billRef?.current.click()} className="text-primary" />
                                </div>
                            </FlexColInput>

                            <FlexColInput
                                className="col-span-2"
                                label="Cancellled Cheque Copy"
                            >
                                <input
                                    onChange={({ target: { files } }) => handleFileChange('cheque', files[0])}
                                    type="file"
                                    ref={checkRef}
                                    accept=".pdf, image/*"
                                    className="hidden"
                                />
                                <div className="flex flex-col md:flex-row gap-4 lg:items-center justify-between">
                                    <div className="grid border grid-cols-1 md:grid-cols-2 w-full gap-3 overflow-y-auto max-h-44 rounded-lg p-3">
                                        {!getFilePreview('cheque')?.src ?
                                            <p className="text-gray-400">Upload file (.png/.jpg), max size 2mb</p> :
                                            <div className="flex p-2 rounded-lg justify-between  bg-gray-100 items-center gap-4">
                                                <Link target={'_blank'} className="text-blue-700 line-clamp-1 max-w-44" href={getFilePreview('cheque')?.src}>
                                                    {getFilePreview('cheque')?.name}
                                                </Link>
                                                <X onClick={() => handleRemoveFile('cheque')} className="w-4 h-4 min-w-4 rounded-full bg-red-600 text-white" />
                                            </div>
                                        }
                                    </div>
                                    <Upload onClick={() => checkRef?.current.click()} className="text-primary" />
                                </div>
                            </FlexColInput>
                        </section>
                    }

                    {currentStep === 6 &&
                        <section
                            className={`
                             ${(defaultValue?.status == 'verification' ||
                                    defaultValue?.status === 'approved') &&
                                'pointer-events-none cursor-not-allowed select-none opacity-50'} 
                        grid w-full grid-cols-1 place-content-start gap-8 `}>


                            <FlexColInput
                                value={accountNumber}
                                onChange={({ target: { value } }) => setAccountNumber(value)}
                                type="number"
                                label="Account Number"
                                placeholder="Enter your Account Number"
                            />
                            <FlexColInput
                                type="tel"
                                maxLength={12}
                                value={ifscCode}
                                onChange={({ target: { value } }) => setIfscCode(value.toUpperCase())}
                                label="IFSC Code" placeholder="Enter IFSC Code"
                            />
                        </section>
                    }

                    {(currentStep === 7) &&
                        <section
                            className="bg-center flex flex-col justify-center  text-center items-center bg-contain h-full bg-no-repeat"
                            style={{
                                backgroundImage: "url('/bg-zodiac-circle.png')"
                            }}
                        >
                            {
                                defaultValue?.status === 'verification' &&
                                <div className="space-y-6">
                                    <img className="w-28 m-auto" src="/Icons/thumsup.png" alt="thumbsup" />
                                    <p className="text-3xl md:text-4xl text-primary font-medium">We have received your Documents!</p>
                                    <p className="text-primary w-full lg:w-2/3 m-auto text-md md:text-lg opacity-95">
                                        Your application is under verification, After verification we will send you the Login Details
                                    </p>
                                    <p className="text-primary">Your Application Number: <span className="font-semibold whitespace-nowrap">{defaultValue?.applicationId}</span></p>
                                    <Link href="/" className="inline-block">
                                        <Button variant="gradientPurple" size="sm">Back To Home</Button>
                                    </Link>
                                </div>
                            }

                            {
                                defaultValue?.status === 'approved' &&
                                <div className="space-y-6">
                                    <img className="w-28 m-auto" src="/Icons/thumsup.png" alt="thumbsup" />
                                    <p className="text-3xl md:text-4xl text-primary font-medium">Your Application is Approved</p>
                                    <p className="text-primary w-full lg:w-2/3 m-auto text-md md:text-lg opacity-95">
                                        You can Login with your Credentials
                                    </p>
                                    <p className="text-primary">Your Application Number: <span className="font-semibold whitespace-nowrap">{defaultValue?.applicationId}</span></p>
                                    <Link href="/?origin=astrologer" className="inline-block">
                                        <Button variant="gradientPurple" size="sm">Login</Button>
                                    </Link>
                                </div>
                            }

                        </section>
                    }
                </div>

                <div
                    className="w-full fixed md:relative bottom-0 md:rounded-xl bg-white flex items-center justify-between gap-4 border-[1px] p-4"
                >
                    <div className="flex items-center gap-6 lg:gap-10">

                        {currentStep > 0 && (
                            <Button disabled={defaultValue?.status === 'interview'} variant={'secondary'} type="button" onClick={prevStep}>
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back
                            </Button>
                        )}

                        {
                            (
                                (!defaultValue?.applicationId && currentStep === 2) ||
                                (
                                    (statusMap[defaultValue?.status] === 5) &&
                                    (currentStep === 6)
                                )
                            ) ? (
                                <Button
                                    onClick={defaultValue?.applicationId ? onDocumentsUpload : onSubmit}
                                    variant="gradientPurple"
                                    type="button" disabled={!acknowledged}
                                >
                                    Submit <CircleCheck className="ml-2 h-4 w-4" />
                                </Button>
                            )
                                :
                                (
                                    (
                                        (currentStep < steps.length - 1 && currentStep < statusMap[defaultValue?.status] && currentStep !== 3) ||
                                        (statusMap[defaultValue?.status] === 5) ||
                                        (currentStep < steps.length - 1 && (currentStep !== 3 || statusMap[defaultValue?.status] > 2))
                                    ) && (
                                        <Button
                                            disabled={(defaultValue?.status === 'applied' || defaultValue?.status === 'interview') && currentStep >= 3}
                                            variant="gradientPurple"
                                            className="disabled:cursor-not-allowed"
                                            onClick={nextStep}>
                                            Next  <ArrowRight className="ml-2 text-white h-4 w-4" />
                                        </Button>
                                    )
                                )
                        }
                    </div>

                    <Button onClick={() => setOpen(true)} size="icon" className={'flex md:hidden'}>
                        <SearchCheck className="text-white" />
                    </Button>
                </div>

            </div>

        </div >
    )
}
