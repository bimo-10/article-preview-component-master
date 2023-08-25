import mobile from "./assets/images/drawers.jpg";
import avatar from "./assets/images/avatar-michelle.jpg";
import share from "./assets/images/icon-share.svg";
import fb from "./assets/images/icon-facebook.svg";
import pin from "./assets/images/icon-pinterest.svg";
import twitter from "./assets/images/icon-twitter.svg";
import { useState } from "react";

export default function App() {
  return (
    <main className="text-sm">
      <Hero>
        <Card
          title={`Shift the overall look and feel by adding these wonderful 
          touches to furniture in your home`}
          info={`Ever been in a room and felt like something was missing? 
          Perhaps it felt slightly bare and uninviting.I’ve got some 
          simple tips to help you make any room feel complete.`}
        />
      </Hero>
    </main>
  );
}

function Hero({ children }) {
  return (
    <section className="hero min-h-screen bg-Light-Grayish-Blue ">
      <div className="hero-content">{children}</div>
    </section>
  );
}

function Card({ title, info }) {
  const [isToggle, setIsToggle] = useState(false);

  function handleToggle() {
    setIsToggle(!isToggle);
    console.log(isToggle);
  }

  return (
    <section className="card w-96 lg:flex-row lg:w-[54rem]">
      <figure>
        <img
          src={mobile}
          alt={title || "alt"}
          className="min-h-full rounded-xl"
        />
      </figure>
      <div>
        <div className="card-body rounded-b-2xl">
          <Title title={title} info={info} />
        </div>
        <div
          className={`card-actions rounded-b-xl mt-10 items-center ${
            isToggle ? "bg-very-dark-grey" : ""
          }  justify-between px-10 ${isToggle ? "py-4" : ""}`}
        >
          {isToggle ? (
            <Modal />
          ) : (
            <>
              <div className="mr-4">
                <div className="avatar">
                  <div className="w-14 rounded-full">
                    <img src={avatar} alt="" />
                  </div>
                </div>
              </div>
              <div className="grow">
                <h3 className="text-very-dark-grey text-lg font-semibold">
                  Michelle
                </h3>
                <p className="text-Desaturated-Dark-Blue">28 Jun 2021</p>
              </div>
            </>
          )}

          {/* <div className="mr-4">
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src={avatar} alt="" />
              </div>
            </div>
          </div>
          <div className="grow">
            <h3 className="text-very-dark-grey text-lg font-semibold">
              Michelle
            </h3>
            <p className="text-Desaturated-Dark-Blue">28 Jun 2021</p>
          </div> */}
          <div>
            <button
              onClick={() => setIsToggle(!isToggle)}
              className="btn btn-circle border-none bg-Grayish-Blue"
            >
              <img src={share} alt="" className="" />
            </button>
          </div>
        </div>
        {/* <div className="dropdown dropdown-top">
            <label
              tabIndex={0}
              className="btn btn-circle bg-Grayish-Blue border-none m-1"
            >
              <img src={share} alt="" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24"
            >
              <li className="">
                <div className="avatar">
                  <div className="w-6 rounded-full">
                    <img src={fb} alt="" className="" />
                  </div>
                </div>
              </li>
            </ul>
          </div> */}
      </div>
    </section>
  );
}

function Title({ title, info }) {
  return (
    <>
      <h1 className="card-title font-bold text-very-dark-grey">
        {title || "title text"}
      </h1>
      <p className="text-Desaturated-Dark-Blue">{info || "info text"}</p>
    </>
  );
}

function Modal() {
  return (
    <>
      <div className="mr-4">
        <h1>SHARE</h1>
      </div>
      <img src={fb} alt="" className="mr-2" />
      <img src={pin} alt="" className="mr-2" />
      <img src={twitter} alt="" />
      <div className="grow"></div>
    </>
  );
}

/*
Shift the overall look and feel by adding these wonderful 
touches to furniture in your home 
Ever been in a room and felt like something was missing? 
Perhaps it felt slightly bare and uninviting.I’ve got some 
simple tips to help you make any room feel complete.Michelle 
Appleton 28 Jun 2020 Share
*/
