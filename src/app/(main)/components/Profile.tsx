import Link from 'next/link'; // Import Link from 'next/link'

// Define props with a type
interface ProfileProps {
  name: string;
  src: string;
  position: string;
}

export default function Profile(props: ProfileProps) {
  return (
    <div className="m-5">
        <img src={"/team_photos/"+props.src} width="85%" className="border rounded-lg h-72 w-72 object-cover" />
        <p className="text-2xl font-bold mt-2">{props.name}</p>
        <p className="text-lg">{props.position}</p>
        {/* <img className="border rounded-lg h-60 w-60 object-cover" src="team_photos\management\mahrosh_zafar.jpg"></img> */}
    </div>


    
  );
}
