import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js"; // Assurez-vous d'installer le paquet Supabase
import config from "../../config";
import { Link } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  let formattedDate = "";
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const supabaseUrl = "https://ojevxladuhglfdtmqeaq.supabase.co";
      const supabaseKey = config.supabaseKey;
      const supabase = createClient(supabaseUrl, supabaseKey);

      try {
        const { data, error } = await supabase
          .from("articles")
          .select()
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching article:", error);
        } else {
          setArticle(data);
        }
      } catch (error) {
        console.error("Error fetching article:", error.message);
      }
    };

    fetchArticle();
  }, [id]);

  if (article) {
    const dateString = "2023-11-05T14:01:40.143434+00:00";
    formattedDate = new Date(dateString).toLocaleDateString("fr-FR");

    console.log(formattedDate);
  }

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen">
      <img
        src={article.cover_img}
        alt={article.title}
        className="w-full h-64 object-cover"
      />
      <div className="w-full  pl-14 pr-14 xl:pr-28 xl:pl-28   gap-5 pt-10 md:flex justify-between">
        <h1 className="text-3xl font-extrabold">{article.title}</h1>
        <p>{formattedDate}</p>
      </div>
      <hr className="border-t border-gray-300 my-4" />
      <div className="w-full  pl-14 pr-14 xl:pr-28 xl:pl-28   gap-5 pt-10 md:flex justify-between pb-10">
        <p>{article.content}</p>
      </div>
      <div className="pl-14 pr-14 xl:pr-28 xl:pl-28 ">
        <button
          type="button"
          className="w-full flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
        >
          <svg
            class="w-5 h-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <Link to={"/"}>Retour</Link>
        </button>
      </div>
    </div>
  );
};

export default Article;

// import { createClient } from "@supabase/supabase-js";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Article = ({ id }) => {
//   let formattedDate = "";
//   const [article, setArticle] = useState(null);

//   useEffect(() => {
//     const fetchArticle = async () => {
//       const supabaseUrl = "https://ojevxladuhglfdtmqeaq.supabase.co";
//       const supabaseKey = config.supabaseKey;
//       const supabase = createClient(supabaseUrl, supabaseKey);

//       try {
//         const { data, error } = await supabase
//           .from("articles")
//           .select()
//           .eq("id", id)
//           .single();

//         if (error) {
//           console.error("Error fetching article:", error);
//         } else {
//           setArticle(data);
//         }
//       } catch (error) {
//         console.error("Error fetching article:", error.message);
//       }
//     };

//     fetchArticle();
//   }, [id]);

//   if (article) {
//     const dateString = "2023-11-05T14:01:40.143434+00:00";
//     formattedDate = new Date(dateString).toLocaleDateString("fr-FR");
//   }

//   if (!article) {
//     return <div>Loading...</div>;
//   }

//   // Limiter le texte à 20 mots
//   const words = article.content.split(" ");
//   const truncatedContent =
//     words.length > 20 ? words.slice(0, 20).join(" ") + "..." : article.content;

//   return (
//     <div className="h-screen">
//       //{" "}
//       <img
//         src={article.cover_img}
//         alt={article.title}
//         className="w-full h-64 object-cover"
//       />
//       <div className="w-full  pl-14 pr-14 xl:pr-28 xl:pl-28   gap-5 pt-10 md:flex justify-between">
//         <h1 className="text-3xl font-extrabold">{article.title}</h1>
//         <p>{formattedDate}</p>
//       </div>
//       <hr className="border-t border-gray-300 my-4" />
//       <div className="w-full  pl-14 pr-14 xl:pr-28 xl:pl-28   gap-5 pt-10 md:flex justify-between pb-10">
//         <p>{article.content}</p>
//       </div>
//       <div className="pl-14 pr-14 xl:pr-28 xl:pl-28 ">
//         <button
//           type="button"
//           className="w-full flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
//         >
//           <svg
//             class="w-5 h-5 rtl:rotate-180"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
//             />
//           </svg>
//           <Link to={"/"}>Retour</Link>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Article;
