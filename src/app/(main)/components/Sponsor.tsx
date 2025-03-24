import Link from 'next/link'; // Import Link from 'next/link'

// Define props with a type
interface SponsorProps {
  name: string;
  link: string;
  source: string;
  size: string;
}

export default function Sponsor(props: SponsorProps) {
  return (
    <div>
        <img src={"/sponsor/"+props.source} width={props.size} className="pt-10 px-5 mx-auto block" />
        <Link href={props.link} target='_blank' className='py-10 font-bold text-themed-blue text-3xl block mx-auto underline' >{props.name}</Link>
    </div>

    
  );
}
