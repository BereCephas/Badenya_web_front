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
              {/* <div className="grid grid-cols-5 grid-rows-8 gap-4 h-full w-full bg-beige place-items-center">
                <div>1</div> <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div> <div>15</div>
                <div>16</div> <div>17</div> <div>18</div>
                <div>19</div> <div>20</div> <div>21</div> <div>22</div>{" "}
                <div>23</div> <div>24</div>
                <div>25</div>
                <div>26</div>
                <div>27</div>
                <div>28</div>
                <div>29</div>
                <div>30</div>
                <div>31</div>
                <div>32</div>
                <div>33</div>
                <div>34</div>
                <div>35</div>
                <div>36</div>
                <div>37</div>
                <div>38</div>
                <div>39</div>
                <div>40</div>
              </div> */}
              Pas de devoir
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            <h1 className="text-3xl"> 2nd cycle</h1>
          </AccordionHeader>
          <AccordionBody>
            <div className="h-full flex justify-center items-center flex-col  w-full">
              {/* <div className="grid grid-cols-5 grid-rows-8 gap-4 h-full w-full bg-beige place-items-center">
                <div>1</div> <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div> <div>15</div>
                <div>16</div> <div>17</div> <div>18</div>
                <div>19</div> <div>20</div> <div>21</div> <div>22</div>{" "}
                <div>23</div> <div>24</div>
                <div>25</div>
                <div>26</div>
                <div>27</div>
                <div>28</div>
                <div>29</div>
                <div>30</div>
                <div>31</div>
                <div>32</div>
                <div>33</div>
                <div>34</div>
                <div>35</div>
                <div>36</div>
                <div>37</div>
                <div>38</div>
                <div>39</div>
                <div>40</div>
              </div> */}
              Pas de devoir
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            <h1 className="text-3xl"> Programme des activites</h1>
          </AccordionHeader>
          <AccordionBody>
            <div className="h-full flex justify-center items-center flex-col  w-full">
              {/* <div className="grid grid-cols-5 grid-rows-8 gap-4 h-full w-full bg-beige place-items-center">
                <div>1</div> <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div> <div>15</div>
                <div>16</div> <div>17</div> <div>18</div>
                <div>19</div> <div>20</div> <div>21</div> <div>22</div>{" "}
                <div>23</div> <div>24</div>
                <div>25</div>
                <div>26</div>
                <div>27</div>
                <div>28</div>
                <div>29</div>
                <div>30</div>
                <div>31</div>
                <div>32</div>
                <div>33</div>
                <div>34</div>
                <div>35</div>
                <div>36</div>
                <div>37</div>
                <div>38</div>
                <div>39</div>
                <div>40</div>
              </div> */}
              Pas de d'activites
            </div>
          </AccordionBody>
        </Accordion>
      </div>
      <Footer className="h-[10%]" />
    </>
  );
}
