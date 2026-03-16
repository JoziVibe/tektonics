import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={64} reverse speed={40} speedOnHover={15}>
        {logos.map((logo, idx) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-6 select-none md:h-8 opacity-40 brightness-0 invert hover:opacity-100 transition-opacity"
            height={logo.height || "auto"}
            key={`logo-${logo.alt}-${idx}`}
            loading="lazy"
            src={logo.src}
            width={logo.width || "auto"}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
