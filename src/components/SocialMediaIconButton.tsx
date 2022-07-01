import { InstagramLogo, TwitterLogo, YoutubeLogo } from "phosphor-react";

interface SocialMediaIconButtonProps {
  socialMediaName: string,
  socialMediaLink: string
}

export function SocialMediaIconButton({ socialMediaName, socialMediaLink }: SocialMediaIconButtonProps) {


  return (
    <a href={socialMediaLink} className="p-1 rounded-md group hover:bg-yellow-400 transition duration-500">
      {socialMediaName === "instagram"
        ? <InstagramLogo size={30} className="text-yellow-400 group-hover:text-[#3f0f6c] transition duration-500" />
        : null
      }
      {socialMediaName === "youtube"
        ? <YoutubeLogo size={30} className="text-yellow-400 group-hover:text-[#3f0f6c] transition duration-500" />
        : null
      }
      {socialMediaName === "twitter"
        ? <TwitterLogo size={30} className="text-yellow-400 group-hover:text-[#3f0f6c] transition duration-500" />
        : null
      }

    </a>
  )
}