"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button"; // shadcn/ui
import { PlayCircle } from "lucide-react"; // icône pour le bouton vidéo

export default function Hero2() {
  return (
    <section className="container mx-auto py-20 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side */}
      <div className="max-w-xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Advanced Framer <br /> Expert Tutorials
        </h1>
        <p className="text-muted-foreground">
          Unlock exclusive access to premium tutorials, insider insights, and more.
          Enhance your creativity and elevate your learning journey.
        </p>
        <div className="flex items-center gap-4">
          <Button size="lg">Become a Member</Button>
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <PlayCircle className="w-5 h-5" />
            Presentation Video
          </Button>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative mt-10 md:mt-0">
        {/* Decorative Circle */}
        <div className="absolute inset-0 -z-10 flex justify-center items-center">
          <div className="w-64 h-64 rounded-full bg-orange-200" />
        </div>

        {/* Main Image */}
        <Image
          src="/hero-person.png" // remplace par ton image
          alt="Hero"
          width={400}
          height={400}
          className="rounded-xl object-cover"
        />

        {/* Floating Badges */}
        <div className="absolute top-4 left-4">
          <div className="bg-white shadow rounded-full p-2">
            📍
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-white shadow rounded-full p-2">
            📖
          </div>
        </div>

        {/* User Joined Badge */}
        <div className="absolute bottom-4 right-4 bg-white shadow rounded-full px-4 py-2 flex items-center gap-2">
          <div className="flex -space-x-2">
            <Image src="/avatar1.png" alt="User 1" width={24} height={24} className="rounded-full border" />
            <Image src="/avatar2.png" alt="User 2" width={24} height={24} className="rounded-full border" />
            <Image src="/avatar3.png" alt="User 3" width={24} height={24} className="rounded-full border" />
          </div>
          <span className="text-sm font-medium">7000+ people already joined</span>
        </div>
      </div>
    </section>
  );
}
