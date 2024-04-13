import React, { useRef, useState } from "react";

export default function Form() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const requestOptions = {
            method: 'POST',
            body: formData,
            mode: 'no-cors' as RequestMode
        };
        try {
            const response = await fetch(form.action, requestOptions);
            if (response.ok) {
                setFormSubmitted(true);
            } else {
                setFormSubmitted(false);
            }
        } catch (error) {

        }
    };

    const handleButtonClick = () => {
        formRef?.current?.classList.add('hidden');
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            formRef?.current?.classList.remove('hidden');
            formRef?.current?.reset();
        }, 3000);
    };
    return (
        <>
            {formSubmitted && <h3 className="successMessage pt-16">Form submitted successfully!</h3>}

            <form action="https://postend.vercel.app/n/gAAAAABmGeveAd_SEHJf_e6lF-H6NhdT5yRsDnlebfku-7P8nJkFUkOqvsKH8Oh7VO5Ec0w7wHeI-bfzUYdnD9sI3DHUkOLZUx4Ug8oLrVcdiToz2FHuizBuEzduJO-1NporZEIZRbzituf7YB7xO8ISr_ehEf6qLVq2b4RnZYvJWhNuqSqdUxkt_9ayyNKZItblGcMLEUbx" method="POST" onSubmit={handleSubmit} ref={formRef} className="w-[80%] m-auto mt-24">

                <div className="lg:flex block gap-24 justify-between lg:pb-8 pb-0">
                    <div className="flex flex-col w-full lg:pb-0 pb-[2.5rem]">
                        <label htmlFor='first_name' className="h3 text-left pb-2">first name</label>
                        <input type="text" name="first_name" />
                    </div>
                    <div className="flex flex-col w-full lg:pb-0 pb-[2.5rem]">
                        <label htmlFor='email' className="h3 text-left pb-2">email</label>
                        <input type="email" name="email" />
                    </div>
                </div>
                <div className="lg:flex block gap-24 justify-between pb-8">
                    <div className="flex flex-col w-full lg:pb-0 pb-[2.5rem]">
                        <label htmlFor='business_name' className="h3 text-left pb-2">business name</label>
                        <input type="text" name="business_name" />
                    </div>
                    <div className="flex flex-col w-full lg:pb-0 pb-[2.5rem]">
                        <label htmlFor='budget' className="h3 text-left pb-2">budget</label>
                        <select name="budget" id="budget" className="h3">
                            <option value="<10K">&lt;10k</option>
                            <option value=">10K">&gt;10k</option>
                        </select>
                    </div>
                </div>

                <div className="lg:flex block flex-col pb-16 lg:w-1/2 w-full">
                    <label htmlFor='findUs' className="h3 text-left pb-2 lg:float-none float-left">how&apos;d you hear about the studio?</label>
                    <select name="findUs" id="findUs" className="h3 lg:w-auto w-full lg:mt-0 mt-4">
                        <option value="instagram">instagram</option>
                        <option value="refferal">referral</option>
                        <option value="behance">behance</option>
                        <option value="linkedin">linkedin</option>
                        <option value="google">google</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor='services' className="h3 text-left pb-2">what do you need help with?</label>
                    <textarea name="services" className="h3"></textarea>
                </div>
                <div className="flex">
                    <button onClick={handleButtonClick} type="submit" className="h3 hover:!text-offBlack bg-transparent border-[1.5px] border-blancheWhite text-blancheWhite py-[.8rem] px-8 button hover:bg-tarantinoYellow hover:border-tarantinoYellow hover:rounded-[.8rem] mt-8 duration-200 ease-in-out">Submit</button>
                </div>
            </form>
        </>
    )
}