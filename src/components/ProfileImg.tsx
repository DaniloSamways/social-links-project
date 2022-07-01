import Image from 'next/image';
import profileImg from '../assets/profileImg.jpg';

export function ProfileImg(){
  return(
    <div className="border-2 rounded-full p-[0.2rem] mb-2 border-yellow-500">
        <div className="relative mb-[-6.4px]">
          <Image src={profileImg} alt="Profile photo" width={150} height={150} className="rounded-full"/>
        </div>
      </div>
  );
}