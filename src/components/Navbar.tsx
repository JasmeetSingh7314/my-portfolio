"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { MdCircle } from "react-icons/md";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Home",
      link: "/",
    },

    {
      name: "About",
      link: "/about",
    },
    {
      name: "Photos",
      link: "/photos",
    },

    {
      name: "Resume",
      link: "/resume",
    },
    {
      name: "Projects",
      link: "/projects",
    },
  ];

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      className="scrollbar-none lg:w-full xl:w-[87vw]"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="text-white  hidden lg:flex">
            <p className="font-bold text-inherit text-[12px] ml-0 extra:-ml-32 tracking-widest ">
              JASMEET
            </p>

            <p className="font-bold text-inherit tracking-widest text-[12px]">
              <br />
              SINGH
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/about" className=" ">
            About
          </Link>
        </NavbarItem>
        
        <NavbarItem isActive>
          <Link href="/photos" aria-current="page" className=" ">
            Photos📸
          </Link>
        </NavbarItem>
        <NavbarItem className=" ">
          <Link color="foreground" href="/projects" className=" ">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem className=" ">
          <Link color="foreground" href="/resume" className=" ">
            Resume
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full text-4xl my-8 flex  items-center hover:underline"
              href={item.link}
              size="lg"
            >
              <MdCircle className="w-[10px] mr-3" /> {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
