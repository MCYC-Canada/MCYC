import Link from 'next/link'; // Import Link from 'next/link'
import Button from './Button';

// Define props with a type
interface MonthProps {
  link: string;
}

export default function Month(props: MonthProps) {
  return (
    // `${props.style}`
    <div className='p-10 flex justify-between text-red-900'>
      <div className='p-10 w-2/3 '>
      <h2 className="text-5xl font-bold pb-5">Monthly Themes</h2>
      <div className='p-5 text-xl'>
      <p>Every month the MCYC Team estblishes a theme that they feel is significant to highlight for the following month. This is named the <b>“Key of the Month”</b> and for the rest of the month, MCYC works to curate and share a number of awreness posts, events, and resources related to the topics at hand. </p>
      <p className='py-5'>All past themes as well as the current theme are features on Instagram and the website.</p>
      <div className='md:flex'>
      <Button style="p-4 text-center m-5" link='/' name="Past Themes" />
      <Button style="p-4 text-center m-5" link='/' name="Key of the Month" />
      </div>
      
      </div>
      
      </div>
      <img className='w-1/4 h-1/4 flex items-center m-10' src={props.link}/>
      
</div>

    
  );
}
