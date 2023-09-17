import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className=" bg-red-900 text-white p-10">
      <div className="flex justify-between items-center ">
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
      </div>

      <p className='text-center'>Copyright &copy; 2023 MCYC</p>
    </footer>

  );
};

export default Footer;
