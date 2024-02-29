import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image src="/images/website/trabalhador.jpg"
          width={1920}
          height={1080} alt="hero"
          className="w-full h-full object-cover opacity-80" />
      </div>
      <div className="relative grid grid-cols-1 place-items-center h-screen">
        <div className=" text-center text-white font-bold z-10">
          <div className="space-y-3 bg-dark p-4 py-10 opacity-90 container border rounded-md">
            <h1 className="text-2xl sm:text-3xl md:text-5xl xl:text-7xl
             text-white font-bold">SOFREU UMA <span className='text-red-600'>JUSTA CAUSA?</span> ACIDENTE DE TRABALHO?</h1>
            <hr className='m-20 border border-red-600'></hr>
            <p className="text-xl xl:text-3xl text-white font-bold">
              Já ajudamos centenas de pessoas a reivindicarem seus direitos trabalhistas!</p>
            <h3 className='text-red-600 text-2xl xl:text-4xl '>Seus direitos a um click de você!</h3>
            <button className="uppercase rounded-lg bg-green-700
             hover:bg-white hover:text-green-700 duration-500 py-2 px-6
              text-white">
              Entre em contato agora mesmo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
