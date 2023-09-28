import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Dropdown() {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="flex items-center gap-8 w-full justify-center rounded-md bg-transparent border border-custom-grey bg-opacity-20 pl-2 pr-4 py-2 text-white hover:bg-custom-grey transition duration-200">
          <div className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src="/john.jpeg"
                width={20}
                height={20}
              ></Image>
            </div>
            Options
          </div>
          <div>
            <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5 text-white-900 hover:text-violet-700" />
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-custom-black shadow-lg">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active
                      ? "bg-custom-lightGrey text-white"
                      : "text-custom-grey"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Edit
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active
                      ? "bg-custom-lightGrey text-white"
                      : "text-custom-grey"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Duplicate
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active
                      ? "bg-custom-lightGrey text-white"
                      : "text-custom-grey"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Archive
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active
                      ? "bg-custom-lightGrey text-white"
                      : "text-custom-grey"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Move
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active
                      ? "bg-custom-lightGrey text-white"
                      : "text-custom-grey"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Delete
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
