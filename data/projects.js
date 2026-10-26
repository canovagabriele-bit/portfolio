window.PORTFOLIO = {
  meta: {
    name: "Gabriele Canova",
    role: "Electronic music · sound art · sound design · interactive systems",
    email: "canovagabriele@gmail.com",
    year: "2026",
    statement: "My research moves across electronic composition, space, gesture, image, voice and interactive systems. The portfolio is conceived as a living archive: a selection of works, processes and tools that can evolve over time without changing the visual structure of the site."
  },

  /*
    EXTERNAL MEDIA
    To keep the GitHub Pages repository lightweight, audio and video are hosted externally.
    Audio remains on SoundCloud as private/unlisted links and videos remain unlisted on YouTube.
    Links with an empty href are not displayed on the site.

    To add a new listening link:
    links: [
      { label: "SoundCloud", href: "https://soundcloud.com/..." }
    ]

    To add a YouTube preview in the project modal:
    videoEmbeds: [
      { label: "Guarda video", embed: "https://www.youtube-nocookie.com/embed/VIDEO_ID", external: "https://youtu.be/VIDEO_ID" }
    ]
  */

  projects: [
    {
      slug: "permanente-inizio",
      title: "Permanente Inizio",
      year: "2026",
      category: "Composition · Live electronics",
      format: "Harp, prepared harp & live electronics",
      image: "assets/img/permanente_score.jpg",
      summary: "Composition for harp, prepared harp and live electronics: the acoustic gesture is captured, analysed, transformed and returned as unstable electronic memory.",
      tags: ["Max/MSP", "prepared harp", "granular synthesis", "Ableton Push 2"],
      links: [
        { label: "Listen on SoundCloud", href: "https://soundcloud.com/bmashmusic/permanente-inizio-harp/s-ijgcQBZen1e?si=4ebb537ce0c24214a3b6fa46e0255e74&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { label: "Score", href: "assets/docs/permanente-inizio-partitura.pdf" },
        { label: "Legend", href: "assets/docs/permanente-inizio-legenda.pdf" },
        { label: "Documentation", href: "assets/docs/permanente-inizio-documentazione.pdf" },
        { label: "Max patch", href: "assets/docs/permanente-inizio.maxpat", download: true }
      ]
    },
    {
      slug: "campo-aperto",
      title: "Campo Aperto",
      year: "2022–23",
      category: "Electroacoustic composition",
      format: "Stereo · 6'29\"",
      image: "assets/img/campo.jpg",
      detailImage: "assets/img/campo-aperto-canvas.jpg",
      canvasCredit: "Canvas by Ferrati Anita",
      summary: "First electroacoustic composition: processes, textures, drones, logograms and analogue synthesis become materials for shaping form through listening.",
      tags: ["logograms", "analog synthesis", "DAW montage"],
      links: [
        { label: "Listen on SoundCloud", href: "https://soundcloud.com/bmashmusic/campo-aperto-1/s-MnRU8Irkqc0?si=f897c25d41d249e49f1ce876d5fc6d4c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
      ]
    },
    {
      slug: "superfluous",
      title: "Superfluous",
      year: "2022–23",
      category: "Concrete sound study",
      format: "Stereo · 2'42\"",
      image: "assets/img/superfluous-cover.webp",
      canvasCredit: "Canvas by Ferrati Anita",
      summary: "The studio’s residual sounds — doors, ticking, friction and sonic traces — become the central material of the composition.",
      tags: ["concrete sound", "sound design", "residual listening"],
      links: [
        { label: "Listen on SoundCloud", href: "https://soundcloud.com/bmashmusic/superfluous-2/s-iQa45eCBkSK?si=0d435a3a3df84667b8695731fb5441cc&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
      ]
    },
    {
      slug: "vox-mea-sum",
      title: "Vox Mea Sum",
      year: "2022–23",
      category: "Vocal study",
      format: "Stereo · 4'38\"",
      image: "assets/img/vox-mea-sum-cover.webp",
      canvasCredit: "Canvas by Ferrati Anita",
      summary: "Vowels and vocalisations are the work’s only source material: the voice becomes environment, timbral body and electroacoustic matter.",
      tags: ["voice", "post-production", "electroacoustic"],
      links: [
        { label: "Listen on SoundCloud", href: "https://soundcloud.com/bmashmusic/vox-mea-sum-4/s-ROFHERDeffo?si=c9c78af4f10e4b6dbef85da5328035e3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
      ]
    },
    {
      slug: "nubivagus",
      title: "Nubivagus",
      year: "2022–23",
      category: "Synthetic sound study",
      format: "Stereo · 6'14\"",
      image: "assets/img/nubivagus-cover.webp",
      canvasCredit: "Canvas by Ferrati Anita",
      summary: "A journey through synthetic dreams built exclusively from synthesizers and digital sound design, without concrete recordings.",
      tags: ["synthesis", "digital sound design", "synthetic landscape"],
      links: [
        { label: "Listen on SoundCloud", href: "https://soundcloud.com/bmashmusic/nubivagus-3/s-2nu2FolotDY?si=c9c78af4f10e4b6dbef85da5328035e3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
      ]
    },
    {
      slug: "wasalo",
      title: "Wasalo — l'anima vibrante",
      year: "2022–23",
      category: "Soundscape · Spatial composition",
      format: "Quadraphonic · 5'15\"",
      image: "assets/img/wasalo-cover.webp",
      canvasCredit: "Canvas by Ferrati Anita",
      summary: "Field recordings from Steven Feld’s research in Papua New Guinea, reorganised as a quadraphonic soundscape across front and rear fields.",
      tags: ["quadraphony", "field recording", "soundscape"],
      links: [
        { label: "Listen on SoundCloud", href: "https://soundcloud.com/bmashmusic/wasalo-stereo-version-5/s-jBe4apPMlK7?si=4ebb537ce0c24214a3b6fa46e0255e74&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
      ]
    },
    {
      slug: "acid-reign",
      title: "Acid Reign",
      year: "2025–26",
      category: "Immersive composition",
      format: "Electronic composition · spatial performance",
      image: "assets/img/acid-reign-canvas.jpg",
      detailImage: "assets/img/acid-reign-canvas.jpg",
      canvasCredit: "Canvas by Ferrati Anita",
      summary: "Unstable electronic matter, spatial movement and gestural control converge in a performative composition.",
      tags: ["immersive audio", "gesture", "Ableton Live"],
      links: [
        { label: "Listen on SoundCloud", href: "https://soundcloud.com/bmashmusic/acid-reign-ambisonics-3oa/s-6pjbJWwMr26?si=4ebb537ce0c24214a3b6fa46e0255e74&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
      ]
    },
    {
      slug: "air-controller",
      title: "Air Controller",
      year: "2025–26",
      category: "Interactive system",
      format: "Hand tracking · OSC · Max/MSP",
      image: "assets/img/air-controller-canvas.jpg",
      detailImage: "assets/img/air-controller-canvas.jpg",
      canvasCredit: "Canvas by Ferrati Anita",
      summary: "A gestural interface that translates hand distances, position and velocity into normalized musical data that can be mapped in real time.",
      tags: ["MediaPipe", "Python", "OSC", "Max for Live"],

      videoEmbeds: [
        {
          label: "Air Controller — Demonstration",
          embed: "https://www.youtube-nocookie.com/embed/-sXqeP1q9hw",
          external: "https://youtu.be/-sXqeP1q9hw?si=o41pguJbk15Jxtim"
        }
      ],

      links: [
        {
          label: "Watch on YouTube",
          href: "https://youtu.be/-sXqeP1q9hw?si=o41pguJbk15Jxtim"
        }
      ]
    },
    {
      slug: "sonic-shuffle",
      title: "Sonic Shuffle",
      year: "2023–24",
      category: "Live spatialization",
      format: "Multichannel performance",
      image: "assets/img/sonic-shuffle-canvas.jpg",
      detailImage: "assets/img/sonic-shuffle-canvas.jpg",
      canvasCredit: "Canvas by Ferrati Anita",
      summary: "A performative sound-direction system: logograms, multichannel routing and live spatialization reinterpret the ensemble’s materials in real time.",
      tags: ["SPAT", "LBAP", "Max/MSP", "Dante"],
      links: [
        { label: "Listen on SoundCloud", href: "https://soundcloud.com/bmashmusic/sonic-shuffle-binaural-version/s-VN04gIFsyNe?si=4ebb537ce0c24214a3b6fa46e0255e74&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { label: "Documentation", href: "assets/docs/sonic-shuffle-relazione.pdf" }
      ]
    },
    {
      slug: "arwe",
      title: "ARWE",
      year: "2025–26",
      category: "Performance · Fashion design",
      format: "Live electronic set",
      image: "assets/img/arwe-cover-2026.webp",
      summary: "Live electronic music for a fashion show: body, garment, stage space and gestural control become parts of the same performative system.",
      tags: ["fashion", "live electronics", "Air Controller"],
      links: [
        { label: "Photo gallery", href: "https://photos.app.goo.gl/6YR1yk2mRXfuwmyTA" }
      ]
    },
    {
      slug: "pinacoteca",
      title: "Pinacoteca Albertina",
      year: "2025–26",
      category: "Sound · Exhibition",
      format: "Site-specific sound",
      image: "assets/img/pinacoteca-look-01.webp",
      summary: "A sound project conceived for the exhibition space: sound acts on duration, environment and the perception of the garments.",
      tags: ["exhibition", "design", "space"],
      videoEmbeds: [
        { label: "Video and Instagram documentation", type: "instagram", embed: "https://www.instagram.com/p/DZ-PwOriCSY/embed/", external: "https://www.instagram.com/p/DZ-PwOriCSY/" }
      ],
      gallery: [
        { src: "assets/img/pinacoteca-opera.webp", alt: "Reference artwork for the Pinacoteca Albertina project" },
        { src: "assets/img/pinacoteca-look-01.webp", alt: "Garment presented in the Pinacoteca Albertina project" },
        { src: "assets/img/pinacoteca-look-02.webp", alt: "Garment presented in the Pinacoteca Albertina project" },
        { src: "assets/img/pinacoteca-look-03.webp", alt: "Garment presented in the Pinacoteca Albertina project" }
      ],
      links: [
        { label: "Open Instagram post", href: "https://www.instagram.com/p/DZ-PwOriCSY/" },
        { label: "Listen on SoundCloud", href: "https://soundcloud.com/bmashmusic/ambient-work-pinacoteca/s-0ObwCqPj2jn?si=2bcd3b91a0434f03bc41fe7aa13c3efd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
      ]
    },
    {
      slug: "margherita-data",
      title: "Materia",
      year: "2025–26",
      category: "Fashion film · Sound design",
      format: "Fixed-media audiovisual works",
      image: "https://img.youtube.com/vi/Mj9Pa5t4cjQ/hqdefault.jpg",
      summary: "Audiovisual compositions for fashion design. The works on matter, body and fabric build a relationship between visual surface, rituality, editing and listening.",
      tags: ["fashion film", "fixed media", "sound design"],
      videoEmbeds: [
        { label: "Materia I", embed: "https://www.youtube-nocookie.com/embed/Mj9Pa5t4cjQ", external: "https://youtu.be/Mj9Pa5t4cjQ" },
        { label: "Materia II", embed: "https://www.youtube-nocookie.com/embed/JBcslOZFG6U", external: "https://youtu.be/JBcslOZFG6U" },
        { label: "Materia III", embed: "https://www.youtube-nocookie.com/embed/tO_wFDFCJF8", external: "https://youtu.be/tO_wFDFCJF8" }
      ],
      links: [
        { label: "Materia I", href: "https://youtu.be/Mj9Pa5t4cjQ" },
        { label: "Materia II", href: "https://youtu.be/JBcslOZFG6U" },
        { label: "Materia III", href: "https://youtu.be/tO_wFDFCJF8" }
      ]
    },
    {
      slug: "la-caduta-di-troia",
      title: "La caduta di Troia",
      year: "2024",
      category: "Music for image",
      format: "Silent film · stereo 2.1 / multichannel 8.1",
      image: "https://img.youtube.com/vi/Qh6TaDW7ADM/hqdefault.jpg",
      summary: "A contemporary re-scoring of a silent film: editing, foley, timbral palette and spatialization function as narrative tools.",
      tags: ["silent film", "foley", "spatialization"],
      videoEmbeds: [
        { label: "Watch video", embed: "https://www.youtube-nocookie.com/embed/Qh6TaDW7ADM", external: "https://youtu.be/Qh6TaDW7ADM" }
      ],
      links: [
        { label: "Video", href: "https://youtu.be/Qh6TaDW7ADM" }
      ]
    },
    {
      slug: "pinvision",
      title: "PinVision",
      year: "2025–26",
      category: "Audiovisual sound design",
      format: "Brief-based work",
      image: "https://img.youtube.com/vi/gJzSJBROwwE/hqdefault.jpg",
      summary: "Sound design developed from an audiovisual brief: communicative synthesis, sonic identity, visual rhythm, transitions, textures and precision of detail.",
      tags: ["sound identity", "audiovisual", "brief"],
      videoEmbeds: [
        { label: "Watch video", embed: "https://www.youtube-nocookie.com/embed/gJzSJBROwwE", external: "https://youtu.be/gJzSJBROwwE" }
      ],
      links: [
        { label: "Video", href: "https://youtu.be/gJzSJBROwwE" }
      ]
    },
    {
      slug: "tide",
      title: "Tide",
      year: "2025",
      category: "Music production",
      format: "Production for Nari · 5'06\"",
      image: "assets/img/tide.jpg",
      coverEmbed: "https://open.spotify.com/embed/track/1OpyOAYxYsS2Ar6Lic5yT1?utm_source=generator&theme=0",
      summary: "A track composed, recorded and produced with Nari: clean suspended vocals, hypnotic bass, Hydrasynth, Modal Cobalt and electronic materials shaped around the image of the tide.",
      tags: ["production", "voice", "Ableton Live", "Hydrasynth"],
      links: [
        { label: "Spotify", href: "https://open.spotify.com/intl-it/track/1OpyOAYxYsS2Ar6Lic5yT1" }
      ]
    },
    {
      slug: "dancing-motion",
      title: "Dancing Motion",
      year: "2022–23",
      category: "Preparatory research",
      format: "Video tracking · OSC · Max/MSP",
      image: "assets/img/dancing.jpg",
      summary: "Preparatory research on the relationship between movement, video tracking and real-time sound generation.",
      tags: ["TouchDesigner", "OSC", "Max/MSP"],
      links: [
        { label: "Documentation", href: "assets/docs/dancing-motion.pdf" },
        { label: "Max patch", href: "assets/docs/dancing-motion.maxpat", download: true }
      ]
    },
    {
      slug: "archi",
      title: "Study for String Instruments",
      year: "2022–23",
      category: "Preparatory research",
      format: "Open notation",
      image: "assets/img/archi.jpg",
      summary: "Open notation, logograms and graphic processes as devices for shaping gesture and sonic behaviour.",
      tags: ["open score", "strings", "graphic notation"],
      links: [
        { label: "Legend — General indications", href: "assets/docs/studio-archi-legenda-indicazioni.png" },
        { label: "Test score", href: "assets/docs/studio-archi-partitura.pdf" },
        { label: "Legend — Processes & techniques", href: "assets/docs/studio-archi-legenda-tecniche.png" },
        { label: "Documentation", href: "assets/docs/studio-archi-documentazione.pdf" }
      ]
    }
  ],


  performances: [
    {
      platform: "YouTube",
      title: "The Orchestra of Futuristic Noise Intoners",
      embed: "https://www.youtube-nocookie.com/embed/bROmkju_12s",
      external: "https://youtu.be/bROmkju_12s?si=v1H_kWwdcUNULSKK"
    },
    {
      platform: "Instagram",
      title: "Societè I - Luc Ferrari",
      embed: "https://www.instagram.com/reel/DAtanpdtgfh/embed/",
      external: "https://www.instagram.com/reel/DAtanpdtgfh/?utm_source=ig_web_copy_link&stkn=NTc4MTIwNjQ2YQ=="
    }
  ]
};
