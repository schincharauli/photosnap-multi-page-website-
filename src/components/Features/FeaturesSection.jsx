import React from "react";

function FeaturesSection({ icon, title, description }) {
  return (
    <section>
      <div className="flex items-center flex-col font-DMSans ">
        <img className="mt-10 flex items-center" src={icon} />
        <h2 className="font-medium text-lg pt-6">{title}</h2>
        <p className="pl-12 pr-12 pt-2 text-sm flex text-center text-gray-500">
          {description}
        </p>
      </div>
    </section>
  );
}

export default FeaturesSection;
