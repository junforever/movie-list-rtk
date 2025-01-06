import { useId, useState } from 'react';

interface FilterSelectProps {
  options: { label: string; value: string | number }[];
  label: string;
}

export const CustomSelect = ({ options, label }: FilterSelectProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(options[0].value);
  const selectId = useId();

  return (
    <div className="flex text-white gap-4 items-baseline">
      <label htmlFor={selectId} className="text-xl font-semibold">
        {label}
      </label>
      <div
        className={`flex items-center after:transition-all after:ease-in-out after:duration-100  relative after:content-['▼'] after:absolute after:right-2 after:text-xs ${open ? 'after:rotate-90' : ''}`}>
        <select
          id={selectId}
          onClick={() => setOpen(prev => !prev)}
          onChange={e => {
            setValue(e.target.value);
          }}
          onBlur={() => setOpen(false)}
          onKeyDown={e => (e.key === 'Enter' ? setOpen(prev => !prev) : '')}
          className="rounded-xl bg-select-brown font-semibold pl-2 pr-6 appearance-none cursor-pointer"
          value={value}>
          {options.map(option => (
            <option key={crypto.randomUUID()} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
