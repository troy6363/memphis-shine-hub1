import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Skeleton } from "@/components/ui/skeleton";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 91;
const FRAME_PATH = "hero-frames/ezgif-frame-";

// Generate frame URLs
const getFrameUrl = (index: number): string => {
  const frameNumber = String(index).padStart(3, "0");
  return `${FRAME_PATH}${frameNumber}.jpg`;
};

interface HeroScrollAnimationProps {
  children: React.ReactNode;
}

const HeroScrollAnimation = ({ children }: HeroScrollAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    // Set canvas size to match container
    const resizeCanvas = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Preload all images
    const loadImages = async () => {
      const images: HTMLImageElement[] = [];
      let loadedCount = 0;

      const loadPromises = Array.from({ length: FRAME_COUNT }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            loadedCount++;
            setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
            resolve(img);
          };
          img.onerror = () => {
            console.error(`Failed to load frame ${i + 1}`);
            reject(new Error(`Failed to load frame ${i + 1}`));
          };
          img.src = getFrameUrl(i + 1);
        });
      });

      try {
        const loadedImages = await Promise.all(loadPromises);
        images.push(...loadedImages);
        imagesRef.current = images;
        setIsLoading(false);

        // Draw first frame immediately
        drawFrame(0);
      } catch (error) {
        console.error("Error loading frames:", error);
        setIsLoading(false);
      }
    };

    // Draw a specific frame to the canvas
    const drawFrame = (frameIndex: number) => {
      const img = imagesRef.current[frameIndex];
      if (!img || !context || !canvas) return;

      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate scaling to cover the canvas (object-fit: cover behavior)
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        // Canvas is wider than image ratio - fit to width
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        // Canvas is taller than image ratio - fit to height
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    loadImages();

    // Set up ScrollTrigger after images are loaded
    const setupScrollTrigger = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            const frameIndex = Math.min(
              Math.floor(self.progress * FRAME_COUNT),
              FRAME_COUNT - 1
            );
            if (frameIndex !== currentFrameRef.current) {
              currentFrameRef.current = frameIndex;
              drawFrame(frameIndex);
            }
          },
        },
      });

      return tl;
    };

    // Wait for images to load before setting up ScrollTrigger
    const checkAndSetup = setInterval(() => {
      if (imagesRef.current.length === FRAME_COUNT) {
        clearInterval(checkAndSetup);
        setupScrollTrigger();
      }
    }, 100);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearInterval(checkAndSetup);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Canvas for frame animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: "cover" }}
      />

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background">
          <Skeleton className="w-64 h-2 mb-4" />
          <p className="text-muted-foreground text-sm">
            Loading... {loadProgress}%
          </p>
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40 z-20" />

      {/* Content */}
      <div className="relative z-30 h-full">{children}</div>
    </div>
  );
};

export default HeroScrollAnimation;
