import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SponsorForm = () => {
    const navigate = useNavigate();

    function clickhandler(e){
        

    }

    const [sponsor, setSponsor] = useState({
        account : "",
        Name : "",
        company :"",
        phone : "",
        desc : "",
        product : "",
        sponsorship : "",
        facilities : "",
        linkedIn : "",
        email : ""
    });

    let name, value;
    const getSponsorData = (e) => {
        name = e.target.name;
        value = e.target.value;
        
        setSponsor({...sponsor, [name]:value})
    }

    const postData = async (e) => {
        e.preventDefault();
        console.log("Data submitted");

        const {account, Name, company, phone, desc, product, sponsorship, facilities, linkedIn, email } = sponsor;
        const res = await fetch("https://sponsorform-e9033-default-rtdb.firebaseio.com/SponsorForm.json", {

            method: "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body:JSON.stringify({
                account,
                Name,
                company,
                phone,
                desc,
                product,
                sponsorship,
                facilities,
                linkedIn,
                email
            })
            
        })
        if(res){
            setSponsor({
                account : "",
                Name : "",
                company : "",
                phone : "",
                desc : "",
                product : "",
                sponsorship : "",
                facilities : "",
                linkedIn : "",
                email : ""
            })
        navigate('/dashboard')

        }

        toast.success("Data Stored Successfully")
    }

    

  return (

<div>
      
<section className="max-h-fit bg-gray-100/50 py-6">
    <form method='POST' autoComplete='off' noValidate className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 border-t-2 border-indigo-400 rounded-lg bg-gray-100/5 ">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
                
            </div>
        </div>
        <div className="space-y-6 bg-white">
        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">
                    Company's Name
                </h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                    <div className=" relative ">
                        <input 
                            required
                            type="text" 
                            id="user-info-email" 
                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                            placeholder="Company Name"
                            name="company"
                            value={sponsor.company}
                            onChange={getSponsorData}
                            />
                    </div>
                </div>
            </div>
                <hr/>
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">
                    Account
                </h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                    <div className=" relative ">
                        <input 
                            required
                            type="text" 
                            id="user-info-email" 
                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                            placeholder="Email"
                            name="account"
                            value={sponsor.account}
                            onChange={getSponsorData}
                            />
                    </div>
                </div>
            </div>
                <hr/>
                <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-1/3">
                        Personal info
                    </h2>
                    <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                        <div>
                            <div className=" relative ">
                                <input 
                                    type="text" 
                                    id="user-info-name" 
                                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                    placeholder="Name"
                                    name="Name"
                                    value={sponsor.Name}
                                    onChange={getSponsorData}/>
                            </div>
                        </div>
                        <div>
                            <div className=" relative ">
                                <input type="text" 
                                    id="user-info-phone" 
                                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                    placeholder="Phone number"
                                    name='phone'
                                    value={sponsor.phone}
                                    onChange={getSponsorData}/>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <hr/>

                <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-1/3">
                        Description
                    </h2>
                    <div className="max-w-sm mx-auto md:w-2/3">
                        <div className=" relative ">
                            <textarea rows="6" 
                                type="text" 
                                id="user-desc" 
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                placeholder="Write about your organisation"
                                name='desc'
                                value={sponsor.desc}
                                onChange={getSponsorData}
                                />
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-1/3">
                        Products Offered
                    </h2>
                    <div className="max-w-sm mx-auto md:w-2/3">
                        <div className=" relative ">
                            <textarea rows="4" 
                                type="text" 
                                id="product-offered" 
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                placeholder="Products offered"
                                name='product'
                                value={sponsor.product}
                                onChange={getSponsorData}/>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-1/3">
                        Maximum sponsorship
                    </h2>
                    <div className="max-w-sm mx-auto md:w-2/3">
                        <div className=" relative flex items-center">
                            ₹ <input 
                                type="number" 
                                id="min-price" 
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                placeholder="Enter the maximum sponsorship"
                                name='sponsorship'
                                value={sponsor.sponsorship}
                                onChange={getSponsorData}/>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-1/3">
                        Expected Facilities
                    </h2>
                    <div className="max-w-sm mx-auto md:w-2/3">
                        <div className=" relative ">
                            <textarea rows="4" 
                                type="text" 
                                id="product-offered" 
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                placeholder="Facilities expected from organizers"
                                name='facilities'
                                value={sponsor.facilities}
                                onChange={getSponsorData}/>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="items-center w-full pl-4 pr-4 space-y-1 text-gray-500 md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-1/3">
                        LinkedIn
                    </h2>
                    <div className="max-w-sm mx-auto md:w-2/3">
                        <div className=" relative ">
                            <input type="text" 
                                id="product-offered" 
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                name='linkedIn'
                                value={sponsor.linkedIn}
                                onChange={getSponsorData}
                                placeholder="LinkedIn Id"
                                />
                        </div>
                    </div>
                </div>

                <div className="items-center w-full pl-4 pr-4 space-y-1 text-gray-500 md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-1/3">
                        Email
                    </h2>
                    <div className="max-w-sm mx-auto md:w-2/3">
                        <div className=" relative ">
                            <input 
                                type="text" 
                                id="product-offered" 
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                placeholder="Email Id"
                                name='email'
                                value={sponsor.email}
                                onChange={getSponsorData}/>
                        </div>
                    </div>
                </div>


                <hr/>
                

                <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                    <button
                        type="submit" 
                        className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        onClick={postData}>
                        Save
                    </button>
                </div>
        </div>
    </form>
</section>

    </div>
  )
}

export default SponsorForm