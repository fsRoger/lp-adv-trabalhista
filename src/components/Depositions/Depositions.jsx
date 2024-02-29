import Image from 'next/image';
import { FaStar, FaRegStar } from "react-icons/fa";

const depositionsData = [
  {
    name: "João Dias",
    image:
      <Image
        src='/images/website/logo-adv.png'
        width={100}
        height={100}
        alt="Imagem do depoimento"
        className="w-16 h-16 rounded-full"
      />,
    link: "#",
    description: "Consegui a demissão indireta e ainda com todos meus direitos, muito bom!",
    rating: 5,
  },
  {
    name: "Carla Reis",

    image:
      <Image
        src='/images/website/logo-adv.png'
        width={100}
        height={100}
        alt="Imagem do depoimento"
        className="w-16 h-16 rounded-full"
      />,
    link: "#",
    description: "Graças a advogada pude me aposentar por invalidez!",
    rating: 5,
  },
  {
    name: "Rute Santos",

    image:
      <Image
        src='/images/website/logo-adv.png'
        width={100}
        height={100}
        alt="Imagem do depoimento"
        className="w-16 h-16 rounded-full"
      />,
    link: "#",
    description: "Advogada maravilhosa, resolveu meus problemas com seguro desemprego",
    rating: 5,
  },
];
const Depositions = () => {
  return (
    <>
      <span id="Depositions"></span>

      <div className="bg-white  py-14">
        <div className="container">
          <h1 className='text-2xl md:text-3xl xl:text-5xl font-bold text-center'>DEPOIMENTOS DE CLIENTES</h1>
          <p className='text-center pt-2 pb-6'>Veja histórias de pessoas que conseguiram seus diretos trabalhistas</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:gap-2  md:gap-4">
            {depositionsData.map((depositions, index) => (
              <div key={index} className="card group space-y-3 p-4 bg-dark  hover:bg-red-700 duration-300 text-white text-center m-2">
                <div className='flex items-center justify-center'>{depositions.image}</div>
                <div className='flex items-center justify-center'>
                  {/* Adicione ícones de estrela com base na propriedade rating */}
                  {[...Array(depositions.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                  {[...Array(5 - depositions.rating)].map((_, i) => (
                    <FaRegStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <h1 className="flex items-center justify-center text-2xl font-bold">{depositions.name}</h1>
                <p className='flex items-center justify-center'>{depositions.description}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Depositions;