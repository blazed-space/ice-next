import { Menu, MenuItem } from "@/lib/types/site";

const mainMenu = {
    _id: "root",
    nav: [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "About",
            href: "/about"
        },
        {
            label: "Documentation",
            href: "/docs"
        },
        {
            label: "Components",
            href: "/components"
        }
    ] as MenuItem[],
    cta: {
        label: "GitHub",
        href: "https://github.com/blazed-space/ice-next"
    } as MenuItem
} as Menu;

export {
    mainMenu
};