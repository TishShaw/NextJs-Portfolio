import Image from "next/image";

interface SanityBody {
    _created: string;
    _id: string;
    _rev: string;
    _updatedAt: string
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface Portfolio extends SanityBody {
    _type: "portfolio";
    name: string
    address: string;
    avatar: Image;
    backgroundInformation: string;
    email: string;
    phoneNumber: string;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    title: string;  
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    title: string;
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    image: Image;
    demo: string;
    github: string;
    summary: string;
    technologies: Technology[];
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}
