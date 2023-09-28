import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faVideo } from "@fortawesome/free-solid-svg-icons";

export default function VideoSpace() {
  return (
    <>
      <div className="flex items-center mb-[75px]">
        <FontAwesomeIcon
          icon={faVideo}
          className="mr-4 text-4xl text-violet-500"
        />
        <h1 className="text-4xl font-serif">Espace Vidéo</h1>
      </div>
      <div className="relative">
        <p className="text-custom-grey text-2xl">Commandes</p>
        <div className="absolute right-0 top-0 text-black">
          <div className=" flex items-center px-12 py-4 bg-custom-lightGrey border border-custom-grey text-white text-xl hover:bg-custom-grey transition duration-200 rounded-md cursor-pointer">
            <p className="mr-2">Nouvelle commande</p>
            <FontAwesomeIcon icon={faPlus} className="ml-2" />
          </div>
        </div>
      </div>
      <div className="mt-[40px] bg-custom-lightGrey rounded-md p-[15px]">
        <p>coucou</p>
      </div>
    </>
  );
}
