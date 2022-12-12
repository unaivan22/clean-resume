import React from "react";
import { Transition } from "@headlessui/react";
import { Toaster, ToastIcon, toast, resolveValue } from "react-hot-toast";

const TailwindToaster = () => {
  return (
    <Toaster>
      {(t) => (
        <Transition
          appear
          show={t.visible}
          className="transform p-4 flex bg-white rounded shadow-lg"
          enter="transition-all duration-150"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
        >
          <ToastIcon toast={t} />
          <p className="px-2">{resolveValue(t.message)}</p>
        </Transition>
      )}
    </Toaster>
  );
};

export default function Toast() {
  function showToast(){
    window.onload=() => toast.success("For mobile version, pinch the page for a better experience", {duration: 8000,})
  }
  return (
    <div className="m-8">
      {/* <button
        className="bg-blue-500 text-white p-4 rounded"
        onClick={() => toast.success("For mobile version, pinch the page for a better experience")}
      >
        Create TailwindCSS Toast
      </button> */}
      {showToast()}
      <TailwindToaster />
    </div>
  );
}
