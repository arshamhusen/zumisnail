/* This example requires Tailwind CSS v2.0+ */
import { Link } from "react-router-dom";
import { Fragment } from "react";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ArrowCircleRightIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import { ChevronDownIcon, LockClosedIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import MobileMenu from "../mobile-menu";
import Axios from "axios";
import logo from "../../assets/logo/logo.svg";

// const Logo = require("../../assets/images/logo/logo-final.png");
const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

function useDynamicSVGImport(name, options = {}) {
  const ImportedIconRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { onCompleted, onError } = options;
  useEffect(() => {
    console.log(`../../assets/svg/${name}`);
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(`../../assets/uploads/svg/others/${name}`)
        ).ReactComponent;
        if (onCompleted) {
          onCompleted(name, ImportedIconRef.current);
        }
      } catch (err) {
        if (onError) {
          onError(err);
        }
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name, onCompleted, onError]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Framer Motion for icon animation
const Container = styled(motion.div)`
  position: relative;
  max-width: 250px;
  cursor: pointer;
`;

const AvasPayLogoMotion = {
  rest: {
    color: "black",
    opacity: 0,
    x: -130,
    y: -20,
    ease: "easeOut",
    duration: 0.2,
    type: "tween",
  },
  hover: {
    color: "black",
    opacity: 1,
    size: 24,
    x: -150,
    y: -20,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const Mousemotion = {
  rest: {
    color: "grey",
    x: 0,
    transition: {
      duration: 2,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    color: "blue",
    x: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const textMotion = {
  rest: {
    fill: "#08A0A2",
    x: 1.5,
    opacity: 0.7,
    ease: "easeOut",
    duration: 0.4,
    type: "tween",
  },
  hover: {
    color: "#1CEAB9",
    fill: "#92C740",
    x: 5,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

export default function Example() {
  const [isShowingCS, setIsShowingCS] = useState(false);
  const [isShowingDS, setIsShowingDS] = useState(false);
  const [isShowingOS, setIsShowingOS] = useState(false);
  const [isShowingAU, setIsShowingAU] = useState(false);
  const [menuHover, setMenuHover] = useState(true);
  const [icons, setIcons] = useState([]);
  const [iWantToCollectionServices, setIWantToCollectionServices] = useState(
    []
  );
  const [iWantToOtherServices, setIWantToOtherServices] = useState([]);

  function CSOpenHandler() {
    setIsShowingCS(true);
    setMenuHover(true);
  }

  function CSCloseHandler() {
    setIsShowingCS(false);
    setMenuHover(false);
  }

  function CSMouseOpenHandler() {
    if (menuHover) {
      setIsShowingCS(true);
    }
  }

  function DSOpenHandler() {
    setIsShowingDS(true);
    setMenuHover(true);
  }

  function DSCloseHandler() {
    setIsShowingDS(false);
    setMenuHover(false);
  }

  function DSMouseOpenHandler() {
    if (menuHover) {
      setIsShowingDS(true);
    }
  }

  function OSOpenHandler() {
    setIsShowingOS(true);
    setMenuHover(true);
  }

  function OSCloseHandler() {
    setIsShowingOS(false);
    setMenuHover(false);
  }

  function OSMouseOpenHandler() {
    if (menuHover) {
      setIsShowingOS(true);
    }
  }

  function AUOpenHandler() {
    setIsShowingAU(true);
    setMenuHover(true);
  }

  function AUCloseHandler() {
    setIsShowingAU(false);
    setMenuHover(false);
  }

  function AUMouseOpenHandler() {
    if (menuHover) {
      setIsShowingAU(true);
    }
  }

  async function getIcons() {
    Axios.get("http://10.0.11.210:4000/api/website/menu-icons").then((res) => {
      if (res.status == 200) {
        setIcons(res.data);
      }
    });
    Axios.get(
      "http://10.0.11.210:4000/api/website/collection-services/all-quick-links"
    ).then((res) => {
      if (res.status == 200) {
        setIWantToCollectionServices(res.data);
      }
    });
    Axios.get(
      "http://10.0.11.210:4000/api/website/other-services/all-quick-links"
    ).then((res) => {
      if (res.status == 200) {
        setIWantToOtherServices(res.data);
      }
    });
  }

  useEffect(() => {
    // getQuickLinks();
    getIcons();
    setMenuHover(false);
  }, []);
  const handleOnCompleted = useCallback(
    (iconName) => console.log(`${iconName} successfully loaded`),
    []
  );

  const handleIconError = useCallback((err) => console.error(err.message), []);

  const [currentMenu, setCurrentMenu] = useState();
  const [hightlightedMenu, setHighlightedMenu] = useState();

  const getHighligtedMenu = (current) => {
    if (
      current ===
        "http://10.0.11.210:41755/collection-services/house-hold/building-service" ||
      current ===
        "http://10.0.11.210:41755/collection-services/house-hold/building-plus-service" ||
      current ===
        "http://10.0.11.210:41755/collection-services/on-demand/caps" ||
      current ===
        "http://10.0.11.210:41755/collection-services/on-demand/caps-lite" ||
      current ===
        "http://10.0.11.210:41755/collection-services/on-demand/caps-cdw" ||
      current === "http://10.0.11.210:41755/collection-services/commercial"
    ) {
      setCurrentMenu(1);
    }
    if (
      current ===
        "http://10.0.11.210:41755/disposal-services/waste-management-facilities" ||
      current ===
        "http://10.0.11.210:41755/disposal-services/transfer-station-facilities" ||
      current ===
        "http://10.0.11.210:41755/disposal-services/special-projects" ||
      current === "http://10.0.11.210:41755/disposal-services/expired-waste"
    ) {
      setCurrentMenu(2);
    }
    if (
      current === "http://10.0.11.210:41755/other-services/docking-service" ||
      current ===
        "http://10.0.11.210:41755/other-services/vehicle-transfer-service"
    ) {
      setCurrentMenu(3);
    }
    if (
      current ===
        "http://10.0.11.210:41755/about-us/corporate-profile/our-company/1" ||
      current ===
        "http://10.0.11.210:41755/about-us/corporate-profile/our-company/2" ||
      current ===
        "http://10.0.11.210:41755/about-us/corporate-profile/our-company/3" ||
      current ===
        "http://10.0.11.210:41755/about-us/corporate-profile/our-company/4" ||
      current ===
        "http://10.0.11.210:41755/about-us/corporate-profile/location" ||
      current === "http://10.0.11.210:41755/about-us/media/press-releases" ||
      current === "http://10.0.11.210:41755/about-us/others/downloads" ||
      current === "http://10.0.11.210:41755/about-us/others/careers"
    ) {
      setCurrentMenu(4);
    }
    if (current === "http://10.0.11.210:41755") {
      setCurrentMenu(0);
    }
  };

  useEffect(() => {
    setCurrentMenu(0);
    getHighligtedMenu(window.location.href);
  }, []);

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "#08A0A2",
    },
  };

  const icon1 = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "#08A0A2",
    },
  };

  const icon2 = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "#92C740",
    },
  };

  return (
    <Popover className="sticky top-0 w:full z-30 md:hidden">
      <div
        className="absolute inset-0 shadow z-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20 bg-white">
        <div className="bg-gradient-to-r from-purple to-primary h-1 z-20"></div>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-2 py-2 sm:px-6 md:py-0 lg:px-6 md:justify-start md:space-x-5">
          <div className="flex flex-row justify-between w-full">
            <div className="col-span-2 py-3 items-center justify-center flex">
              <img src={logo} alt="Logo" className="h-20" />
            </div>
            {/* Menu */}
            <Popover.Group className="bg-white ml-2 rounded-md p-2 md:hidden inline-flex items-center justify-center  focus:outline-none">
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        // open ? "text-secondary" : "text-black",
                        "group bg-white rounded-md inline-flex items-center text-base  font-medium hover:text-secondary focus:outline-none  focus:ring-secondary"
                      )}
                    >
                      {open && (
                        <>
                          <XIcon
                            className={classNames(
                              // open ? "text-secondary" : "text-black",
                              "h-8 w-8 mt-1 group-hover:text-secondary"
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}

                      {!open && (
                        <>
                          <MenuIcon
                            className={classNames(
                              // open ? "text-secondary" : "text-black",
                              "h-8 w-8 mt-1 group-hover:text-secondary"
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      onMouseEnter={() => setIsShowingOS(true)}
                      onMouseLeave={() => setIsShowingOS(false)}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-x-full"
                      enterTo="opacity-100 translate-x-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-x-0"
                      leaveTo="opacity-0 translate-x-full"
                    >
                      <Popover.Panel className=" absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                        <div className="">
                          {/* Add Search Component */}

                          <MobileMenu />
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
    </Popover>
  );
}
