"use client"
import Link from 'next/link';
import Button from './Button';
import { usePathname } from 'next/navigation'

const Navbar: React.FC = () => {
  const pathname = usePathname()
  let subpage = pathname.split("/")[1]

  function Linkness(type=""){
    let classes = ""
    if (type === subpage){
      classes += "underline decoration-solid font-bold text-line-brown"
    } else {
      classes += "hover:underline cursor-pointer"
    }
    return classes
  }

  
  return (
    <div className="p-4 items-center">
      <div className="flex container mx-auto flex justify-between items-center">
        <Link href="/" className="w-1/6">
              {/* <span className="text-2xl font-bold cursor-pointer">MCYC</span> */}
          <img src="/Logo/logo.png"  />
        </Link>
        <ul className="flex space-x-10 text-xl">
          <li>
            <Link href="/">
              <span className={Linkness("")}>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <span className={Linkness("team")}>Our Team</span>
            </Link>
          </li>
          <li>
            <Link href="/monthly_theme">
              <span className={Linkness("monthly_theme")}>Monthly Theme</span>
            </Link>
          </li>
          <li>
            <Link href="/past_events">
              <span className={Linkness("past_events")}>Past Events</span>
            </Link>
          </li>

          {/* Under Developing */}
          {/* <li>
            <Link href="/blogs">
              <span className={Linkness("blogs")}>Blogs</span>
            </Link>
          </li> */}
          
          <li>
            <Link href="/sponsors">
              <span className={Linkness("sponsors")}>Sponsors</span>
            </Link>
          </li>
        </ul>
        <div className="flex space-x-4">
          <Link target="_blank" href="https://www.instagram.com/mcyc.22/">
            <img src="/Logo/instagram.png"  className="w-20"/>
          </Link>
          
          <Link target="_blank" href="https://www.linkedin.com/company/movement-for-change-youth-council">
            <img src="/Logo/linkedin.png"  className="w-20"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
