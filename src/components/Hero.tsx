import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-display text-sm text-muted-foreground tracking-widest uppercase animate-pulse">
              Loading Experience…
            </div>
          </div>
        }
      >
        <Spline
          className="absolute inset-0 w-full h-full"
          scene="https://prod.spline.design/vtLe-VDOLxe3ImeH/scene.splinecode"
        />
      </Suspense>
    </section>
  );
}
