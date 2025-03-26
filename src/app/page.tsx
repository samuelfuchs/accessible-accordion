import { Accordion } from "@/components/Accordion";

const items = [
  {
    title: "What is WCAG?",
    content: "WCAG stands for Web Content Accessibility Guidelines...",
  },
  {
    title: "Why accessibility matters?",
    content: "Accessibility ensures everyone can use the web...",
  },
];

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Accessible Accordion Demo</h1>
      <Accordion items={items} />
    </main>
  );
}
