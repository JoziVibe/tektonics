import { cn } from "@/lib/utils";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

export default function DemoOne() {
  return (
    <div className="min-h-screen w-full place-content-center">
    <div
        aria-hidden="true"
        className={cn(
          "-z-10 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
          "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
          "blur-[30px]"
        )}
      />

      <section className="relative mx-auto max-w-3xl">
        <h2 className="mb-5 text-center font-medium text-foreground text-xl tracking-tight md:text-3xl">
          <span className="text-muted-foreground">Trusted by experts.</span>
          <br />
          <span className="font-semibold">Used by the leaders.</span>
        </h2>
        <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={logos} />

        <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </section>
    </div>
  );
}


export const logos = [
  { src: "/assets/Logos/1.png", alt: "Logo 1" },
  { src: "/assets/Logos/2.png", alt: "Logo 2" },
  { src: "/assets/Logos/3.png", alt: "Logo 3" },
  { src: "/assets/Logos/4.png", alt: "Logo 4" },
  { src: "/assets/Logos/5.png", alt: "Logo 5" },
  { src: "/assets/Logos/6.png", alt: "Logo 6" },
  { src: "/assets/Logos/7.png", alt: "Logo 7" },
  { src: "/assets/Logos/8.png", alt: "Logo 8" },
  { src: "/assets/Logos/9.png", alt: "Logo 9" },
  { src: "/assets/Logos/10.png", alt: "Logo 10" },
  { src: "/assets/Logos/11.png", alt: "Logo 11" },
  { src: "/assets/Logos/12.png", alt: "Logo 12" },
  { src: "/assets/Logos/13.png", alt: "Logo 13" },
  { src: "/assets/Logos/14.png", alt: "Logo 14" },
  { src: "/assets/Logos/16.png", alt: "Logo 16" },
  { src: "/assets/Logos/17.png", alt: "Logo 17" },
  { src: "/assets/Logos/18.png", alt: "Logo 18" },
  { src: "/assets/Logos/19.png", alt: "Logo 19" },
  { src: "/assets/Logos/20.png", alt: "Logo 20" },
  { src: "/assets/Logos/21.png", alt: "Logo 21" },
  { src: "/assets/Logos/22.png", alt: "Logo 22" },
  { src: "/assets/Logos/23.png", alt: "Logo 23" },
  { src: "/assets/Logos/24.png", alt: "Logo 24" },
];