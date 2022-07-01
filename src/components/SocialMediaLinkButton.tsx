interface SocialMediaLinkButtonProps {
  socialMediaName: string,
  socialMediaLink: string
}

export function SocialMediaLinkButton({ socialMediaName, socialMediaLink }: SocialMediaLinkButtonProps) {
  return (
    <a href={socialMediaLink} target="_blank" rel="noreferrer" className="min-w-full">
      <button
        className="border-2 font-bold tracking-[0.05rem] border-yellow-500 text-yellow-400 min-w-full p-2 rounded-md hover:bg-yellow-500 hover:text-[#3f0f6c] transition duration-300"
      >
        <p className="uppercase">{socialMediaName}</p>
      </button>
    </a>
  )
}