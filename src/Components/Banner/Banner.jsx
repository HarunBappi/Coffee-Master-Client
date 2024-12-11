import banner from '../../assets/more/banner.png'

export default function Banner() {
  return (
    <div className="bg-cover bg-center h-[600px] flex justify-center items-center" style={{backgroundImage: `url(${banner})`}}>
      <div className='text-3xl text-white font-semibold space-y-3 ml-[450px]'>
         <h1>Would you like a Cup of Delicious Coffee?</h1>
         <p className='w-[600px] text-xl text-gray-500'>Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
         <button className='btn bg-yellow-100 font-semibold'>Learn More</button>
      </div>
    </div>
  )
}
