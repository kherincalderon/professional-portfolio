import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://twitter.com/kherincalderon"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <BsTwitter />
      </div>
    </a>

    <a
      href="https://gt.linkedin.com/in/kherincalderon/en"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <BsLinkedin />
      </div>
    </a>
    <a
      href="https://github.com/kherincalderon"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <BsGithub />
      </div>
    </a>
  </div>
);

export default SocialMedia;
