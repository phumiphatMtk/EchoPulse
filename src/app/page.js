import Image from "next/image";
import { CardComponent } from "@/shared/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <CardComponent />
      </div>
    </main>
  );
}
