import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className=" bg-red-900 text-white p-10 flex justify-between space-x-10">
      {/* <div className="flex items-center ">
        <div className='text-2xl '>
          <h3 className="text-5xl font-bold">Main Characters Youth Council</h3>
          <ul className="flex space-x-4 items-center m-5">
            <li>
              <Link href="/about">
                <span className=" hover:underline cursor-pointer">About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="hover:underline cursor-pointer">Past Events</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="hover:underline cursor-pointer">Team</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <img src="key.png" className='h-40 mx-5' />
          <div className="text-2xl">
            <h3 className="font-bold text-3xl p-2">Connect with Us</h3>

            <Link href="/contact">
              <span className="hover:underline cursor-pointer">Email</span>
            </Link>
            <br />
            <Link href="/contact">
              <span className="hover:underline cursor-pointer">Instagram</span>
            </Link>
            <br />
            <Link href="/contact">
              <span className="hover:underline cursor-pointer">Linkedin</span>
            </Link>

          </div>
        </div>
      </div> */}
      <div className="space-y-4">
        <h3 className="text-3xl font-bold">Movement for Change Youth Council</h3>
        <h4 className="text-2xl">mcyc.22.051@gmail.com</h4>
        <div className="grid grid-cols-2 space-y-2">
          <Link href="/" className="text-xl">Home</Link>
          <Link href="/past_events" className="text-xl">Past Events</Link>
          <Link href="/team" className="text-xl">Our Team</Link>
          <Link href="/monthly_theme" className="text-xl">Monthly Theme</Link>
        </div>
      </div>

      <div className="ml-auto flex space-x-10">
        <div>
          <img src="key.png" className="h-40 ml-auto"></img>
        </div>

        <div className="space-y-4 ml-auto">
          <p className="text-xl font-bold">Connect With Us</p>
          <div className="flex">
            <img src='/Logo/instagram.png' className="w-20"></img>
            <img src='/Logo/linkedin.png' className="w-20"></img>
          </div>
          <p className='text-center'>Copyright &copy; 2023 MCYC</p>
        </div>
      </div>
      
    </footer>

  );
};

export default Footer;
