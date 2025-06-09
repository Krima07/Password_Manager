import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Manager = () => {
    const ref = useRef()
    const passwordref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])
    const getpasswords= async()=>{
           let req= await fetch("http://localhost:3000/")
           let passwords = await req.json()
       
            setpasswordArray(passwords)
            console.log(passwords)
        

    }

    useEffect(() => {
        getpasswords()
        
    }, [])

    const showpassword = () => {
        passwordref.current.type = "text"
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            passwordref.current.type = "password"
        }
        else {
            ref.current.src = "icons/eyecross.png"
            passwordref.current.type = "text"
        }
    }

    const savepassword = async() => {

        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            // if any such id exit than delete it
            await fetch("http://localhost:3000/",{method:'DELETE',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:form.id})})

            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            await fetch("http://localhost:3000/",{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...form, id:uuidv4()})})
            // localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))

            // console.log([...passwordArray, form])
            setform({ site: "", username: "", password: "" })
            toast('Password saved!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            toast('Error: Password not saved!');
        }

    }


    const deletepassword = async(id) => {
        console.log("Deleting password with id ", id)
        let c = confirm("Do you really want to delete this password?")
        if (c) {
            setpasswordArray(passwordArray.filter(item => item.id !== id))
            // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
           let res=await fetch("http://localhost:3000/",{method:'DELETE',headers:{'Content-Type':'application/json'},body:JSON.stringify({id})})

            
            toast('Password Deleted!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }
    const editpassword = (id) => {
        console.log("Editing Password with id ", id)
        setform({...passwordArray.filter(i => i.id === id)[0], id: id})

        setpasswordArray(passwordArray.filter(item => item.id !== id))

    }
    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                
            />
           

            <div className="absolute top-0 -z-10 h-full w-full bg-green-100"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
            <div className=" p-2 pt-3 md:p-8 md:mycontainer">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-700'> &lt;</span>
                    <span>Pass</span><span className="text-green-700">OP/&gt;</span>

                </h1>
                <p className='text-green-900 text-lg text-center'>Your Own Password Manager</p>



                <div className="text-white flex flex-col gap-8 p-4 items-center ">
                    <input value={form.site} onChange={handlechange} placeholder='Enter Website URL' className="rounded-full border border-green-500 w-full text-black p-4 py-1" type="text" name='site' id='site' />
                    <div className='flex flex-col md:flex-row w-full justify-between gap-8'>
                        <input value={form.username} onChange={handlechange} placeholder='Enter Username' className="rounded-full border border-green-500 w-full text-black p-4 py-1" type="text" name='username' id='username' />

                        <div className="relative right-0">
                            <input ref={passwordref} value={form.password} onChange={handlechange} placeholder='Enter Password' className="rounded-full border border-green-500 w-full text-black p-4 py-1" type='password' name='password' id='password' />

                            <span className='absolute right-1 top-1.5  cursor-pointer ' onClick={showpassword}>
                                <img ref={ref} className='p-1' width={25} src="icons/eye.png" alt="eye" />
                            </span>

                        </div>
                    </div>

                    <button onClick={savepassword} className='text-black flex justify-center items-center bg-green-300 rounded-full px-5 py-1 w-fit hover:bg-green-400 gap-2  ring-1 ring-green-700'>
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover"
                        >
                        </lord-icon>
                        Save Password</button>
                </div>

                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {(passwordArray.length === 0 && <div className='font-bold text-2xl'> No Passwords to show...please add some Passwords</div>)}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden text-black">
                        <thead className=' bg-green-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-50 text-black'>
                            {passwordArray.map((item, index) => {

                                return <tr key={index}>
                                    <td className='py-1 border text-center w-32  '> <a className='text-blue-800 ' href={item.site} target='_blank'>   {item.site}</a> </td>
                                    <td className='py-1 border text-center w-32'>{item.username}</td>
                                    <td className='py-1 border text-center w-32 '>{item.password}</td>
                                    <td className='py-1 border text-center w-32'>
                                        <span className='cursor-pointer mx-1' onClick={() => { deletepassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/jzinekkv.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-1' onClick={() => { editpassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/exymduqj.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>





                                    </td>
                                </tr>


                            })}

                        </tbody>
                    </table>}
                </div>
            </div>

        </>

    )
}

export default Manager