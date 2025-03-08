const Hero = () => {
  return (
    <div className="m-14 border border-[#ffb703] rounded-xl flex gap-8 justify-center items-center py-14 px-4 md:flex-nowrap flex-wrap">
      <div>
        <h1 className="text-center md:text-start">My Fan Page</h1>
        <p>Welcome to my fan page. Here you can find all the information you need to know about my favorite things.</p>
      </div>
      
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fdb%2F8a%2Ff5%2Fdb8af53793292d422a52a979e5e1638c.jpg&f=1&nofb=1&ipt=e3480744d17bc3cb0569a550eef9da27e752dd8824b1edefa0eaaf13ead01a2a&ipo=images"
        alt="girl"
        width={"400px"} />
    </div>

  )
}
  

export default Hero;