import React from "react";
import section1_pic_one from "../assets/home/mobile/create-and-share.jpg";
import arrow from "../assets/arrow.svg";
function Home() {
  return (
    <div>
      <section>
        <img src={section1_pic_one} />
        <div className=" bg-black text-white pl-6 pr-4 pt-16">
          <h1 className="">Create and share your photo stories. </h1>
          <p>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <div className="flex items-center">
            <button className="pr-3">GET AN INVITE</button>
            <span>
              <img src={arrow} />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
