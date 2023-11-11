import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../../Contants";
import React from "react";

const Links = () => {
  //   console.log(NAV_LINKS.map((links) => links.subCategories));
  return (
    <div>
      <ul className="flex list-none h-full gap-12 lg:flex ">
        {NAV_LINKS.map((links) => {
          //   console.log(links.subLinks.map((link) => link.label));
          return (
            <React.Fragment key={links.key}>
              <li className=" text-base text-black  cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-[#FF7E0D] relative">
                <Link to={links.href}>{links.label}</Link>
                {links.label == "HOME" ? (
                  <p className="flex flex-col absolute w-20 gap-2  ">
                    {links?.subLinks.map((link) => {
                      return (
                        <span className="hidden" key={link.key}>
                          {link.label}
                        </span>
                      );
                    })}
                  </p>
                ) : null}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;
