"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Thumbnails,
  Inline,
  Slideshow,
  Counter,
  Fullscreen,
  Download,
  Share,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Gallery() {
  const [open, setOpen] = useState(false);

  const pictures = [
    { src: "/1.jpg", title: "Butterfly Room", description: "Description" },
    { src: "/2.jpg", title: "Exterior" },
    { src: "/3.jpg", title: "Banner" },
    { src: "/4.jpg", title: "Culture and Math" },
  ];

  return (
    <article
      className="w-screen h-screen md:h-full flex flex-col justify-center items-center"
      
    >
      <div className="w-full h-screen flex flex-col items-center justify-center" style={{ maxWidth: "1000px", aspectRatio: "3 / 2" }}>
        <button
          className="text-xl w-48 text-white hidden md:block bg-gradient-to-br rounded-full from-purple-900 to-blue-400 transition duration-300 opacity-60 hover:opacity-100 leading-loose px-5 my-1"
          onClick={() => setOpen(true)}
        >
          Theater Mode
        </button>

        <Lightbox plugins={[Inline, Thumbnails, Captions]} slides={pictures} />
        <Lightbox 
            plugins={[Captions, Thumbnails, Slideshow, Counter, Fullscreen, Download, Share, Zoom]}
            open={open}
            close={() => setOpen(false)}
            slides={pictures} />
      </div>
    </article>
  );
}
