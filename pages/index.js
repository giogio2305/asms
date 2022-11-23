import hero from './assets/hero.jpg'
import logo from './assets/asms.jpg'
import liga from './assets/laliga.jpeg'
import ligabs from './assets/laliga bs.png'
import palmares from './assets/palmares.jpg'
import paposy from './assets/paposy.jpg'
import Image from 'next/image'
export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <nav className="w-full flex items-center justify-center shadow-sm p-2">
      <div className="w-[100px] h-[60px] object-cover">
        <Image src={logo}/>
        </div>
      </nav>
      
      <div className=" relative overflow-clip flex items-center justify-center w-full h-[88vh]">

        <div className=' absolute left-0 h-full w-[25%] '>
          <div className='flex items-end'>
            <div className='h-[324px] w-[44%] bg-teal-300'></div>
            <div className='h-[180px] w-[52%] bg-teal-500 ml-1.5 rounded-br-[48%]'></div>
          </div>
          <div className='h-[216px] w-[84%] bg-teal-500 my-1 ml-1'></div>
        </div>

        <div className='absolute right-0 h-full w-[25%] '>

          <div className='h-[180px] w-[64%] bg-teal-500 my-1 ml-28 rounded-tl-[48%]'>

          </div>
          <div className='flex items-start'>
          <div className='h-[180px] w-[52%] bg-teal-500 mx-1.5'></div>
            <div className='h-[356px] w-[44%] bg-teal-300'></div>
            
          </div>
        </div>


          <div className="flex flex-col items-center w-[60%] p-4 text-center z-10">
            <div className='flex items-center justify-start my-4'>
            <h4 className='font-medium text-md text-red-600'>25-26 Février, 2023</h4>
            <div className='h-2 w-2 bg-red-600 rounded-full mx-3'></div>
            <h4 className='font-medium text-md text-red-600'>Yaoundé, Cameroun</h4>
            </div>
            <h1 className="font-bold text-7xl tracking-tight text-zinc-800 mb-8">African Sport Marketing Summit <h1 className='text-red-600'>2023</h1></h1>
            <button className='p-3 text-white bg-red-600 rounded-lg font-medium text-md my-5'>Réservez maintenant</button>
            <div className='flex items-start justify-start my-4'>
            <div className='flex flex-col items-start justify-start mx-4'>
            <h4 className='font-medium text-base text-zinc-600'>Intervenants</h4>
            <h2 className='font-semibold text-xl text-red-600 mt-2'>14</h2>
            </div>

            <div className='flex flex-col items-start justify-start mx-6'>
            <h4 className='font-medium text-base text-zinc-600'>Lieu</h4>
            <h2 className='font-semibold text-xl text-red-600 mt-2'>Palais des Sports</h2>
            </div>

            <div className='flex flex-col items-start justify-start mx-6'>
            <h4 className='font-medium text-base text-zinc-600'>Adresse</h4>
            <h2 className='font-semibold text-xl text-red-600 mt-2'>Yaoundé</h2>
            </div>
            </div>
          </div>

          {/*<div className="w-[620px] h-[420px] object-cover">
            <Image className='w-full h-full' src={hero}/>
  </div>*/}
      </div>

          <div className='relative p-8 flex w-full items-center justify-start my-28'>

          <div className='relative flex w-[412px] h-[412px] mx-28 mt-8 aspect-square'>
              <div className='absolute w-[412px] h-[412px] rounded-lg aspect-square rotate-6 bg-gradient-to-l from-red-600 to-red-700 z-1'></div>
              <Image className='w-full h-full object-cover rounded-lg z-10' src={hero}/>
            </div>
            <div className='flex flex-col w-[48%]'>
              <h1 className='text-4xl tracking-tight text-red-700 font-bold my-4'>Pourquoi assiter à l'ASMS ?</h1>
              <p className='text-md text-zinc-500 tracking-normal w-84 my-2'>
              ASMS est concu pour favoriser le learning, les échanges, le networking et l'éfficacité.
              </p>

              <div className='flex items-center justify-start'>
              <h2 className='font-bold text-red-600 text-4xl mr-4'>1</h2>
              <p className='font-medium text-md text-zinc-700 tracking-normal w-84 my-4 '>
              Se mettre à la page sur les leviers de l'univers du marketing sportif afin de mieux s'approprier son environnement.
              </p>
              </div>

              <div className='flex items-center justify-start'>
              <h2 className='font-bold text-red-600 text-4xl mr-4'>2</h2>
              <p className='font-medium text-md text-zinc-700 tracking-normal w-84 my-4 '>
              Initier de nouveaux contact utiles pour votre developpement professionnel.
              </p>
              </div>

              <div className='flex items-center justify-start'>
              <h2 className='font-bold text-red-600 text-4xl mr-4'>3</h2>
              <p className='font-medium text-md text-zinc-700 tracking-normal w-84 my-4 '>
              Identifier les fournisseurs et les produits de demain.
              </p>
              </div>

              <div className='flex items-center justify-start'>
              <h2 className='font-bold text-red-600 text-4xl mr-4'>4</h2>
              <p className='font-medium text-md text-zinc-700 tracking-normal w-84 my-4 '>
              Evaluer les nouvelles tendances marketing et commerciales du secteur.
              </p>
              </div>

              <div className='flex items-center justify-start'>
              <h2 className='font-bold text-red-600 text-4xl mr-4'>5</h2>
              <p className='font-medium text-md text-zinc-700 tracking-normal w-84 my-4 '>
              Imaginer et construire le developpement de vos marques dans le sport.
              </p>
              </div>

              
            </div>


          </div>

          <div className='px-4 mx-auto max-w-7xl my-24'>
            <h2 className='mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-zinc-900 sm:text-5xl'>Nos Sponsors actuels pour nos ateliers et nos intervenants.</h2>
              <div className='mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-4 md:gap-x-16 lg:gap-x-32'>
                <div className='w-[158px] h-[96px] object-fit'><Image className='w-full h-full' src={liga}/></div>
                <div className='w-[158px] h-[96px] object-fit'><Image className='w-full h-full' src={palmares}/></div>
                <div className='w-[158px] h-[96px] object-fit'><Image className='w-full h-full' src={palmares}/></div>
                <div className='w-[158px] h-[96px] object-fit'><Image className='w-full h-full' src={ligabs}/></div>
              </div>
          </div>

          <div className='flex flex-col items-center justify-center w-full h-auto bg-slate-500 mt-20 mx-auto p-8'>
            <h1 className='font-bold text-6xl text-white text-center my-6'>Les Thématiques</h1>
            <div class="grid grid-cols-4 gap-4 my-24">
                <div className='flex flex-col items-center justify-center w-[280px] h-[180px] bg-slate-200'>01</div>
                <div className='flex flex-col items-center justify-center w-[280px] h-[180px] bg-slate-200'>02</div>
                <div className='flex flex-col items-center justify-center w-[280px] h-[180px] bg-slate-200'>03</div>
                <div className='flex flex-col items-center justify-center w-[280px] h-[180px] bg-slate-200'>04</div>
                <div className='flex flex-col items-center justify-center w-[280px] h-[180px] bg-slate-200'>05</div>
                <div className='flex flex-col items-center justify-center w-[280px] h-[180px] bg-slate-200'>06</div>
                <div className='flex flex-col items-center justify-center w-[280px] h-[180px] bg-slate-200'>01</div>
                <div className='flex flex-col items-center justify-center w-[280px] h-[180px] bg-slate-200'>02</div>
                <div className='flex flex-col items-center justify-center w-[280px] h-[180px] bg-slate-200'>03</div>
                <div className='flex flex-col items-center justify-center w-[280px] h-[180px] bg-slate-200'>04</div>
                <div className='flex flex-col items-center justify-center w-[280px] h-[180px] bg-slate-200'>05</div>
                <div className='flex flex-col items-center justify-center w-[280px] h-[180px] bg-slate-200'>06</div>
                <div className='flex flex-col items-center justify-center w-[280px] h-[180px] bg-slate-200'>01</div>
                <div className='flex flex-col items-center justify-center w-[280px] h-[180px] bg-slate-200'>02</div>
                <div className='flex flex-col items-center justify-center w-[280px] h-[180px] bg-slate-200'>03</div>
                <div className='flex flex-col items-center justify-center w-[280px] h-[180px] bg-slate-200'>04</div>
                <div className='flex flex-col items-center justify-center w-[280px] h-[180px] bg-slate-200'>05</div>
                <div className='flex flex-col items-center justify-center w-[280px] h-[180px] bg-slate-200'>06</div>
              </div>
          </div>
          <div className='w-full h-auto p-6 bg-red-600 flex items-center justify-center font-semibold text-2xl text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="mr-6 rotate-[-16deg] w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
            </svg>

            Les Keynote Speakers

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="ml-6 w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
          </div>


          <div className='grid grid-cols-6 gap-6 p-20'>
              <div className='flex flex-col items-center justify-center'>
                <div className='w-28 h-28 rounded-full bg-slate-500 my-4'></div>
                <h2 className='text-lg font-bold text-red-700'>Nom du speakers</h2>
                <h4 className='text-md font-medium mt-2'>Poste du speaker</h4>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <div className='w-28 h-28 rounded-full bg-slate-500 my-4'></div>
                <h2 className='text-lg font-bold text-red-700'>Nom du speakers</h2>
                <h4 className='text-md font-medium mt-2'>Poste du speaker</h4>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <div className='w-28 h-28 rounded-full bg-slate-500 my-4'></div>
                <h2 className='text-lg font-bold text-red-700'>Nom du speakers</h2>
                <h4 className='text-md font-medium mt-2'>Poste du speaker</h4>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <div className='w-28 h-28 rounded-full bg-slate-500 my-4'></div>
                <h2 className='text-lg font-bold text-red-700'>Nom du speakers</h2>
                <h4 className='text-md font-medium mt-2'>Poste du speaker</h4>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <div className='w-28 h-28 rounded-full bg-slate-500 my-4'></div>
                <h2 className='text-lg font-bold text-red-700'>Nom du speakers</h2>
                <h4 className='text-md font-medium mt-2'>Poste du speaker</h4>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <div className='w-28 h-28 rounded-full bg-slate-500 my-4'></div>
                <h2 className='text-lg font-bold text-red-700'>Nom du speakers</h2>
                <h4 className='text-md font-medium mt-2'>Poste du speaker</h4>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <div className='w-28 h-28 rounded-full bg-slate-500 my-4'></div>
                <h2 className='text-lg font-bold text-red-700'>Nom du speakers</h2>
                <h4 className='text-md font-medium mt-2'>Poste du speaker</h4>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <div className='w-28 h-28 rounded-full bg-slate-500 my-4'></div>
                <h2 className='text-lg font-bold text-red-700'>Nom du speakers</h2>
                <h4 className='text-md font-medium mt-2'>Poste du speaker</h4>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <div className='w-28 h-28 rounded-full bg-slate-500 my-4'></div>
                <h2 className='text-lg font-bold text-red-700'>Nom du speakers</h2>
                <h4 className='text-md font-medium mt-2'>Poste du speaker</h4>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <div className='w-28 h-28 rounded-full bg-slate-500 my-4'></div>
                <h2 className='text-lg font-bold text-red-700'>Nom du speakers</h2>
                <h4 className='text-md font-medium mt-2'>Poste du speaker</h4>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <div className='w-28 h-28 rounded-full bg-slate-500 my-4'></div>
                <h2 className='text-lg font-bold text-red-700'>Nom du speakers</h2>
                <h4 className='text-md font-medium mt-2'>Poste du speaker</h4>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <div className='w-28 h-28 rounded-full bg-slate-500 my-4'></div>
                <h2 className='text-lg font-bold text-red-700'>Nom du speakers</h2>
                <h4 className='text-md font-medium mt-2'>Poste du speaker</h4>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <div className='w-28 h-28 rounded-full bg-slate-500 my-4'></div>
                <h2 className='text-lg font-bold text-red-700'>Nom du speakers</h2>
                <h4 className='text-md font-medium mt-2'>Poste du speaker</h4>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <div className='w-28 h-28 rounded-full bg-slate-500 my-4'></div>
                <h2 className='text-lg font-bold text-red-700'>Nom du speakers</h2>
                <h4 className='text-md font-medium mt-2'>Poste du speaker</h4>
              </div>

              

          </div>



          <div className='w-full h-auto p-6 bg-red-600 flex items-center justify-center font-semibold text-2xl text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-4 rotate-[-16deg] w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>

            Le Site

          </div>

          
          <div className='relative p-8 flex w-full items-center justify-center mt-12'>
            <div className='flex flex-col w-[48%]'>
              <h1 className='text-4xl tracking-tight text-zinc-800 font-bold my-4'>Le Palais Polyvalent des Sports de Yaoundé.</h1>
              <p className='text-md text-zinc-500 tracking-normal w-84 my-2'>
              Situé au Carrefour Warda à Yaoundé,
              le palais polyvalent des sports de Yaoundé (pouvant être abrégé en Palais des Sports) est une salle couverte d’une capacité de 5 200 places située au cœur de Yaoundé au Cameroun. 
              </p>
              <p className='text-md text-zinc-500 tracking-normal w-84 my-4'>
              Ce complexe à vocation sportive et culturelle répond aux exigences internationales en matière d’infrastructures sportives.
              Le Palais des Sports permet de recevoir des manifestations sportives en salle où se tiennent les compétitions nationales et internationales de sports collectifs (basket-ball, hand-ball, volley-ball…) où tout autres sports d’intérieurs (boxe, judo, haltérophilie..).
              </p>
              <p className='text-md text-zinc-500 tracking-normal w-84 my-2'>
              Il peut aussi accueillir des manifestations culturelles. Il est doté d'une infrastructure qui offre des conditions techniques visuelles et acoustiques idéales.
              L’esplanade du palais offre un cadre idéal pour les manifestations culturelles en extérieur. D’une superficie modulable allant jusqu’à 5 000 m2, elle peut recevoir jusqu’à 10 000 personnes.
              </p>
              
            </div>

            <div className='relative flex w-[412px] h-[412px] ml-36 mt-8 aspect-square rotate-3'>
            <div className='absolute w-[412px] h-[412px] rounded-lg aspect-square bg-gradient-to-l from-red-600 to-red-700 z-1 -rotate-6'></div>
              <Image className='w-full h-full object-cover rounded-lg z-10' src={paposy}/>
            </div>
          </div>


          <footer className='relative overflow-clip w-full flex items-center justify-start p-8 bg-sky-800 h-auto mt-20'>
            <ul className='font-medium text-md text-white mx-4'>
              <li >Acceuil</li>
              <li className='my-1.5'>Partenaires</li>
              <li>Mentions Légales</li>
            </ul>

            <ul className='font-medium text-md text-white mx-24'>
              <li>Exposants</li>
              <li className='my-1.5'>Contacts</li>
            </ul>

            <ul className='font-medium text-md text-white mx-24'>
              <li>Billeterie</li>
              <li className='my-1.5'>Espace presse</li>
            </ul>

            <ul className='font-medium text-md text-white mx-24'>
              <li>Infos Partiques</li>
              <li className='my-1.5'>Plan du site</li>
            </ul>

            <div className="absolute right-0 w-0 h-0 mt-40
                  border-t-[240px] border-t-transparent
                  border-r-[480px] border-r-sky-700
                  border-b-[240px] border-b-transparent
                  "></div>
          </footer>
    </div>
  )
}
