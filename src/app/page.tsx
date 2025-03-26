import { Accordion } from "@/components/Accordion";

const items = [
  {
    title: "Item 1",
    content: "Content 1",
  },
  {
    title: "Item 2",
    content: "Content 2",
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
