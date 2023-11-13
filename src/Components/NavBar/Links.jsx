import { Link } from "react-router-dom";
import { NAV_LIST } from "./NavList";
import React, { useState } from "react";

const Links = () => {
  const [NavActive, setNavActive] = useState(null);
  //   console.log(NAV_LINKS.map((links) => links.subCategories));
  return (
    <div>
      <div className="flex  h-full gap-12 lg:flex">
        {NAV_LIST.map((links) => {
          //   console.log(links.subLinks.map((link) => link.label));

          return (
            <React.Fragment key={links.key}>
              {links.href ? (
                <Link className="hover:text-[#FF7E0D]" to={links.href}>
                  {links.label}
                </Link>
              ) : (
                <div className="relative ">
                  <button
                    onClick={() => {
                      if (NavActive === links.key) {
                        setNavActive(null);
                      } else {
                        setNavActive(links.key);
                      }
                    }}
                    className=" text-base text-black  cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-[#FF7E0D]"
                  >
                    {links.label}
                  </button>
                  {NavActive === links.key ? (
                    <div className="absolute z-10 flex flex-col bg-slate-300 p-4 top-10 right-[-40%]  ">
                      {links?.subLinks?.map((link) => {
                        return (
                          <Link
                            className="py-1 w-max hover:text-[#FF7E0D]"
                            to={link.href}
                            key={link.key}
                          >
                            {link.label}
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
