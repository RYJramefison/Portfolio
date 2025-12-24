// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Skills1Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Skills1 = ({
  heading = "Trusted by these companies",
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
      className: "h-4 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
      className: "h-7 w-auto",
    },
  ],
}: Skills1Props) => {
  return (
    <section className="py-64">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          {heading}
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Skills1 };

import { ArrowRight } from "lucide-react";

const departments = [
  {
    title: "Sales",
    roles: [
      {
        id: "role-1",
        title: "Sales Manager",
        location: "London",
        href: "#",
      },
      {
        id: "role-2",
        title: "Sales Development Representative",
        location: "London",
        href: "#",
      },
      {
        id: "role-3",
        title: "Sales Manager",
        location: "London",
        href: "#",
      },
    ],
  },
  {
    title: "Customer Success",
    roles: [
      {
        id: "role-4",
        title: "Customer Success Associate",
        location: "London",
        href: "#",
      },
    ],
  },
];

const Skills2 = () => {
  return (
    <section className="bg-background py-32">
      <div className="container">
        <h2 className="text-4xl font-medium md:text-6xl">Careers</h2>
        <p className="mt-6 whitespace-pre-wrap text-muted-foreground md:mb-20 md:text-lg">
          View our open roles.
        </p>
        {departments.map((department) => (
          <div key={department.title} className="mt-12 md:mt-20">
            <h3 className="mb-8 text-3xl font-medium md:text-4xl">
              {department.title}
            </h3>
            <ul className="divide-y divide-border border-y border-border">
              {department.roles.map((role) => (
                <li key={role.id} className="group">
                  <a href={role.href} className="flex items-center py-6">
                    <div>
                      <div className="font-medium md:text-lg">{role.title}</div>
                      <div className="text-xs text-muted-foreground md:mt-2 md:text-sm">
                        {role.location}
                      </div>
                    </div>
                    <ArrowRight className="ml-auto size-6 -translate-x-6 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Skills2 };
