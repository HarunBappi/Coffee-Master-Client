   import logo from '../../assets/more/logo1.png'
import bgNavbar from '../../assets/more/navbar.jpg'

export default function Navbar() {
  return (
    <div className='bg-cover bg-center' style={{backgroundImage: `url(${bgNavbar})`}}>
         <div className='w-5/6 mx-auto flex items-center justify-between'>
         <div className='flex items-center justify-center'>
          <img className='w-20' src={logo} alt="" />
         <h1 className="text-white text-4xl">Espresso Emporium</h1>
         </div>
         <div className='space-x-3'>
           <button className='btn'>Sign In</button>
           <button className='btn'>Register</button>
         </div>
         </div>
    </div>
  )
}
