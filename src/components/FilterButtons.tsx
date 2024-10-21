import { usePathname } from 'next/navigation';
import { filters } from '@/helpers/filterButtonsData';

const FilterButtons = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-2">
      {filters[pathname]?.map((filter) => (
        <button
          key={filter.value}
          className={`${filter.color} text-white py-2 px-4 rounded-sm transition duration-300 w-[calc(50%-4px)] sm:w-auto`}
        >
          {filter.label}
        </button>
      ))}

      <button
        className="uppercase py-2 px-4 text-light-primary dark:text-dark-primary border-[#00A7E4] dark:border-dark-primary border-[2px] rounded-sm transition duration-300 w-[calc(50%-4px)] sm:w-auto"
      >
        Reset
      </button>
    </div>
  );
};

export default FilterButtons;
