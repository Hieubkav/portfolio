"use client"
import { cn } from "@/lib/utils";
// keep SSR to avoid flicker; no dynamic import

import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  Mail,
  MoreHorizontal,

  User,
} from 'lucide-react';

import Link from "next/link";
import { useEffect, useState } from "react";
import FramerWrapper from "./animation/FramerWrapper";
import { usePathname } from "next/navigation";

import NavDock from "@/components/animation/NavDock";

const Navbar = () => {

  const data = [
    {
      title: 'Home',
      icon: (
        <HomeIcon className='h-full w-full ' />
      ),
      href: '/',
    },
    {
      title: 'About',
      icon: (
        <User className='h-full w-full ' />
      ),
      href: '/about',
    },
    {
      title: 'Skills',
      icon: (
        <LightbulbIcon className='h-full w-full ' />
      ),
      href: '/skills',
    },
    {
      title: 'Education',
      icon: (
        <GraduationCap className='h-full w-full ' />
      ),
      href: '/education',
    },
    {
      title: 'Projects',
      icon: (
        <FolderGit2 className='h-full w-full ' />
      ),
      href: '/projects',
    },
   
    {
      title: 'Contact us',
      icon: (
        <Mail className='h-full w-full ' />
      ),
      href: '/contact',
    },
    {
      title: 'More',
      icon: (
        <MoreHorizontal className='h-full w-full ' />
      ),
      href: '/more',
    },
  ];
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname()
  
  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolling(window.scrollY > 0);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Run once on mount to set initial state
    update();

    return () => {
      window.removeEventListener('scroll', handleScroll as EventListener);
    };
  }, []);


  return (

    <div className={`fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[+9999999] ${scrolling ? "hidden":"block"}`}>
      <NavDock items={data} pathname={pathname} />
    </div>
  );
};

export default Navbar;
