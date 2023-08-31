import { Brand, Config, Social } from "@/lib/types/app";

const config = {
    name: "Ice Next",
    fbAppId: "",
    description: "An awesome framework and system for Next.js"
} as Config;

const social = {
    facebook: "https://www.facebook.com/blazedlabs",
    instagram: "https://www.instagram.com/blazed_labs/",
    github: "https://github.com/blazed-labs",
    twitter: "https://twitter.com/BlazedLabs"
} as Social

const brand = {
    logo: "/icons/beaker_dark.svg",
    company: "Blazed Labs LLC",
    email: "hello@blazed.space"
} as Brand;

export {
    config, brand, social
};