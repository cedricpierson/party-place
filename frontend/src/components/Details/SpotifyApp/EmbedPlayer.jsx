import React from "react";
import Iframe from "react-iframe";

export default function EmbedPlayer() {
  const defaultPlaylists = {
    american: "37i9dQZF1DX1I8r5TKL11Z",
    british: "56KwtEj1ujnxLC3goPJLe0",
    canadian: "6sIFSy7K2BmZXSrsudzSqj",
    chinese: "1HuLhcQu2aZ6VQePfObpuJ",
    croatian: "05Kbl0qgf6bJqrRj36v1hz",
    dutch: "7xrMpVSFn4GlmxvqseuTOr",
    egyptian: "4WrLR29U37XOw2nFIwAnt0",
    french: "5jMlZp1dvEUdrh8j4UawlY",
    greek: "5YYLMdpRVmlXbYwjtfVJ4F",
    indian: "2VHdhD77ZP0A3GuJ1MVEfQ",
    italian: "3ckPlDq2MADJsKFEScxatl",
    irish: "37i9dQZF1DWUrmUI5ur5GK",
    jamaican: "2xMPIISWaiVQ0xtyR4oNtb",
    japanese: "0ig2IiVTh2rnTcTgHZPHPi",
    malaysian: "3MH85EO45A05xfkWJHZOMv",
    mexican: "5CprLYitYtfBOme6c36TRV",
    moroccan: "2Uc759FNkLhwW4SurLnHja",
    polish: "37i9dQZEVXbN6itCcaL3Tt",
    portuguese: "0RmCzBa2zeGKG2blSipxVY",
    russian: "5nUeb09mcB8gpIiiYZ8zt7",
    spanish: "0u0oMCZEnWzbJnLNsycjGQ",
    thai: "5ITXdARLNLeuN5JmT2eCwb",
    tunisian: "5rFuRjfrnBY2KGgEtxVOFT",
    turkish: "1LxSfuEaAvjNBOy2dbVCU7",
    vietnamese: "37i9dQZF1EIgcobXTmqxI9  ",
  };

  const hash = window.location.hash.substring(1);
  const country = defaultPlaylists[hash];

  return (
    <div>
      <Iframe
        src={`https://open.spotify.com/embed/playlist/${country}?utm_source=generator&theme=0`}
        width="100%"
        height="280"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}
