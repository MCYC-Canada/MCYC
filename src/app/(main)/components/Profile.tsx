import Link from 'next/link'; // Import Link from 'next/link'
import Image from 'next/image'

// Define props with a type
interface ProfileProps {
  name: string;
  src: string;
  position: string;
}

export default function Profile(props: ProfileProps) {
  return (
    <div className="m-5">
        <Image
        src={"/team_photos/"+props.src}
        alt="Picture of the author" 
        width = {500}
        height = {500}
        // width={500} automatically provided
        // height={500} automatically provided
        loading="lazy"
        // blurDataURL="data:..." //automatically provided
        blurDataURL={`/team_photos_placeholders/${props.src.replace(/.jpg/gi, ".avi")}`} // Optional blur-up while loading
        placeholder='blur'
        className="border rounded-lg h-72 w-72 object-cover" 
        />
        {/* <img src={"/team_photos/"+props.src} width="85%" className="border rounded-lg h-72 w-72 object-cover" /> */}
        <p className="text-2xl font-bold mt-2">{props.name}</p>
        <p className="text-lg">{props.position}</p>
        {/* <img className="border rounded-lg h-60 w-60 object-cover" src="team_photos\management\mahrosh_zafar.jpg"></img> */}
    </div>


    
  );
}
