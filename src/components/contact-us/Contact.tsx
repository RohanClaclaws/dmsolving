'use client'
import { motion } from "framer-motion"
import Banner from "../resuable/Banner";
import { useRef } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast"


const Contact = () => {

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const subject = useRef<HTMLInputElement>(null);
  const comments = useRef<HTMLTextAreaElement>(null);



  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const result = await fetch("/api", {
      method: 'POST',
      body: JSON.stringify({ name: name.current?.value, email: email.current?.value, subject: subject.current?.value, message: comments.current?.value })
    })

    console.log(result)
  if(result.status ===200 && result.ok===true){
    toast.success('Email sent successfully',{
      id:'success-toast-1'
    })
  }  else{
    toast.error('Please try again or call Us',{
      id:'error-toast-2'
    })
  }

    reset(name, email, subject, comments)
  }

  const reset = (name: any, email: any, subject: any, comments: any) => {
    name.current.value = ""
    email.current.value = ""
    subject.current.value = ""
    comments.current.value = ""
  }





  return (
    <>
      <Toaster />
      <Banner heading="Contact" subheading="Home" image="/images/breadcrumbcontact.png" />

      <div className="bg-[#07192d  bg-black">
        <div className="layout ">

          <div className="flex flex-wrap  items-center justify-evenly gap-y-[60px] py-8 pt-[80px]">

            <div className="bg-red-80  max-w-[704px] min-h-[579px  ">
              <div className="flex flex-col gap-y-4 pb-5">
                <h1 className="font-syne font-[700] text-[#CFDDE8] sm:text-[42px]  text-[22px] sm:leading-[50px] pb-3">Ready to Create and <br /> Collaborate ?</h1>
                <p className="font-dmsans font-[400] text-[#8FA8BD] sm:text-[16px]">
                  Whether you have questions, feedback, or just want to say hello, we &apos; re here to chat and assist you. Your satisfaction is our priority, and we look forward to hearing from you!
                </p>
              </div>
              <div className="flex mt-5 gap-x-[80px] flex-wrap gap-y-5 pb-3">
                <div className="flex flex-col gap-y-3">
                  <h3 className="font-syne font-[500] text-[#8FA8BD]">Contact Details</h3>
                  <div className="flex flex-col mb-4">
                    <p className="font-syne font-[500] text-[#CFDDE8]">info@dmsolving.com
                    </p>
                    <p className="font-syne font-[500] text-[#CFDDE8]"><Link href={'tel:+16478563919'}>
                      (+1) 647-856-3919
                    </Link>
                    </p>

                    <p className="font-syne font-[500] text-[#CFDDE8]">
                      <Link href={'tel:+16476171832'}>
                        (+1) 647-617-1832
                      </Link>
                    </p>

                  </div>
                </div>
                <div className="flex flex-col gap-y-3 pb-6">
                  <h3 className="font-syne font-[500] text-[#8FA8BD]">Location</h3>
                  <div className="flex-col">
                    <p className="font-syne font-[500] text-[#CFDDE8]">2255 Sheppard Avenue East,</p>
                    <p className="font-syne font-[500] text-[#CFDDE8]">North York, ON M2J 4Y1</p>
                  </div>
                </div>
              </div>
              <div className="socials">
                <h1 className="font-syne font-[500] text-[16px] text-[#8FA8BD] mb-2 ">Socials</h1>
                <div className="flex gap-x-10 flex-wrap gap-y-3">
                  <h2 className="font-syne font-[500] text-[#CFDDE8]">Twitter</h2>
                  <h2 className="font-syne font-[500] text-[#CFDDE8]">Dribble</h2>
                  <h2 className="font-syne font-[500] text-[#CFDDE8]">Behance</h2>
                </div>
              </div>
            </div>

            <motion.div className=" bg-black w-full max-w-[616px] py-5 "
              whileInView={{ x: [200, 0], opacity: [0, 1], y: [100, 0] }}
              transition={{
                duration: 0.85,
              }}
            >
              <div className="px-5 py-3  ">
                <form className="flex flex-col gap-y-7 outline-none" onSubmit={handleSubmit} >
                  <div className="input-collapse-contact:flex gap-x-2 space-y-5 input-collapse-contact:space-y-0">
                    <div className=" flex flex-col gap-y-2 w-full">
                      <label className="text-[#cfdde8]">Name <sup className="text-[#8FA88D]">*</sup></label>
                      <input type="text" className="py-3 px-2  bg-black border-[1px] border-gray-800 text-[#8FA88D] rounded-md" placeholder="Name" ref={name} required />
                    </div>
                    <div className=" flex flex-col gap-y-2 w-full">
                      <label className="text-[#cfdde8]">Email <sup className="text-[#8FA88D]">*</sup></label>
                      <input type="text" className="py-3 px-2  text-[#8FA88D] bg-black border-[1px] border-gray-800 rounded-md" placeholder="Email" ref={email} required />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label className="text-[#cfdde8]">Subject <sup className="text-[#8FA88D]">*</sup></label>
                    <input type="text" className="py-3 px-2 text-[#8FA88D] bg-black border-[1px] border-gray-800 rounded-md" placeholder="How can we help you ?" ref={subject} required />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label className="text-[#cfdde8]">Tell Us About Your Project <sup className="text-[#8FA88D]">*</sup></label>
                    <textarea className="py-3 px-2  text-[#8FA88D] min-h-[150px] resize-none bg-black border-[1px] border-gray-800 rounded-md" placeholder="How can we help you ?" ref={comments} required />
                  </div>
                  <button className="font-dmsans text-center font-[400] text-[#081D34] py-3 px-5  bg-white w-fit mt-4 rounded-lg hover:bg-transparent hover:text-white border-[1px] border-transparent hover:border-white" >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

          </div>

        </div>
      </div >
    </>
  )
}

export default Contact;