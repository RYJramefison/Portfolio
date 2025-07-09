import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
       <Link href='/dialog' className={
      buttonVariants({
        size: "lg",
        text: "lg",
        variant: "red"
      })
    }>Test</Link>
    </div>
   
  );
}
