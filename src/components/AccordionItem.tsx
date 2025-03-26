type AccordionItemProps = {
  title: string;
  content: string;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
};

const AccordionItem = ({
  title,
  content,
  index,
  isOpen,
  onToggle,
}: AccordionItemProps) => (
  <div>
    <button
      aria-expanded={isOpen}
      aria-controls={`section-${index}`}
      id={`accordion-${index}`}
      onClick={() => onToggle(index)}
      className="font-semibold text-left w-full py-2 focus:outline focus:outline-2 focus:outline-blue-500"
    >
      {title}
    </button>
    <div
      id={`section-${index}`}
      role="region"
      aria-labelledby={`accordion-${index}`}
      hidden={!isOpen}
      className="pl-4 pt-2 text-gray-700"
    >
      {content}
    </div>
  </div>
);

export default AccordionItem;
