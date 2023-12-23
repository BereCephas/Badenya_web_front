import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import * as TextField from "@radix-ui/themes/styles.css";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import config from "../../config"; // Import the configuration file
import Searchfield from "../components/Searchfield";
import Footer from "./Footer";
// import Card from "./Card";
import { Link } from "react-router-dom";

// Déplacez la fonction truncateText à l'extérieur de la fonction fetchArticles
const truncateText = (text, numWords) => {
  return text.split(" ").splice(0, numWords).join(" ");
};

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const supabaseUrl = "https://ojevxladuhglfdtmqeaq.supabase.co";
      const supabaseKey = config.supabaseKey;
      const supabase = createClient(supabaseUrl, supabaseKey);

      try {
        let { data: articlesData, error } = await supabase
          .from("articles")
          .select("*");
        if (error) {
          console.error("Error fetching articles:", error);
        } else {
          console.log(
            articlesData.sort(
              (a, b) => new Date(b.created_at) - new Date(a.created_at)
            )
          );

          setArticles(articlesData);
        }
      } catch (error) {
        console.error("Error fetching articles:", error.message);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <div className="h-full w-full flex flex-col items-center  xl:pl-44 xl:pr-44  md:pl-14 md:pr-14 sm:pl-10 sm:pr-10 gap-5 pt-10 pl-10 pr-10   ">
        {articles.map((item) => {
          return (
            <div
              className="min-w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
              key={item.id}
            >
              <a href="#">
                <img
                  className="rounded-t-lg min-w-full max-h-[20rem] "
                  src={`${item.cover_img}`}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-10">
                  {truncateText(item.content, 20) + " ..."}
                </p>
                <Link
                  to={`/blog/articles/${item.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  lire plus
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
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Articles;
