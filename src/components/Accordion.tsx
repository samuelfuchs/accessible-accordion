"use client";
import { useState } from "react";

type AccordionProps = {
  items: { title: string; content: string }[];
};

export const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => toggle(index)}>{item.title}</button>
          {openIndex === index && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
};
