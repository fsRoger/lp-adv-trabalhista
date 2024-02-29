import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import GoogleMap from "@/components/Googlemaps/GoogleMap"
import Wp from '../Wp';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className=" pt-10 ">
      <div className="container">
        <div className='text-xl md:text-3xl text-center font-bold pb-4 m-4'>
          <h1>Endereço do Escritório</h1>
          <p>Rua das Palmeiras 321 sala 2 .Centro JD. Silveira | CEP: 0222.22</p>
        </div>

        <div className='flex items-center justify-center md:-w-[600px] pb-20'>
          <GoogleMap className="border rounded-lg" />
        </div>

      </div>

      <div className='bg-dark grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-12 md:py-20 px-4 '>
        <div className="flex items-center justify-center gap-4 ">
          <Image
            src='/images/website/logo.png'
            width={60}
            height={100}
            className='w-[60px] md:w-[100px]'
            alt="Logo"
          />

          <ul className='text-white/60 hover:text-white cursor-pointer duration-300 sm:pb-4'>
            <li>ALPHAVILLE - SP</li>
            <li>Al. Rio Negro, 161, 11°andar cjs. 1101 e 1102</li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4 py-6 sm:py-0">
          <FaFacebook className="text-2xl sm:text-4xl md:text-5xl text-white/60 hover:text-red-600 cursor-pointer duration-300" />
          <FaInstagram className="text-2xl sm:text-4xl md:text-5xl text-white/60 hover:text-red-600  cursor-pointer duration-300" />
          <FaYoutube className="text-2xl sm:text-4xl md:text-5xl text-white/60 hover:text-red-600  cursor-pointer duration-300" />
        </div>
        <Wp />
      </div>
      <div className="bg-dark">
        <div>
          <div className="border-t border-gray-600 mx-10"></div>
        </div>
        <div className='flex text-center justify-center items-center py-10'>
          <div className="w-full  text-white/60 hover:text-white">
            ❤️ ©️ Copyright 2023 Pires e Gonçalves Advogados |
            Todos os Direitos Reservados.
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
