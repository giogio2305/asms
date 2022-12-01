import Navbar from  './components/Navbar'

export default function Contact (){

    return(
        <div className='relative w-full min-h-screen'>
        <Navbar/>
        <div className='flex items-center justify-start w-full h-auto p-16'>



                    <div className='flex flex-col items-start justify-start p-3 w-[44%] h-auto'>
                    <h5 className='font-bold text-red-500 text-md my-2'>Contacts</h5>
                    <h1 className='font-bold text-red-800 text-4xl my-2'>Découvrez ce que nous pouvons faire pour vous.</h1>
                    <p className='font-normal text-zinc-600 text-lg my-5'>Nous sommes là pour vous aider et répondre à toutes vos questions. Nous sommes impatients d'avoir de vos nouvelles.</p>
                    <div className='flex flex-col items-start justify-center p-5 my-6 w-[90%] min-h-36 bg-slate-100 rounded-lg'>
                        <h3 className='font-bold text-red-800 text-2xl mx-auto'>Rencontrez notre équipe</h3>
                        <p className='font-normal text-zinc-600 text-lg mx-auto my-4 w-[72%]'>
                        Entrez en contact avec une équipe dynamique et enthousiaste. 
                        </p>
                    </div>

                    <div className='flex flex-col items-start justify-center p-5 my-3 w-[90%] min-h-36 bg-slate-100 rounded-lg'>
                        <h3 className='font-bold text-red-800 text-2xl mx-auto'>Devenir un de nos partenaires</h3>
                        <p className='font-normal text-zinc-600 text-lg mx-auto my-4 w-[72%]'>
                        Entrez en contact avec une équipe dynamique et enthousiaste. 
                        </p>
                    </div>

                    <div className='flex flex-col items-start justify-center p-5 my-3 w-[90%] min-h-36 bg-slate-100 rounded-lg'>
                        <h3 className='font-bold text-red-800 text-2xl mx-auto'>Demande de sponsoring</h3>
                        <p className='font-normal text-zinc-600 text-lg mx-auto my-4 w-[72%]'>
                        Entrez en contact avec une équipe dynamique et enthousiaste. 
                        </p>
                    </div>

                    </div>

                    <div className='relavtive flex items-center justify-center p-3 w-[52%] h-[120vh] pl-32'>
                    

                           

                        <div className='w-[96%] min-h-[90%] rounded-lg shadow-xl mx-auto flex flex-col items-center justify-start p-4 bg-white'>
                            <h4 className='font-semibold text-red-800 text-2xl my-6'>Discutons-en.</h4>
                            <p className='font-normal text-zinc-600 text-sm my-3 '>Vous avez des questions ? Veuillez nous contacter.</p>

                            <div className='flex items-center justify-between w-full p-3'>
                                <div className='flex flex-col'>
                                    <label className='font-medium text-zinc-600'>Nom</label>
                                    <input type='text' className='w-[96%] p-2 bg-slate-100 my-1.5 rounded-md' />
                                </div>

                                <div className='flex flex-col'>
                                    <label className='font-medium text-zinc-600'>Prénom</label>
                                    <input type='text' className='w-[96%] p-2 bg-slate-100 my-1.5 rounded-md' />
                                </div>
                            </div>

                            <div className='flex items-center justify-between w-full p-3'>
                                <div className='flex flex-col w-full'>
                                    <label className='font-medium text-zinc-600'>Email</label>
                                    <input type='email' className='w-[96%] p-2 bg-slate-100 my-1.5 rounded-md' />
                                </div>
                            </div>

                            <div className='flex items-center justify-between w-full p-3'>
                                <div className='flex flex-col w-full'>
                                    <label className='font-medium text-zinc-600'>Nom de l'entreprise</label>
                                    <input type='text' className='w-[96%] p-2 bg-slate-100 my-1.5 rounded-md' />
                                </div>
                            </div>

                            <div className='flex items-center justify-between w-full p-3'>
                                <div className='flex flex-col w-full'>
                                    <label className='font-medium text-zinc-600'>Type d'entreprise </label>
                                    <select className='w-[96%] py-2 px-3 bg-slate-100 my-1.5 rounded-md' >
                                    <option></option>
                                    <option>Freelance</option>
                                    <option>Agence</option>
                                    <option>Startup</option>
                                    <option>Entreprise</option>
                                    <option>Université</option>
                                    </select>
                                </div>



                            </div>
                            <div className='flex items-center justify-between w-full p-3'>
                                <div className='flex flex-col w-full'>
                                    <label className='font-medium text-zinc-600'>Message</label>
                                    <textarea className='w-[96%] p-6 bg-slate-100 my-1.5 rounded-md'>
                                        </textarea>
                                </div>
                            </div>

                            <button className='my-4 p-2.5 rounded-lg bg-red-700 text-white font-bold text-md'>Soumettre</button>

                            


                        </div>
                        

                        

                    </div>




   
        </div>

        <div className="absolute right-0 w-0 h-0 top-24 -z-10
                  border-t-[290px] border-t-transparent
                  border-r-[580px] border-r-yellow-400
                  border-b-[290px] border-b-transparent
                  "></div>

<div className="absolute left-0 w-0 h-0 top-96  mt-12 -z-10 rotate-180
                  border-t-[250px] border-t-transparent
                  border-r-[500px] border-r-red-700
                  border-b-[250px] border-b-transparent
                  "></div>
        </div>
    )
}