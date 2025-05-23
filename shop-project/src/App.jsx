import Navbar from "./components/Navbar";

import { motion } from "motion/react";

const App = () => {
  return (
    <>
      <Navbar />
      <section className='flex justify-center items-center h-screen px-8 pt-16 gap-6 flex-wrap lg:flex-nowrap bg-[url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] 
        bg-cover bg-center'>
        <div className="flex flex-col gap-4 text-center">
          <motion.h1 className="text-8xl text-red-400 text-outline-black"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            Shop Project
          </motion.h1>
          <motion.p className="text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}>
            Welcome to my store introduction
          </motion.p>
        </div>
     
      </section>
    </>
  )
}
export default App;