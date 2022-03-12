import { useState } from "react";
import Modal from "./Modal";

const ListDetail = ({ title, id, body }) => {
  //modal state
  const [showModal, setShowModal] = useState(false);

  //ListDetail renders every individual todo
  return (
    <section
      className="cursor-pointer focus:outline-none  rounded transition duration-300 z-12"
      tabIndex="0"
    >
      <div
        onClick={() => setShowModal(true)}
        className=" overflow-hidden dark:bg-zinc-800 bg-white  relative cursor-pointer shadow-lg hover:shadow-xl dark:shadow-md dark:hover:shadow-xl duration-300 transition border  min-h-10  flex flex-col min-w-xs max-w-xs rounded-md pt-3 p-5 m-auto break-words h-full "
      >
        <div className="transition flex justify-between">
          {title === "" && body === "" ? (
            <p className="transition font-roboto text-lg dark:text-white">
              Empty note
            </p>
          ) : (
            <p className="lg:tracking-wide break-all font-medium transition font-roboto text-base sm:text-sm md:text-sm lg:text-sm dark:text-white ">
              {title}
            </p>
          )}
        </div>

        <p className="lg:tracking-wide transition pt-1 font-roboto text-base sm:text-sm md:text-sm lg:text-sm dark:text-white">
          {body}
        </p>
      </div>
      <Modal
        title={title}
        body={body}
        id={id}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </section>
  );
};

export default ListDetail;
