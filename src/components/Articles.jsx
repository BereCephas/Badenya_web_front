import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import * as TextField from "@radix-ui/themes/styles.css";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import config from "../../config"; // Import the configuration file
import Searchfield from "../components/Searchfield";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const supabaseUrl = "https://ojevxladuhglfdtmqeaq.supabase.co";
      const supabaseKey = config.supabaseKey;
      const supabase = createClient(supabaseUrl, supabaseKey);

      let { data: articlesData, error } = await supabase
        .from("articles")
        .select("*");
      if (error) {
        console.error("Error fetching articles:", error);
      } else {
        console.log(articlesData);
        setArticles(articlesData);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <div className="h-screen "></div>
    </>
  );
};

export default Articles;
