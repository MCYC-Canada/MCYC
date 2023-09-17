import Link from 'next/link'; // Import Link from 'next/link'

// Define props with a type
interface ButtonProps {
  name: string;
  style:string;
  link: string;
}

export default function Button(props: ButtonProps) {
  return (
    <div className={`bg-red-900 text-white ${props.style}`}>
  <Link href={props.link}>
    <span>{props.name}</span>
  </Link>
</div>

    
  );
}
