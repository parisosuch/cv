import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsGithub, BsLinkedin, BsGlobe, BsMailbox } from "react-icons/bs";

// define the header data
let data = {
  name: "Paris Osuch",
  initials: "PO",
  summary: "Full Stack Engineer and Designer. Space Enthusiast.",
  location: "California, United States.",
  socials: [
    {
      name: "Github",
      icon: <BsGithub className="size-6" />,
      url: "https://github.com/parisosuch-dev/",
      aria: "Github"
    },
    {
      name: "LinkedIn",
      icon: <BsLinkedin className="size-6" />,
      url: "https://www.linkedin.com/in/parisosuch/",
      aria: "Linkedin"
    },
    {
      name: "Mail",
      icon: <BsMailbox className="size-6" />,
      url: "mailto:paris@parisosuch.com",
      aria: "Mailbox"
    },
  ],
  avatar: {
    src: "/me.jpg",
    alt: "Me. Photo Creds: Constance Gonzalez <3",
  },
};

export default function Header() {
  return (
    <div className="flex flex-row items-center space-x-2 sm:space-x-0 justify-center w-full">
      {/* Header Details Section */}
      <div className="w-3/4 space-y-2">
        <h1 className="text-2xl sm:text-4xl font-bold">{data.name}</h1>
        <p className="font-mono text-sm sm:text-md">{data.summary}</p>
        <div className="flex flex-row space-x-2 items-center">
          <BsGlobe />
          <p className="font-mono text-xs sm:text-sm underline">
            {data.location}
          </p>
        </div>
        <div className="space-x-2">
          {data.socials.map((social, index) => (
            <Button variant="outline" size="icon" key={index} asChild>
              <a href={social.url} target="_blank" aria-label={social.aria}>
                {social.icon}
              </a>
            </Button>
          ))}
        </div>
      </div>
      {/* Avatar Section */}
      <div className="flex w-1/4 items-center justify-center">
        <Avatar className="size-24 sm:size-28">
          <AvatarImage
            src={data.avatar.src}
            alt={data.avatar.alt}
            className="object-cover"
          />
          <AvatarFallback>{data.initials}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
