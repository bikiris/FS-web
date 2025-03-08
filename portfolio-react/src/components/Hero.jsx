const Hero = () => {
  return (
    <section className='flex items-center justify-around p-10 bg-blue-200 flex-wrap lg:flex-nowrap'>
      <div>
        <h1 className='text-4xl'>Hi, I'm John Doe</h1>
        <p className='text-xl'>I'm a web developer</p>
      </div>

      <img src='https://placehold.co/300x200' alt='placeholder image' />
    </section>
  );
};

export default Hero;
