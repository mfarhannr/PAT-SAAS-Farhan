import React from "react";
import { Card } from "flowbite-react";

const newsData = [
  {
    title: "Memperingati Hari Lahir Pancasila",
    image: "/src/img/1.jpg",
    description:
      "Memperingati Hari Lahir Pancasila adalah upaya mengukuhkan kembali komitmen pada persatuan dalam keberagaman. Selamat Hari Lahir Pancasila! 🇮🇩✨",
    link: "#",
  },
  {
    title: "Memperingati Hari Kebangkitan Nasional",
    image: "/src/img/2.jpg",
    description:
      "Kita kobarkan semangat kebangkitan! Di era digital ini, teknologi bagaikan kunci pembuka gerbang dunia, dan pemuda adalah pemegang kuncinya 🔥🔥",
    link: "#",
  },
  {
    title: "MemperingatHari Pendidikan Nasional",
    image: "/src/img/3.jpg",
    description:
      "Belajar bukan sekedar memperoleh ilmu di sekolah. Ini tentang mengembangkan keterampilan baru, memecahkan masalah, dan beradaptasi dengan situasi baru.",
    link: "#",
  },
];

function News() {
  return (
    <div id="berita">
      <div className="container mx-auto my-12">
        <h1 className="text-[32px] font-bold mx-6 mb-2">Berita Terbaru</h1>
        <div className="grid lg:grid-cols-3 lg:gap-12 gap-4 mx-6">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="bg-white rounded-lg dark:bg-gray-800 text-justify"
            >
              <div className="py-2">
                <a href={news.link}>
                  <h5 className="mb-2 text-[23px] font-bold tracking-tight text-gray-900 dark:text-white">
                    {news.title}
                  </h5>
                </a>
              </div>
              <a href={news.link}>
                <img
                  className="rounded-lg w-full max-h-80 object-cover object-top"
                  src={news.image}
                  alt={news.title}
                />
              </a>
              <div className="p-5 px-0 text-justify">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {news.description}
                </p>
                <a
                  href={news.link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Selengkapnya
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
