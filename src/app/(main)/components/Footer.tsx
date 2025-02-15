import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-900 text-white p-10 flex flex-col lg:flex-row lg:justify-between lg:space-x-10 space-y-8 lg:space-y-0">
      <div className="space-y-4">
        <h3 className="text-3xl font-bold">Movement for Change Youth Council</h3>
        <h4 className="text-2xl">mcyc.22.0512@gmail.com</h4>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/" className="text-xl">Home</Link>
          <Link href="/past_events" className="text-xl">Past Events</Link>
          <Link href="/team" className="text-xl">Our Team</Link>
          <Link href="/sponsors" className="text-xl">Sponsors</Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-10 w-full lg:w-auto">
        <div className="w-40 lg:w-auto">
          <img src="key.webp" className="h-40 mx-auto lg:ml-auto"></img>
        </div>

        <div className="space-y-4 text-center lg:text-left">
          <p className="text-xl font-bold">Connect With Us</p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <img src='/Logo/instagram.webp' className="w-12"></img>
            <img src='/Logo/linkedin.webp' className="w-12"></img>
          </div>
          <p>Copyright &copy; 2023 MCYC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
