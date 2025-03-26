import { Accordion } from "@/components/Accordion";
import Head from "next/head";

const items = [
  {
    title: "What is this project?",
    content: "It's a simple, accessible accordion built with Next.js.",
  },
  {
    title: "Why accessibility?",
    content: "Because everyone deserves a usable web experience.",
  },
  {
    title: "Why accessibility matters?",
    content: "Accessibility ensures everyone can use the web...",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 max-w-2xl mx-auto px-4 py-10">
      <Head>
        <title>Accessible Accordion</title>
      </Head>

      <h1 className="text-3xl font-bold mb-4">
        Accessible Accordion Component
      </h1>
      <p className="mb-6 text-gray-600">
        This project demonstrates a simple accordion built with accessibility in
        mind, following WCAG 2.1 guidelines.
      </p>
      <Accordion items={items} />

      <section className="mt-10 bg-blue-50 border border-blue-100 rounded-lg p-4">
        <h2 className="text-2xl font-semibold mb-2 text-blue-900">Why WCAG?</h2>
        <p className="text-gray-800">
          WCAG helps ensure websites are accessible to users with disabilities.
          Following these guidelines makes your product more inclusive and
          professional.
        </p>
      </section>
    </main>
  );
}
