"use client";

import { useState } from "react";
import AccordionItem from "./AccordionItem";

type AccordionProps = {
  items: { title: string; content: string }[];
};

export const Accordion = ({ items }: AccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="border border-gray-300 rounded-md divide-y divide-gray-200">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          index={index}
          isOpen={openIndexes.includes(index)}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};