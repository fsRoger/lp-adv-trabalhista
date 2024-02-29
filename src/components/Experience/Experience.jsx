import Image from 'next/image';
import Wp from '../Wp';

const Experience = () => {
  return (
    <>
      <div className='p-10 xl:p-20 justify-center'>
        <h2 className='py-10 font-black text-3xl md:text-5xl'>Serviços de Advocacia Trabalhista</h2>
        <p className='p-2'>Você pode estar perdendo benefícios por não saber sobre seus direitos.</p>
        <div className="" >
          <h3 className='p-2 font-semibold text-2xl'>Principais tópicos abordados:</h3>
          <ul class="list-disc pl-4">
            <li class="mb-2">Resolução de Conflitos Trabalhistas e Litígios;</li>
            <li class="mb-2">Assessoria em Relações Contratuais e Acordos Trabalhistas;</li>
            <li class="mb-2">Consultoria em Normas e Legislação Trabalhista vigente;</li>
            <li class="mb-2">Prevenção e Gestão de Riscos Laborais;</li>
            <li class="mb-2">Assédio Moral e Discriminação no Ambiente de Trabalho;</li>
            <li class="mb-2">Elaboração de Políticas Internas em Conformidade com a Legislação;</li>
            <li class="mb-2">Negociações Coletivas e Relações Sindicais;</li>
            <li>Ferramentas Jurídicas para Garantir um Ambiente de Trabalho Seguro e Conformidade Legal.</li>
          </ul>
        </div>
      </div>
      <div className="min-h-screen flex justify-center  items-center 
        w-full h-full bg-dark ">
        <div class="font-semibold text-white sm:text-xl md:text-2xl  " >
          <div className='grid grid-cols-1 md:grid-cols-2 space-y-3  py-20 xl:py-0'>
            <div className='flex items-center justify-center'>

              <Image
                src="/images/website/mulher.png"
                width={600}
                height={900}
                className='h-[300px] w-[300px] md:h-auto md:w-auto'
              />
            </div>
            <div className='flex justify-center items-center p-4 sm:p-6 md:pr-20 '>
              <div className='leading-12 bg-opacity-70 text-sm md:text-md xl:text-2xl'>
                <h3 className='text-center text-2xl md:text-5xl font-bold 
                text-opacity-100 p-10 xl:py-20 text-white'>A Advogada</h3>
                <p className='p-4 md:px-10 md:py-6 xl:pr-20 leading-6'>
                  Dr. Juliana Almeida é advogada especialista em ajudar trabalhadores
                  que tiveram seus direitos negados pelos seus patrões.
                </p>
                <p className='p-4 md:px-10 md:py-6 xl:pr-20 leading-6'>
                  Está inscrito na OAB/SP 416.914, com forte atuação na área
                  trabalhista e especializado em Direito Processual Trabalhista.
                  É formado ainda em ciências econômicas, mestre em economia e
                  doutor em economia aplicada (USP).
                </p>
                <p className='p-4 md:px-10 md:py-6 xl:pr-20 leading-6'>
                  Também é professor universitário, modalidade presencial, em
                  Direito Empresarial pela Universidade Santo Amaro (UNISA), na
                  cidade de São Paulo, para curso de Ciências Contábeis.
                </p>
                <div className='flex items-center justify-center pt-10'>
                  <Wp />
                </div>
              </div>
            </div>

          </div>
        </div >
      </div>



    </>
  );
};
export default Experience;
