import { Link } from "react-router-dom";

function TechStack() {
  return (
    <div className="tech-stacks">
      <div className="mystack">
        <div className="see">
          <h2>Cybersecurity Portfolio</h2>
          <Link to="/tech-stack">View &gt;</Link>
        </div>

        <div className="category">
          <h3>Skills</h3>
          <div className="skills">
            <span>Basic Ethical Hacking</span>
            <span>Networking Basics</span>
            <span>Linux Basics</span>
            <span>CTF Practice</span>
          </div>
        </div>

        <div className="category">
          <h3>Tools</h3>
          <div className="skills">
            <span>Kali Linux</span>
            <span>Nmap</span>
            <span>Wireshark</span>
            <span>Burp Suite</span>
            <span>GitHub</span>
          </div>
        </div>

        <div className="category">
          <h3>Programming</h3>
          <div className="skills">
            <span>Python</span>
            <span>JavaScript</span>
          </div>
        </div>
      </div>

      <div className="whoami">
        <h5>b3rl1n@kali ~ $ whoami</h5>
        <br />

        <p>
          Jhon Aldrix Bernil | b3rl1n | PH<br /><br />
        </p>

        <p>
          Polytechnic University of the Philippines<br /><br />
        </p>

        <p>
          Cybersecurity student focused on ethical hacking, penetration testing,
          and defensive security practices.<br /><br />

          Actively learning through CTFs, labs (TryHackMe / Hack The Box style environments),
          and real-world security concepts.<br /><br />

          Passionate about understanding how systems break — and how to secure them.
        </p>

        <p>
          Member of A1SBERG cybersecurity community.
        </p>
      </div>
    </div>
  );
}

export default TechStack