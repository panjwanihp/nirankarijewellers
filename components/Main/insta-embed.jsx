import React, { useEffect } from "react";

const InstagramEmbed = ({ postUrl }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <blockquote 
            class="instagram-media" 
            data-instgrm-permalink="${postUrl}?utm_source=ig_embed&amp;utm_campaign=loading" 
            data-instgrm-version="14" 
            style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"
          >
          </blockquote>
        `,
      }}
    />
  );
};

export default InstagramEmbed;
