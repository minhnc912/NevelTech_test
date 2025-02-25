const DropdownSection: React.FC<{
  title: string;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
}> = ({ title, items, isOpen, onToggle }) => (
  <div className="bg-[#1A3157] rounded-[10px]">
    <div
      className="py-3 px-4 flex justify-between items-center cursor-pointer"
      onClick={onToggle}
    >
      <p>{title}</p>
      <img
        src="/arrow-down.svg"
        alt="arrow icon"
        className={`transform transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </div>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="bg-[#2A3E63] p-3 rounded-b-[10px] flex flex-col gap-2">
        {items.map((item, index) => (
          <p
            key={index}
            className="text-[#90A2BD] text-[15px] hover:text-white cursor-pointer"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  </div>
);
export default DropdownSection;
