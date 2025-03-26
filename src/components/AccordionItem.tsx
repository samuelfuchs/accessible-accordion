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
      className={`font-semibold text-left w-full py-3 px-4 ${
        isOpen ? "bg-blue-50 text-blue-900" : "bg-gray-100 text-gray-900"
      } hover:bg-blue-100 focus:outline focus:outline-2 focus:outline-blue-600`}
    >
      {title}
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
