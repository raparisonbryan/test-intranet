import { Tab } from "@headlessui/react";
import Dropdown from "@/components/Dropdown";
import { useState } from "react";
import Image from "next/image";
import CustomTab from "@/components/CustomTab";
import {
  faBox,
  faCamera,
  faChartBar,
  faGear,
  faHome,
  faMicrophone,
  faMusic,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VideoSpace from "@/components/VideoSpace";

export default function Home() {
  const [activeTabGroup, setActiveTabGroup] = useState("Video");

  return (
    <div className="container py-8 flex h-screen">
      <Tab.Group>
        <div className="w-1/6 h-5/6 min-w-[250px] max-w-[324px]">
          <div className="flex h-12">
            <div
              onClick={() => setActiveTabGroup("Video")}
              className={`flex flex-1 justify-center items-center rounded-t-[20px] cursor-pointer ${
                activeTabGroup === "Video"
                  ? "bg-custom-grey"
                  : "bg-transparent text-gray-400 opacity-20 hover:bg-custom-grey hover:bg-opacity-40"
              }`}
            >
              <FontAwesomeIcon
                icon={faVideo}
                className={`mr-2 ${
                  activeTabGroup === "Video"
                    ? "text-violet-500"
                    : "text-gray-400"
                }`}
              />
              <h2>Video</h2>
            </div>
            <div
              onClick={() => setActiveTabGroup("Audio")}
              className={`flex flex-1 justify-center items-center rounded-t-[20px] cursor-pointer ${
                activeTabGroup === "Audio"
                  ? "bg-custom-grey"
                  : "bg-transparent text-gray-400 opacity-20 hover:bg-custom-grey hover:bg-opacity-40"
              }`}
            >
              <FontAwesomeIcon
                icon={faMusic}
                className={`mr-2 ${
                  activeTabGroup === "Audio"
                    ? "text-orange-500"
                    : "text-gray-400"
                }`}
              />
              <h2>audio</h2>
            </div>
          </div>
          <div className="flex flex-col justify-flex-start h-full bg-custom-grey rounded-b-[20px] pt-12 px-8 gap-20">
            <div className="flex">
              <Image src="/Logo.png" width={100} height={100}></Image>
            </div>
            <Tab.List className="flex flex-col">
              {activeTabGroup === "Video" && (
                <div className="flex flex-col w-full gap-2">
                  <CustomTab label="Accueil" icon={faHome} />
                  <CustomTab label="Commandes" icon={faBox} />
                  <CustomTab label="Rapport" icon={faChartBar} />
                  <CustomTab label="casting" icon={faMicrophone} />
                  <CustomTab label="Demo" icon={faCamera} />
                  <CustomTab label="Paramètres" icon={faGear} />
                </div>
              )}
              {activeTabGroup === "Audio" && (
                <div className="flex flex-col w-full gap-2">
                  <CustomTab label="Audio Tab 1" />
                  <CustomTab label="Audio Tab 2" />
                  <CustomTab label="Audio Tab 3" />
                </div>
              )}
            </Tab.List>
          </div>
        </div>
        <div className="w-5/6 h-screen relative">
          <div className="absolute right-0 top-0 text-black">
            <Dropdown />
          </div>
          <div className="flex flex-1 flex-col h-full items-flex-start justify-flex-start mt-[150px] ml-[75px]">
            <Tab.Panels>
              {activeTabGroup === "Video" && (
                <>
                  <Tab.Panel>
                    <VideoSpace />
                  </Tab.Panel>
                  <Tab.Panel>
                    <p>Contenu de l'onglet vidéo 2</p>
                  </Tab.Panel>
                  <Tab.Panel>
                    <p>Contenu de l'onglet vidéo 3</p>
                  </Tab.Panel>
                  <Tab.Panel>
                    <p>Contenu de l'onglet vidéo 4</p>
                  </Tab.Panel>
                  <Tab.Panel>
                    <p>Contenu de l'onglet vidéo 5</p>
                  </Tab.Panel>
                  <Tab.Panel>
                    <p>Contenu de l'onglet vidéo 6</p>
                  </Tab.Panel>
                </>
              )}
              {activeTabGroup === "Audio" && (
                <>
                  <Tab.Panel>
                    <p>Contenu de l'onglet audio 1</p>
                  </Tab.Panel>
                  <Tab.Panel>
                    <p>Contenu de l'onglet audio 2</p>
                  </Tab.Panel>
                  <Tab.Panel>
                    <p>Contenu de l'onglet audio 3</p>
                  </Tab.Panel>
                </>
              )}
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </div>
  );
}
