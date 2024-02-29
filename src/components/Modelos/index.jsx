import Image from 'next/image'
import React from 'react'

const Modelos = () => {
  return (
    <>
      <div className="py-20">
        <section className='grid grid-cols-1 md:grid-cols-2 text-center text-xl
         font-semibold gap-8 px-8' >
          <div className='flex flex-col items-center justify-center '>
            <Image
              src="/images/website/trabalhador.jpg"
              width={600}
              height={600}
              alt="hero"
              className="w-auto h-auto object-cover"
            />
            <div className='text-justify'>
              <h1 className='text-2xl font-bold py-6 text-center'>O que é Vínculo Empregatício?</h1>
              <div className='max-w-[600px] mx-auto'>
                <p className='py-4 '>
                  O Vínculo Empregatício é uma relação de trabalho considerada
                  não eventual, onde o empregado depende do salário pago pelo empregador.
                  Neste tipo de relação, o empregador determina o formato e horário de trabalho
                  a ser cumprido.
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <Image
              src="/images/website/altura.jpg"
              width={600}
              height={600}
              alt="hero"
              className="w-auto h-auto object-cover"
            />
            <div className='text-justify'>
              <h1 className='text-xl font-bold py-6 text-center'>Não recebe Insalubridade?</h1>
              <div className='max-w-[600px] mx-auto'>
                <p className='py-4 '>
                  O que diz a Lei:
                  Se você não recebe adicional de periculosidade ou insalubridade, ou senão recebia
                  algum desses adicionais a que teria direito no antigo emprego: entre em contato
                  com o Advogado Trabalhista, e exija seus direitos.
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <Image
              src="/images/website/epi.jpg"
              width={600}
              height={600}
              alt="hero"
              className="w-auto h-auto object-cover"
            />
            <div className='text-justify'>
              <h1 className='text-2xl font-bold py-6 text-center'>Sofreu acidente de trabalho?</h1>
              <div className='max-w-[600px] mx-auto'>
                <p className='py-4 '>
                  Tem direito a se afastar do
                  trabalho pelo INSS; Estabilidade no emprego; Receber o FGTS durante o afastamento;
                  Sair do emprego sem prejuízos; Indenização por danos morais; Reembolso pelos gastos
                  com o tratamento; Indenização pelos danos estéticos; Pensão em caso de incapacidade
                  permanente; Indenização por danos existenciais; Auxílio-acidente e Aposentadoria
                  por invalidez.
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <Image
              src="/images/website/obra.jpg"
              width={600}
              height={600}
              alt="hero"
              className="w-auto h-auto object-cover"
            />
            <div className='text-justify'>
              <h1 className='text-2xl font-bold py-6 text-center'>Não recebeu suas Verbas Rescisórias?</h1>
              <div className='max-w-[600px] mx-auto'>
                <p className='py-4 '>
                  O que diz a Lei: Na rescisão de contrato de trabalho, a empresa precisa não só
                  comunicar a dispensa e anotar na carteira de trabalho do trabalhador, mas também
                  realizar o pagamento das verbas rescisórias, para que o colaborador possa solicitar
                  seus benefícios. O prazo para pagamento das verbas rescisórias é de no máximo
                  10 dias após a rescisão.
                </p>
              </div>
            </div>
          </div>


        </section>

      </div>
    </>
  )
}

export default Modelos