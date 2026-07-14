import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

const techStack: TechItem[][] = [
  [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://python.org" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://mysql.com" },
  ],
  [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", url: "https://flask.palletsprojects.com" },
    { name: "Socket.IO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg", url: "https://socket.io" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", url: "https://php.net" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", url: "https://supabase.com" },
  ],
  [
    { name: "Cloud Computing", icon: "https://img.icons8.com/color/96/cloud.png", url: "https://en.wikipedia.org/wiki/Cloud_computing" },
    { name: "Networking", icon: "https://img.icons8.com/color/96/network.png", url: "https://en.wikipedia.org/wiki/Computer_network" },
    { name: "AI", icon: "https://img.icons8.com/color/96/artificial-intelligence.png", url: "https://en.wikipedia.org/wiki/Artificial_intelligence" },
    { name: "Machine Learning", icon: "https://img.icons8.com/color/96/machine-learning.png", url: "https://en.wikipedia.org/wiki/Machine_learning" },
    { name: "DSA", icon: "https://img.icons8.com/color/96/source-code.png", url: "https://en.wikipedia.org/wiki/Data_structure" },
  ],
  [
    { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", url: "https://arduino.cc" },
    { name: "ESP32", icon: "https://img.icons8.com/color/96/electronics.png", url: "https://www.espressif.com/en/products/socs/esp32" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", url: "https://vercel.com" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg", url: "https://adobe.com/products/photoshop" },
  ],
  [
    { name: "Canva", icon: "https://img.icons8.com/color/96/canva.png", url: "https://canva.com" },
    { name: "Video Editing", icon: "https://img.icons8.com/color/96/video-editing.png", url: "https://en.wikipedia.org/wiki/Video_editing" },
    { name: "Ethical Hacking", icon: "https://img.icons8.com/color/96/cyber-security.png", url: "https://en.wikipedia.org/wiki/Ethical_hacking" },
    { name: "Prompting", icon: "https://img.icons8.com/color/96/chatgpt.png", url: "https://openai.com/chatgpt" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>
        
        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
