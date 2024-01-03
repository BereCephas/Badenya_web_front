import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Programme() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Header className="h-[10%]" />
      <div className="bg-gray-100 h-[90%] flex flex-col justify-center items-center p-10 md:pt-20">
        <div className="title">
          <h1 className="text-4xl underline underline-offset-8">
            Deuxieme trimestre
          </h1>
        </div>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)} className="pt-20">
            <h1 className="text-3xl"> 1er cycle</h1>
          </AccordionHeader>
          <AccordionBody>
            <div className="h-full flex justify-center items-center flex-col  w-full">
              <table class="table-auto min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th class="py-2">#</th>
                    <th class="py-2">Classes</th>
                    <th class="py-2">Mercredi 12</th>
                    <th class="py-2">vendredi 14</th>
                    <th class="py-2">mercredi 19</th>
                    <th class="py-2">vendredi 21</th>
                    <th class="py-2">Mercredi 26</th>
                    <th class="py-2">vendredi 28</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">6e</td>
                    <td class="border px-4 py-2">Anglais</td>
                    <td class="border px-4 py-2">Français</td>
                    <td class="border px-4 py-2">Hg</td>
                    <td class="border px-4 py-2">Math</td>
                    <td class="border px-4 py-2">Svt</td>
                  </tr>

                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">5e</td>
                    <td class="border px-4 py-2">Anglais</td>
                    <td class="border px-4 py-2">Français</td>
                    <td class="border px-4 py-2">Hg</td>
                    <td class="border px-4 py-2">Math</td>
                    <td class="border px-4 py-2">Svt</td>
                  </tr>

                  <tr>
                    <td class="border px-4 py-2">3</td>
                    <td class="border px-4 py-2">4e</td>
                    <td class="border px-4 py-2">Anglais</td>
                    <td class="border px-4 py-2">Français</td>
                    <td class="border px-4 py-2">Hg</td>
                    <td class="border px-4 py-2">Math</td>
                    <td class="border px-4 py-2">Svt</td>
                  </tr>

                  <tr>
                    <td class="border px-4 py-2">4</td>
                    <td class="border px-4 py-2">3e</td>
                    <td class="border px-4 py-2">Anglais</td>
                    <td class="border px-4 py-2">Français</td>
                    <td class="border px-4 py-2">Hg</td>
                    <td class="border px-4 py-2">Math</td>
                    <td class="border px-4 py-2">Svt</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            <h1 className="text-3xl"> 2nd cycle</h1>
          </AccordionHeader>
          <AccordionBody>
            <div className="h-full flex justify-center items-center flex-col  w-full">
              <table class="table-auto min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th class="py-2">#</th>
                    <th class="py-2">Classes</th>
                    <th class="py-2">Mercredi 12</th>
                    <th class="py-2">vendredi 14</th>
                    <th class="py-2">mercredi 19</th>
                    <th class="py-2">vendredi 21</th>
                    <th class="py-2">Mercredi 26</th>
                    <th class="py-2">vendredi 28</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">2nde</td>
                    <td class="border px-4 py-2">Anglais</td>
                    <td class="border px-4 py-2">Français</td>
                    <td class="border px-4 py-2">Hg</td>
                    <td class="border px-4 py-2">Math</td>
                    <td class="border px-4 py-2">Svt</td>
                  </tr>

                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">5e</td>
                    <td class="border px-4 py-2">Anglais</td>
                    <td class="border px-4 py-2">Français</td>
                    <td class="border px-4 py-2">Hg</td>
                    <td class="border px-4 py-2">Math</td>
                    <td class="border px-4 py-2">Svt</td>
                    <td class="border px-4 py-2">Philo</td>
                  </tr>

                  <tr>
                    <td class="border px-4 py-2">3</td>
                    <td class="border px-4 py-2">4e</td>
                    <td class="border px-4 py-2">Anglais</td>
                    <td class="border px-4 py-2">Français</td>
                    <td class="border px-4 py-2">Hg</td>
                    <td class="border px-4 py-2">Math</td>
                    <td class="border px-4 py-2">Svt</td>
                    <td class="border px-4 py-2">Philo</td>
                  </tr>

                  <tr>
                    <td class="border px-4 py-2">4</td>
                    <td class="border px-4 py-2">3e</td>
                    <td class="border px-4 py-2">Anglais</td>
                    <td class="border px-4 py-2">Français</td>
                    <td class="border px-4 py-2">Hg</td>
                    <td class="border px-4 py-2">Math</td>
                    <td class="border px-4 py-2">Svt</td>
                    <td class="border px-4 py-2">Philo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            <h1 className="text-3xl"> Programme des activites</h1>
          </AccordionHeader>
          <AccordionBody>
            <div className="h-full flex justify-center items-center flex-col  w-full">
              <table class="table-auto min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th class="py-2">#</th>
                    <th class="py-2">Classes</th>
                    <th class="py-2">Mercredi 12</th>
                    <th class="py-2">vendredi 14</th>
                    <th class="py-2">mercredi 19</th>
                    <th class="py-2">vendredi 21</th>
                    <th class="py-2">Mercredi 26</th>
                    <th class="py-2">vendredi 28</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">2nde</td>
                    <td class="border px-4 py-2">Anglais</td>
                    <td class="border px-4 py-2">Français</td>
                    <td class="border px-4 py-2">Hg</td>
                    <td class="border px-4 py-2">Math</td>
                    <td class="border px-4 py-2">Svt</td>
                  </tr>

                  <tr>
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">5e</td>
                    <td class="border px-4 py-2">Anglais</td>
                    <td class="border px-4 py-2">Français</td>
                    <td class="border px-4 py-2">Hg</td>
                    <td class="border px-4 py-2">Math</td>
                    <td class="border px-4 py-2">Svt</td>
                    <td class="border px-4 py-2">Philo</td>
                  </tr>

                  <tr>
                    <td class="border px-4 py-2">3</td>
                    <td class="border px-4 py-2">4e</td>
                    <td class="border px-4 py-2">Anglais</td>
                    <td class="border px-4 py-2">Français</td>
                    <td class="border px-4 py-2">Hg</td>
                    <td class="border px-4 py-2">Math</td>
                    <td class="border px-4 py-2">Svt</td>
                    <td class="border px-4 py-2">Philo</td>
                  </tr>

                  <tr>
                    <td class="border px-4 py-2">4</td>
                    <td class="border px-4 py-2">3e</td>
                    <td class="border px-4 py-2">Anglais</td>
                    <td class="border px-4 py-2">Français</td>
                    <td class="border px-4 py-2">Hg</td>
                    <td class="border px-4 py-2">Math</td>
                    <td class="border px-4 py-2">Svt</td>
                    <td class="border px-4 py-2">Philo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionBody>
        </Accordion>
      </div>
      <Footer className="h-[10%]" />
    </>
  );
}
