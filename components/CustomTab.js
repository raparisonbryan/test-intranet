import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CustomTab({ label, icon }) {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button
          className={`tab-button focus:ring-0 focus:outline-none ${
            selected
              ? "bg-custom-lightGrey text-white px-4 py-4 rounded-md w-full text-left text-xl"
              : "bg-transparent text-white px-4 py-4 rounded-md w-full text-left hover:bg-custom-lightGrey hover:bg-opacity-40 text-xl"
          }`}
        >
          <FontAwesomeIcon icon={icon} className="mr-2" />
          {label}
        </button>
      )}
    </Tab>
  );
}
