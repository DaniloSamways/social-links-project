import { InstagramLogo } from "phosphor-react";
import { useState } from "react";
import { ProfileImg } from "./ProfileImg";
import { SocialMediaIconButton } from "./SocialMediaIconButton";
import { SocialMediaLinkButton } from "./socialMediaLinkButton";


export function Card() {
  const [socialMediaLinks, setSocialMediaLinks] = useState({
    portfolio: "",
    github: "https://github.com/DaniloSamways",
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "https://www.instagram.com/danilo.samw/",
    youtube: "https://www.youtube.com/channel/UCeC_5G6O4VsV0l8ak1daw-A",
    whatsapp: ""
  })

  return (
    <div className="w-4/5 max-w-xs flex flex-col justify-center p-2 items-center">
      <ProfileImg />
      <p className="text-yellow-300">@danilo.samw</p>
      <div className="mt-5 min-w-full flex flex-col items-center gap-3">
        <SocialMediaLinkButton socialMediaName="portfólio" socialMediaLink={socialMediaLinks.portfolio} />
        <SocialMediaLinkButton socialMediaName="github" socialMediaLink={socialMediaLinks.github} />
        <SocialMediaLinkButton socialMediaName="linkedin" socialMediaLink={socialMediaLinks.linkedin} />
        <SocialMediaLinkButton socialMediaName="whatsapp" socialMediaLink={socialMediaLinks.whatsapp} />
      </div>
      <div className="flex items-center justify-center min-w-full mt-10 gap-4">
        <SocialMediaIconButton socialMediaName="youtube" socialMediaLink={socialMediaLinks.youtube} />
        <SocialMediaIconButton socialMediaName="instagram" socialMediaLink={socialMediaLinks.instagram} />
        <SocialMediaIconButton socialMediaName="twitter" socialMediaLink={socialMediaLinks.twitter} />
      </div>
    </div>
  );
}