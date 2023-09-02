import Genre from "@/components/Genre";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Genre title="Action" />
      <Genre title="Crime" />
      <Genre title="Drama" />
    </main>
  );
}
