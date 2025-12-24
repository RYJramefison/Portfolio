import { Timer, Zap, ZoomIn } from "lucide-react";

const Project1 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <p className="mb-4 text-sm text-muted-foreground lg:text-base">
          OUR VALUES
        </p>
        <h2 className="text-3xl font-medium lg:text-4xl">Why Choose Us?</h2>
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
              <Timer className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">Performance</h3>
            <p className="leading-7 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque
              doloremque! Eligendi.
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
              <ZoomIn className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">Quality</h3>
            <p className="leading-7 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque
              doloremque! Eligendi.
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
              <Zap className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">Innovation</h3>
            <p className="leading-7 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque
              doloremque! Eligendi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Project1 };

import { Lightbulb, ListChecks, MessageCircleMore } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Project2 = () => {
  return (
    <section className="py-32">
      <div className="container max-w-5xl">
        <Tabs defaultValue="feature-1">
          <TabsList className="flex h-auto w-full flex-col gap-2 bg-background md:flex-row">
            <TabsTrigger
              value="feature-1"
              className="flex w-full flex-col items-start justify-start gap-1 rounded-md border p-4 text-left whitespace-normal text-primary hover:border-primary/40 data-[state=active]:border-primary"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <span className="flex size-8 items-center justify-center rounded-full bg-accent lg:size-10">
                  <MessageCircleMore className="size-4 text-primary" />
                </span>
                <p className="text-lg font-semibold md:text-2xl lg:text-xl">
                  Get Started
                </p>
              </div>
              <p className="font-normal text-muted-foreground md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="feature-2"
              className="flex w-full flex-col items-start justify-start gap-1 rounded-md border p-4 text-left whitespace-normal text-primary hover:border-primary/40 data-[state=active]:border-primary"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <span className="flex size-8 items-center justify-center rounded-full bg-accent lg:size-10">
                  <Lightbulb className="size-4 text-primary" />
                </span>
                <p className="text-lg font-semibold md:text-2xl lg:text-xl">
                  Get Ideas
                </p>
              </div>
              <p className="font-normal text-muted-foreground md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="feature-3"
              className="flex w-full flex-col items-start justify-start gap-1 rounded-md border p-4 text-left whitespace-normal text-primary hover:border-primary/40 data-[state=active]:border-primary"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <span className="flex size-8 items-center justify-center rounded-full bg-accent lg:size-10">
                  <ListChecks className="size-4 text-primary" />
                </span>
                <p className="text-lg font-semibold md:text-2xl lg:text-xl">
                  Build
                </p>
              </div>
              <p className="font-normal text-muted-foreground md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="feature-1">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt=""
              className="aspect-video rounded-md object-cover"
            />
          </TabsContent>
          <TabsContent value="feature-2">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt=""
              className="aspect-video rounded-md object-cover"
            />
          </TabsContent>
          <TabsContent value="feature-3">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
              alt=""
              className="aspect-video rounded-md object-cover"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export { Project2 };



import {
    Code,
    GitBranch,
    List,
    Play,
    Sparkles,
    WandSparkles,
  } from "lucide-react";
  
  import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card";
  
  const Project3 = () => {
    return (
      <section className="py-32">
        <div className="container">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <h1 className="mb-6 text-4xl font-semibold text-pretty lg:text-5xl">
              This is where your feature goes
            </h1>
  
            <div className="mt-10 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-1">
                  <Code className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                  <p className="leading-snug text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pr-0 pb-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-1">
                  <Play className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                  <p className="leading-snug text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pr-0 pb-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-1">
                  <GitBranch className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                  <p className="leading-snug text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pr-0 pb-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-1">
                  <List className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                  <p className="leading-snug text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pr-0 pb-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-1">
                  <WandSparkles className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                  <p className="leading-snug text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pr-0 pb-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-1">
                  <Sparkles className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
                  <p className="leading-snug text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pr-0 pb-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export { Project3 };

  import {
    Infinity as InfinityIcon,
    MessagesSquare,
  } from "lucide-react";
  
  const feature = [
    {
      title: "Quality",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo.",
      icon: <ZoomIn className="size-6" />,
    },
    {
      title: "Innovation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo.",
      icon: <Zap className="size-6" />,
    },
    {
      title: "Customer Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo.",
      icon: <MessagesSquare className="size-6" />,
    },
    {
      title: "Reliability",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo.",
      icon: <InfinityIcon className="size-6" />,
    },
  ];
  
  const Project4 = () => {
    return (
      <section className="py-32">
        <div className="container">
          <div className="flex w-full flex-col items-center">
            <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
              <p className="text-sm text-muted-foreground">WHY WE ARE UNIQUE</p>
              <h2 className="text-3xl font-medium md:text-5xl">
                Bringing the best to you by the best in the industry
              </h2>
  
              <p className="text-muted-foreground md:max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                necessitatibus, culpa at vitae molestias tenetur explicabo.
                Voluptatum amet architecto suscipit pariatur eligendi repellendus
                mollitia dolore unde sint?
              </p>
            </div>
          </div>
          <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">
            {feature.map((feature, idx) => (
              <div
                className="flex flex-col justify-between rounded-lg bg-accent p-6 md:min-h-[300px] md:p-8"
                key={idx}
              >
                <span className="mb-6 flex size-11 items-center justify-center rounded-full bg-background">
                  {feature.icon}
                </span>
                <div>
                  <h3 className="text-lg font-medium md:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export { Project4 };

  import { ArrowRight } from "lucide-react";

  import { Badge } from "@/components/ui/badge";
  import { Button } from "@/components/ui/button";
  
  interface Post {
    id: string;
    title: string;
    summary: string;
    label: string;
    author: string;
    published: string;
    url: string;
    image: string;
  }
  
  interface Project5Props {
    tagline: string;
    heading: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    posts: Post[];
  }
  
  const Project5 = ({
    tagline = "Latest Updates",
    heading = "Blog Posts",
    description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
    buttonText = "View all articles",
    buttonUrl = "https://shadcnblocks.com",
    posts = [
      {
        id: "post-1",
        title: "Getting Started with shadcn/ui Components",
        summary:
          "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
        label: "Tutorial",
        author: "Sarah Chen",
        published: "1 Jan 2024",
        url: "https://shadcnblocks.com",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
      },
      {
        id: "post-2",
        title: "Building Accessible Web Applications",
        summary:
          "Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.",
        label: "Accessibility",
        author: "Marcus Rodriguez",
        published: "1 Jan 2024",
        url: "https://shadcnblocks.com",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
      },
      {
        id: "post-3",
        title: "Modern Design Systems with Tailwind CSS",
        summary:
          "Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries.",
        label: "Design Systems",
        author: "Emma Thompson",
        published: "1 Jan 2024",
        url: "https://shadcnblocks.com",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
      },
    ],
  }: Project5Props) => {
    return (
      <section className="py-32">
        <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              {tagline}
            </Badge>
            <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
              {heading}
            </h2>
            <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
              {description}
            </p>
            <Button variant="link" className="w-full sm:w-auto" asChild>
              <a href={buttonUrl} target="_blank">
                {buttonText}
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="grid grid-rows-[auto_auto_1fr_auto] pt-0"
              >
                <div className="aspect-16/9 w-full">
                  <a
                    href={post.url}
                    target="_blank"
                    className="transition-opacity duration-200 fade-in hover:opacity-70"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </a>
                </div>
                <CardHeader>
                  <h3 className="text-lg font-semibold hover:underline md:text-xl">
                    <a href={post.url} target="_blank">
                      {post.title}
                    </a>
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.summary}</p>
                </CardContent>
                <CardFooter>
                  <a
                    href={post.url}
                    target="_blank"
                    className="flex items-center text-foreground hover:underline"
                  >
                    Read more
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export { Project5 };



interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  tags?: string[];
}

interface Project6Props {
  heading?: string;
  description?: string;
  posts?: Post[];
}

const Project6 = ({
  heading = "Blog Posts",
  description = "Discover the latest insights and tutorials about modern web development, UI design, and component-driven architecture.",
  posts = [
    {
      id: "post-1",
      title:
        "Building Modern UIs: A Deep Dive into Shadcn and React Components",
      summary:
        "Join us for an in-depth exploration of building modern user interfaces using shadcn/ui and React. Learn best practices and advanced techniques.",
      label: "Web Design",
      author: "Sarah Chen",
      published: "15 Feb 2024",
      url: "https://shadcnblocks.com",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
      tags: ["Web Design", "UI Development"],
    },
    {
      id: "post-2",
      title: "Mastering Tailwind CSS: From Basics to Advanced Techniques",
      summary:
        "Discover how to leverage the full power of Tailwind CSS to create beautiful, responsive websites with clean and maintainable code.",
      label: "Web Design",
      author: "Michael Park",
      published: "22 Feb 2024",
      url: "https://shadcnblocks.com",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
      tags: ["Web Design", "CSS"],
    },
  ],
}: Project6Props) => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center gap-16">
        <div className="text-center">
          <h2 className="mx-auto mb-6 text-3xl font-semibold text-pretty md:text-4xl lg:max-w-3xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
            >
              <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                <div className="sm:col-span-5">
                  <div className="mb-4 md:mb-6">
                    <div className="flex flex-wrap gap-3 text-xs tracking-wider text-muted-foreground uppercase md:gap-5 lg:gap-6">
                      {post.tags?.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                    <a
                      href={post.url}
                      target="_blank"
                      className="hover:underline"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-4 text-muted-foreground md:mt-5">
                    {post.summary}
                  </p>
                  <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                    <span className="text-muted-foreground">{post.author}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">
                      {post.published}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center space-x-2 md:mt-8">
                    <a
                      href={post.url}
                      target="_blank"
                      className="inline-flex items-center font-semibold hover:underline md:text-base"
                    >
                      <span>Read more</span>
                      <ArrowRight className="ml-2 size-4 transition-transform" />
                    </a>
                  </div>
                </div>
                <div className="order-first sm:order-last sm:col-span-5">
                  <a href={post.url} target="_blank" className="block">
                    <div className="aspect-16/9 overflow-clip rounded-lg border border-border">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-opacity duration-200 fade-in hover:opacity-70"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Project6 };

  