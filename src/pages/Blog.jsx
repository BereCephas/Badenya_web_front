import Header from "../components/Header";
import Articles from "../components/Articles";
import Searchfield from "../components/Searchfield";
const Blog = () => {
  return (
    <>
      <Header />
      <div className="Banner">
        <div className="bg-beige h-[40vh] w-full pt-16 px-16 flex flex-col  items-center justify-center text-bleu">
          <h1 className=" pb-5 font-bold text-4xl text-center">
            Le blog de Badenya
          </h1>
          <p className="text-sm text-extralight text-center pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            ipsam? Quo dolorum
          </p>
          <Searchfield />
        </div>
      </div>
      <Articles />
    </>
  );
};

export default Blog;
