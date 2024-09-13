"use client";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: String;
};
type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;

function Select({ children, ...props }: SelectProps) {
  return (
    <div>
      {props.label && (
        <label
          className='text-blue-800 font-semibold'
          htmlFor={props.id || props.name}
        >
          {props.label}{" "}
          {props.required ? (
            <span className='text-red-500 text-xl'>*</span>
          ) : (
            <span className='text-gray-400 text-xs'>(optional)</span>
          )}
        </label>
      )}
      <select
        className='bg-slate-200 p-3 text-sm outline-none w-full rounded-md border border-slate-300 transition-all duration-300 placeholder:text-stone-400 text-stone-700 focus:text-black  focus:outline-none focus:ring-2 focus:ring-blue-800 disabled:bg-gray-200'
        {...props}
      >
        {children}
      </select>
    </div>
  );
}

function SelectOption({ children, ...props }: OptionProps) {
  return (
    <option className='bg-slate-300' {...props}>
      {children}
    </option>
  );
}

Select.Option = SelectOption;
export default Select;
