'use client';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { ReactLenis } from 'lenis/react';

export interface ProjectData {
  title: string;
  description: string;
  link: string;
  color: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          backgroundImage: 'url("/assets/Card BG.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col md:flex-row relative -top-[20%] h-[500px] w-full max-w-5xl rounded-3xl p-10 origin-top shadow-2xl border border-white/10 text-white overflow-hidden`}
      >
        <div className="absolute inset-0 bg-[#020617]/70" />
        <div className={`relative z-10 flex flex-col justify-center w-full md:w-1/2 pr-0 md:pr-10 h-full`}>
          <div>
            <h2 className='text-3xl font-headline font-bold mb-6'>{title}</h2>
            <p className='text-lg leading-relaxed text-white/80'>{description}</p>
          </div>
        </div>

        <div
          className={`relative w-full md:w-1/2 h-full rounded-2xl overflow-hidden mt-8 md:mt-0`}
        >
          <motion.div
            className={`w-full h-full`}
            style={{ scale: imageScale }}
          >
            <img src={url} alt={title} className='absolute inset-0 w-full h-full object-cover' />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

interface ComponentRootProps {
  projects: ProjectData[];
}

const StackingCard = forwardRef<HTMLElement, ComponentRootProps>(({ projects }, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section 
      className='text-white w-full relative' 
      ref={container}
      style={{ height: `${projects.length * 100}vh` }}
    >
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            url={project.link}
            title={project.title}
            color={project.color}
            description={project.description}
            progress={scrollYProgress}
            range={[i / projects.length, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
});

StackingCard.displayName = 'StackingCard';

export default StackingCard;
