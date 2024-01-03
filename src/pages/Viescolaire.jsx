import Header from "../components/Header";
import MouvementCard from "../components/MouvementCard";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import config from "../../config";

export default function Viescolaire() {
  const [mouvements, setMouvements] = useState([]);

  useEffect(() => {
    const supabaseUrl = "https://ojevxladuhglfdtmqeaq.supabase.co";
    const supabaseKey = config.supabaseKey;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const fetchMouvements = async () => {
      try {
        const { data: mouvementsData, error } = await supabase
          .from("Mouvement")
          .select("*");

        if (error) {
          console.error("Error fetching mouvements:", error.message);
        } else {
          // Update the state with the fetched data
          console.log(mouvementsData);
          setMouvements(mouvementsData);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      }
    };

    fetchMouvements();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Les différents mouvements présents à Badenya
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          {mouvements.map((mouvement) => (
            <MouvementCard
              key={mouvement.id} // Ensure each component has a unique key
              name={mouvement.name}
              description={mouvement.description}
              presidentName={mouvement.presidentName}
              profilePicture={mouvement.profilePicture}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
