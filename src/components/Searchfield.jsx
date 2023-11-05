import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import config from "../../config"; // Import the configuration file
import { ClassNames } from "@emotion/react";

export default function FreeSolo() {
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
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={articles.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="rechercher" />}
      />
    </Stack>
  );
}
