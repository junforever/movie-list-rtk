import { useId, useState } from 'react';

interface FilterSelectProps<T> {
  options: { label: string; value: T }[];
  label: string;
  handleOnChange: (value: T) => void;
}

export const CustomSelect = <T,>({ options, label, handleOnChange }: FilterSelectProps<T>) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<T>(options[0].value as T);
  const selectId = useId();

  return (
    <div className="flex flex-col xs:flex-row text-white gap-4 items-baseline">
      <label htmlFor={selectId} className="text-xl font-semibold">
        {label}
      </label>
      <div
        className={`flex items-center after:transition-all after:ease-in-out after:duration-100  relative after:content-['▼'] after:absolute after:right-2 after:text-xs ${open ? 'after:rotate-90' : ''}`}>
        <select
          id={selectId}
          onClick={() => setOpen(prev => !prev)}
          onChange={e => {
            const newValue = e.target.value as T;
            setValue(newValue);
            handleOnChange(newValue);
          }}
          onBlur={() => setOpen(false)}
          onKeyDown={e => (e.key === 'Enter' ? setOpen(prev => !prev) : '')}
          className="rounded-xl bg-select-brown font-semibold pl-2 pr-6 appearance-none cursor-pointer"
          value={value as string}>
          {options.map(option => (
            <option key={`${option.value}-${option.label}`} value={option.value as string}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
