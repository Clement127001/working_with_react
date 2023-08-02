import React, { Fragment } from "react";
import classes from "./Sarah.module.css";

const Sarah = () => {
  return (
    <Fragment>
      <main className={classes.container}>
        <article className={classes.header}>
          <h1>Sarah's Favorite Animal</h1>
          <div className={classes["header_options"]}>
            <p>Home</p>
            <p>Fun Facts</p>
          </div>
          <div className={classes["header_info"]}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/440px-Moose_superior.jpg"
              alt="goose-image"
              title="Sarah's fav animal : goose"
            />
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos, quisquam eaque possimus eveniet, sapiente amet
                maxime necessitatibus, officia odit voluptatibus totam sed
                asperiores. Aliquid praesentium molestias, porro eaque dolorem
                omnis? Obcaecati exercitationem nisi animi
              </p>

              <span className={classes.info}>
                If you want to learn more about moose check out{" "}
                <a href="https://en.wikipedia.org/wiki/Moose">
                  its wikipedia page.
                </a>
              </span>
            </div>
          </div>
        </article>

        <section className={classes["container_info"]}>
          <div className={classes["info_1"]}>
            <h2>Moose are awesome because...</h2>

            <ol>
              <li>They can swim really well</li>
              <li>They can make really funny noise</li>
              <li>They can close their nostrils</li>
            </ol>
          </div>

          <div className={classes["info_2"]}>
            <h2>If I were a moose, I would...</h2>
            <ul>
              <li>Eat lots of lettuce</li>
              <li>Carry little animals on my antlers</li>
              <li>Swim to alaska</li>
            </ul>
          </div>
        </section>

        <section className={classes["container_video"]}>
          <h2>Moose video</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F3yse7vTWrw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>
      </main>
    </Fragment>
  );
};

export default Sarah;
