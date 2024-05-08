import Link from 'next/link';
import Button from './Button';

const Navbar: React.FC = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          {/* <span className="text-2xl font-bold cursor-pointer">MCYC</span> */}
          <img src="/Logo/logo.png" className="w-1/6" />
        </Link>

        <ul className="flex space-x-4 items-center">
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
            <Link href="/team">
              <span className="hover:underline cursor-pointer">Team</span>
            </Link>
          </li>
          <li>
            <Link href="/sponsors">
              <span className="hover:underline cursor-pointer">Sponsors</span>
            </Link>
          </li>
          <li>
            <Button style="p-3" link="/" name="Monthly Theme" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
