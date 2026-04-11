import { Link } from "react-router-dom";

function AllTechStack() {
  return (
    <div className="terminalPage">
        <h1>Yoww im not finish here!</h1>
      <div className="terminalBar">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
        <p>kali@linux: ~/tech-stack</p>
      </div>

      <div className="terminalContent">

        <p className="cmd">$ cat all_stack.txt</p>

        <br />

        <p className="section">Programming Languages:</p>
        <p className="output">Python, JavaScript, C, C#</p>

        <br />

        <p className="section">Frontend:</p>
        <p className="output">HTML, CSS, React, Tailwind CSS</p>

        <br />

        <p className="section">Backend:</p>
        <p className="output">Python (Django, Flask)</p>

        <br />

        <p className="section">Tools:</p>
        <p className="output">Git, GitHub, Linux, Figma, VS Code</p>

        <br />

        <p className="success">✔ scan complete — system stable</p>

        <br />

        <Link to="/" className="cdCmd">
          cd ..
        </Link>

      </div>

    </div>
  );
}

export default AllTechStack;