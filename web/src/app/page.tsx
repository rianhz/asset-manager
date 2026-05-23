"use client";
import { useRouter } from "next/navigation";
import BaseButton from "../components/base/BaseButton";
import { ArrowRight } from "@gravity-ui/icons";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="flex w-full min-h-screen justify-center flex-col items-center gap-4 landing-top-section">
        <div className="flex justify-center items-center flex-col gap-4">
          <h1 className="text-4xl text-center font-bold">Master Your Digital Universe.</h1>
          <p className="text-center max-w-2xl">
            The ultimate command center for your image assets. Seamlessly sync, organize, and deploy across Canva, Google Drive, and beyond.
          </p>
          <div className="flex justify-center items-center gap-4 mt-6">
            <BaseButton variant="primary" className="group" onClick={() => router.push("/login")}>
              Get Started 
              <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
            </BaseButton>
            <BaseButton variant="outline">Learn More</BaseButton>
          </div>
        </div>

      </section>
    </main>
  );
}
