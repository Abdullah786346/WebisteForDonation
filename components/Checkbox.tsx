import React from "react";
import Link from "next/link";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
  link: string;
  required?: boolean;
  isAgreement?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  link,
  required,
  isAgreement,
}) => {
  return (
    <div className="flex items-center mt-4">
      {" "}
      {/* Added margin-top for spacing */}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mr-2"
        required={required ? required : false}
      />
      <span className="text-sm text-blue-800 ">
        {label}
        {isAgreement ? (
          <Link
            href={link}
            target="_blank"
            className="underline"
            rel="noopener noreferrer"
          >
            <strong>Terms and Conditions</strong>
          </Link>
        ) : null}
      </span>
    </div>
  );
};

export default Checkbox;
