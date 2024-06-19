import React from "react";
import { Card } from "flowbite-react";

const cardData = [
  {
    imgSrc: "/src/img/coding.jpg",
    alt: "Coding",
    title: "Klub Koding",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    imgSrc: "/src/img/desain.jpg",
    alt: "Design",
    title: "Klub Desain",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    imgSrc: "/src/img/game.jpg",
    alt: "Game",
    title: "Klub E-sport",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    imgSrc: "/src/img/robotik.jpg",
    alt: "Robotik",
    title: "Klub Robotik",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    imgSrc: "/src/img/futsal.jpg",
    alt: "Futsal",
    title: "Klub Futsal",
    description:
      "Ayo bermain futsal! Tingkatkan keterampilan dan nikmati pertandingan seru di Klub Futsal.",
  },
  {
    imgSrc: "/src/img/bulutangkis.jpg",
    alt: "Badminton",
    title: "Klub Bulutangkis",
    description:
      "Bergabunglah di Klub Bulutangkis untuk berlatih dan bersenang-senang di lapangan!",
  },
];

function Ekstrakurikuler() {
  return (
    <div id="ekskul" className="py-6">
      <div className="container mx-auto">
        <div className="mx-6">
          <h1 className="text-[32px] font-bold mb-2">Klub & Ekstrakurikuler</h1>
          <div className="grid lg:grid-cols-3 gap-4 ">
            <div className="lg:col-span-2 grid lg:grid-rows-3 lg:grid-flow-col gap-4">
              {cardData.map((card, index) => (
                <Card key={index} className="mr-5 mb-5">
                  <div className="flex">
                    <img
                      src={card.imgSrc}
                      className="w-32 h-32 object-cover rounded-lg mr-4"
                      alt={card.alt}
                    />
                    <div>
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {card.title}
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mb-5">
              <img
                src="https://media.licdn.com/dms/image/D5622AQHMTIBM_sturA/feedshare-shrink_800/0/1704291041084?e=2147483647&v=beta&t=2nN98WwxeiMwXSH3sS9oYULXG5F6JGHCEemwXoeAbiA"
                className="min-h-80 h-full object-cover rounded-lg"
                alt="Banner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ekstrakurikuler;
