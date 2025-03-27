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
      aria-expanded={isOpen ? "true" : "false"}
      aria-controls={`section-${index}`}
      id={`accordion-${index}`}
      onClick={() => onToggle(index)}
      className={`cursor-pointer font-semibold text-left w-full py-3 px-4 flex items-center justify-between ${
        isOpen ? "bg-blue-50 text-blue-900" : "bg-gray-100 text-gray-900"
      } hover:bg-blue-100 focus:outline focus:outline-2 focus:outline-blue-600`}
    >
      <span>{title}</span>
      <span
        aria-hidden="true"
        className={`ml-2 transition-transform duration-100 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        ▼
      </span>
    </button>

    <div
      id={`section-${index}`}
      role="region"
      aria-labelledby={`accordion-${index}`}
      hidden={!isOpen}
      className="pl-6 pr-4 pb-4 pt-2 text-gray-800 bg-white"
    >
      {content}
    </div>
  </div>
);

export default AccordionItem;
