import { Link } from "react-router-dom";

const techStackData = [
  {
    section: "Programming Languages:",
    output: "Python, JavaScript, C, C#",
  },
  {
    section: "Frontend:",
    output: "HTML, CSS, React, Tailwind CSS",
  },
  {
    section: "Backend:",
    output: "Python (Django, Flask), Next.js",
  },
  {
    section: "Tools:",
    output: "Git, GitHub, Linux, Figma, VS Code",
  },
];

function AllTechStack() {
  return (
    <div className="techStackPage">
      <div className="techStackCard">

        <div className="terminalBar">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <p>kali@linux: ~/tech-stack</p>
        </div>

        <div className="techStackContent">

          <p className="cmd">$ cat all_stack.txt</p>

          <br />

          {techStackData.map((item, index) => (
            <div key={index} className="techSection">
              <p className="section">{item.section}</p>
              <p className="techOutput">{item.output}</p>
            </div>
          ))}

          <p className="success">✔ scan complete — system stable</p>

          <Link to="/" className="cdCmd">
            cd ..
          </Link>

        </div>
      </div>
    </div>
  );
}

export default AllTechStack;