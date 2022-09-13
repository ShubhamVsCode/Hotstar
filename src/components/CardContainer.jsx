import React from "react";
import Card from "./Card";
import asset5 from "../assets/images/asset 5.webp";
import asset6 from "../assets/images/asset 6.webp";
import asset7 from "../assets/images/asset 7.webp";
import asset8 from "../assets/images/asset 8.webp";
import asset9 from "../assets/images/asset 9.webp";
import asset10 from "../assets/images/asset 10.webp";
import asset11 from "../assets/images/asset 11.webp";
import asset12 from "../assets/images/asset 12.webp";

const CardContainer = () => {
  return (
    <div className="mx-10 mt-10">
      <h2 className="text-white text-2xl mb-3">Latest & Trending</h2>

      <div className="cards grid gap-3 grid-cols-8">
        <Card
          title="Thor: Love and Thunder"
          description="1 hr 58 min, Action, Adventure, Science Fiction, Comedy, English,
              Hindi, Malayalam, Telgu, 2022"
          about="The God of Thunder teamup with any king and Lorem, ipsum dolor."
          image={asset5}
        />
        <Card
          title="Thor: Love and Thunder"
          description="1 hr 58 min, Action, Adventure, Science Fiction, Comedy, English,
              Hindi, Malayalam, Telgu, 2022"
          about="The God of Thunder teamup with any king and Lorem, ipsum dolor."
          image={asset6}
        />
        <Card
          title="Cuttputlli"
          description="1 hr 58 min, Action, Adventure, Science Fiction, Comedy, English,
              Hindi, Malayalam, Telgu, 2022"
          about="The God of Thunder teamup with any king and Lorem, ipsum dolor."
          image={asset7}
        />
        <Card
          title="Criminal Justice"
          description="1 hr 58 min, Action, Adventure, Science Fiction, Comedy, English,
              Hindi, Malayalam, Telgu, 2022"
          about="The God of Thunder teamup with any king and Lorem, ipsum dolor."
          image={asset8}
        />
        <Card
          title="Heaven"
          description="1 hr 58 min, Action, Adventure, Science Fiction, Malayalam, Telgu, 2022"
          about="The God of ."
          image={asset9}
        />
        <Card
          title="Thor: Love and Thunder"
          description="1 hr 58 min, Action, Adventure, Science Fiction, Comedy, English,
              Hindi, Malayalam, Telgu, 2022"
          about="The God of Thunder teamup with any king and Lorem, ipsum dolor."
          image={asset10}
        />
        <Card
          title="Thor: Love and Thunder"
          description="1 hr 58 min, Action, Adventure, Science Fiction, Comedy, English,
              Hindi, Malayalam, Telgu, 2022"
          about="The God of Thunder teamup with any king and Lorem, ipsum dolor."
          image={asset11}
        />
        <Card
          title="Thor: Love and Thunder"
          description="1 hr 58 min, Action, Adventure, Science Fiction, Comedy, English,
              Hindi, Malayalam, Telgu, 2022"
          about="The God of Thunder teamup with any king and Lorem, ipsum dolor."
          image={asset12}
        />
      </div>
    </div>
  );
};

export default CardContainer;
