
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { FaRegMoon } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa6";
import { FaUmbrella } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { FaScaleUnbalancedFlip } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaGavel } from "react-icons/fa6";
import { TbSunHigh } from "react-icons/tb";
import { FaMoneyBillWave } from "react-icons/fa";




const skillsData = [
  {
    name: "Reversão de justa causa",
    icon: (
      <FaBalanceScale className="text-5xl text-red-700
       group-hover:text-white duration-300" />),
    id: 1,
    description: "Defesa dos direitos do trabalhador para reverter demissão por justa causa.",
  },
  {
    name: "Acidente de trabalho",
    icon: (
      <FaAmbulance className="text-5xl text-red-700
       group-hover:text-white duration-300" />
    ),
    id: 2,
    description: "Representação para garantir indenização por acidentes ocorridos no ambiente laboral.",
  },
  {
    name: "Danos morais",
    icon: (
      <FaHeartbeat className="text-5xl text-red-700
       group-hover:text-white duration-300" />
    ),
    id: 3,
    description: "Busca por reparação de danos emocionais causados no ambiente de trabalho.",
  },
  {
    name: "Pedido de rescisão indireta",
    icon: (
      <FaGavel className="text-5xl text-red-700
       group-hover:text-white duration-300" />),
    id: 4,
    description: "Solicitação de rescisão do contrato de trabalho devido a descumprimento do empregador.",
  },
  {
    name: "Adicional de insalubridade",
    icon: (
      <TbSunHigh className="text-5xl text-red-600
       group-hover:text-white duration-300" />),
    id: 5,
    description: "Busca pela compensação por trabalho realizado em condições insalubres.",
  },
  {
    name: "FGTS e Multa",
    icon: (
      <FaMoneyBillAlt className="text-5xl text-red-700
       group-hover:text-white duration-300" />
    ),
    id: 6,
    description: "Reivindicação de depósitos de FGTS não realizados e pagamento de multa por atrasos.",
  },
  {
    name: "Horas extras",
    icon: (
      <FaUserClock className="text-5xl text-red-700
       group-hover:text-white duration-300" />),
    id: 4,
    description: "Representação para obter remuneração justa por horas além da jornada regular.",
  },
  {
    name: "Verbas rescisórias",
    icon: (
      <FaMoneyBillWave className="text-5xl text-red-700
       group-hover:text-white duration-300" />),
    id: 5,
    description: "Garantia do pagamento correto das verbas devidas na rescisão do contrato de trabalho.",
  },
  {
    name: "Equiparação salarial",
    icon: (
      <FaScaleUnbalancedFlip className="text-5xl text-red-700
       group-hover:text-white duration-300" />
    ),
    id: 6,
    description: "Busca pela igualdade salarial entre funcionários que desempenham funções semelhantes.",
  },
  {
    name: "Seguro desemprego",
    icon: (
      <FaUmbrella className="text-5xl text-red-700
       group-hover:text-white duration-300" />
    ),
    id: 6,
    description: "Auxílio na obtenção do seguro-desemprego para trabalhadores demitidos sem justa causa.",
  },
  {
    name: "Adicional noturno",
    icon: (
      <FaRegMoon className="text-5xl text-red-700
       group-hover:text-white duration-300" />
    ),
    id: 6,
    description: "Busca pela compensação adequada pelo trabalho realizado durante o período noturno.",
  },
  {
    name: "Cálculos trabalhistas",
    icon: (
      <FaCalculator className="text-5xl text-red-700
       group-hover:text-white duration-300" />
    ),
    id: 6,
    description: "Realização de cálculos precisos para garantir os direitos trabalhistas dos clientes.",
  },
];
const Skills = () => {
  return (
    <>
      <span id="about"></span>

      <div className="py-20">
        <div className="px-10">
          <h1 className='text-5xl text-center font-semibold '>Como podemos te ajudar?</h1>
          <hr className='mx-20 mt-4 border border-red-600'></hr>
          <div className="py-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-3 sm:px-10 md:gap-6 md:px-6  xl:gap-10 xl:px-20">
            {skillsData.map((skill) => (
              <div key={skill.name} className=" card group space-y-3 p-4 rounded-md bg-dark hover:bg-red-700 duration-300 transition-all text-white shadow-md">
                <div>{skill.icon}</div>
                <h1 className="md:text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
