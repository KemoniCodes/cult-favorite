import React, { useRef, useState, useEffect } from "react";

export default function Form() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [validForm, setValidForm] = useState(false)
    const [validEmail, setValidEmail] = useState(true)
    const [fullNameInput, setfullNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [budgetInput, setBudgetInput] = useState('')
    const [servicesInput, setServicesInput] = useState('')
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);


    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        if (name === 'full_name') setfullNameInput(value);
        else if (name === 'email') setEmailInput(value);
        else if (name === 'budget') setBudgetInput(value);
        else if (name === 'services') setServicesInput(value);
        if (name === 'email'){setValidEmail(validateEmail(value))}
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
    
        if (!validateEmail(emailInput)) {
            setValidEmail(false);
            return;
        }
        setValidEmail(true);
    
        const form = e.target;
        const formData = new FormData(form);
        const requestOptions = {
            method: 'POST',
            body: formData,
            // mode: 'no-cors' as RequestMode
        };
        try {
            const response = await fetch(form.action, requestOptions);
            if (response.status === 200) {
                setFormSubmitted(true);
                setValidForm(true);
                console.log('valid', validForm);
                console.log('form', formSubmitted);
            } else {
                setFormSubmitted(false);
                setValidForm(false)
            }
        } catch (error) {

        }
    };
    

   

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(email);
    };



    const handleButtonClick = () => {
        setSubmitButtonClicked(true);

        console.log('valid', validForm);
        console.log('form', formSubmitted);
        if (validForm) {
            setFormSubmitted(true);
            console.log('valid', validForm);
            console.log('form', formSubmitted);
            setTimeout(() => {
                setFormSubmitted(false);
                formRef?.current?.classList.remove('hidden');
                formRef?.current?.reset();
                setfullNameInput('');
                setEmailInput('');
                setBudgetInput('');
                setServicesInput('');
            }, 3000);
            formRef?.current?.classList.add('hidden');
        }

   
    };
    return (
        <>
            {formSubmitted && <h3 className="successMessage pt-16">Form submitted successfully!</h3>}

            <form action="https://postend.vercel.app/n/gAAAAABmGeveAd_SEHJf_e6lF-H6NhdT5yRsDnlebfku-7P8nJkFUkOqvsKH8Oh7VO5Ec0w7wHeI-bfzUYdnD9sI3DHUkOLZUx4Ug8oLrVcdiToz2FHuizBuEzduJO-1NporZEIZRbzituf7YB7xO8ISr_ehEf6qLVq2b4RnZYvJWhNuqSqdUxkt_9ayyNKZItblGcMLEUbx" method="POST" onSubmit={handleSubmit} ref={formRef} className="w-[80%] m-auto mt-24 clientInquiryForm">

                <div className="lg:flex block gap-24 justify-between lg:pb-8 pb-0">
                    <div className="flex flex-col w-full lg:pb-0 pb-[2.5rem]">
                        <label htmlFor='full_name'
                            className={submitButtonClicked && fullNameInput === '' ? 'labelError h3 text-left pb-2' : 'h3 text-left pb-2'}>full name*</label>
                        <input type="text" name="full_name" id="full_name"
                            value={fullNameInput}
                            onChange={handleInputChange}
                            
                            className={submitButtonClicked && fullNameInput === '' ? 'inputError' : ''}
                        />
                    </div>
                    <div className="flex flex-col w-full lg:pb-0 pb-[2.5rem]">
                        <label htmlFor='email' className={submitButtonClicked && emailInput === '' || submitButtonClicked &&!validEmail ? 'labelError h3 text-left pb-2' : 'h3 text-left pb-2'}>
                            email*
                        </label>
                        {submitButtonClicked && !validEmail  && emailInput != '' && <h4 className="text-right text-red-600">enter valid email</h4>} 
                        <input id="email" type="email" name="email"
                            value={emailInput}
                            onChange={handleInputChange}
                            
                            className={submitButtonClicked && emailInput === ''|| submitButtonClicked &&!validEmail ? 'inputError' : ''}
                        />
                    </div>
                </div>
                <div className="lg:flex block gap-24 justify-between pb-8">
                    <div className="flex flex-col w-full lg:pb-0 pb-[2.5rem]">
                        <label htmlFor='business_name' className="h3 text-left pb-2">business name</label>
                        <input type="text" name="business_name" />
                    </div>
                    <div className="flex flex-col w-full lg:pb-0 pb-[2.5rem]">
                        <label htmlFor='budget' className={submitButtonClicked && budgetInput === '' ? 'labelError h3 text-left pb-2' : 'h3 text-left pb-2'}
                        >budget*</label>
                        <select name="budget" id="budget"
                            value={budgetInput}
                            onChange={handleInputChange}
                            className={submitButtonClicked && budgetInput === '' ? 'selectError h3' : 'h3'}
                            >
                            <option value="<10K">&lt;10k</option>
                            <option value=">10K">&gt;10k</option>
                        </select>
                    </div>
                </div>

                <div className="lg:flex block flex-col pb-16 lg:w-1/2 w-full">
                    <label htmlFor='findUs' className="h3 text-left pb-2 lg:float-none float-left">how'd you hear about the studio?</label>
                    <select name="findUs" id="findUs" className="h3 lg:w-auto w-full lg:mt-0 mt-4">
                        <option value="instagram">instagram</option>
                        <option value="refferal">referral</option>
                        <option value="behance">behance</option>
                        <option value="linkedin">linkedin</option>
                        <option value="google">google</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor='services' className=
                        {submitButtonClicked && servicesInput === '' ? 'labelError h3 text-left pb-2' : 'h3 text-left pb-2'}
                    >what do you need help with?*</label>
                    <textarea id="services" name="services" className={submitButtonClicked && servicesInput === '' ? 'inputError h3' : 'h3'}
                        value={servicesInput}
                        onChange={handleInputChange}
                        ></textarea>
                </div>
                <div className="flex">
                    <button type="submit" onClick={handleButtonClick} 
                    className="h3 hover:!text-offBlack bg-transparent border-[1.5px] border-blancheWhite text-blancheWhite py-[.8rem] px-8 button hover:bg-tarantinoYellow hover:border-tarantinoYellow hover:rounded-[.8rem] mt-8 duration-200 ease-in-out">Submit
                    </button>
                </div>
            </form>
        </>
    );
}