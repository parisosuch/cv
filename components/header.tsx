import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Me from "@/public/me.jpg";
import { BsGithub, BsLinkedin } from "react-icons/bs";

// define the header data
let data = {
    name: "Paris Osuch",
    initials: "PO",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at tincidunt lacus.",
    location: "Sacramento, CA. United States.",
    socials: [
        {
            name: "Github",
            icon: <BsGithub className="size-6" />,
            url: "https://github.com/parisosuch-dev/"
        },
        {
            name: "LinkedIn",
            icon: <BsLinkedin className="size-6" />,
            url: "https://www.linkedin.com/in/parisosuch/"
        },
    ],
    avatar: {
        src: "/me.jpg",
        alt: "Me. Photo Creds: Constance Gonzalez <3"
    }
}

export default function Header() {
    return (
        <div className="flex flex-row items-center justify-center w-full">
            {/* Header Details Section */}
            <div className="w-3/4 space-y-2">
                <h1 className="text-4xl font-bold">{data.name}</h1>
                <p>{data.summary}</p>
                <p>{data.location}</p>
                <div className="space-x-2">
                    {data.socials.map((social, index) => (
                        <Button variant='outline' size='icon' key={index} asChild>
                            <a href={social.url} target="_blank">
                                {social.icon}
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
            {/* Avatar Section */}
            <div className="flex w-1/4 items-center justify-center">
                <Avatar className="size-28">
                    <AvatarImage src={data.avatar.src} alt={data.avatar.alt} className="object-cover" />
                    <AvatarFallback>{data.initials}</AvatarFallback>
                </Avatar>
            </div>
        </div >
    );
}