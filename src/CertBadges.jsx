import { Link } from "react-router-dom";

function CertBadges() {
  const certs = [
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      year: "2026",
      img: "/image/python-essentials-1.1.png",
      pdf: "/certificates/python-essentials-1.pdf",
    },
  ];

  return (
    <div className="certbadges">

      <div className="cert-col">
        <div className="section-header">
          <h2>Certification & Badges</h2>
        </div>

        <div className="sub-header">
          <h3>Certifications</h3>
          {/* <Link to="/certifications" className="custom-link">
            View All
          </Link> */}
        </div>

        <div className="cert-list">
          {certs.map((cert, index) => (
            <div key={index} className="cert-item">
              <span>
                {cert.title} ({cert.year})
              </span>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cert-col">
        <div className="sub-header">
          <h3>Badges</h3>
          {/* <Link to="/badges" className="custom-link">
            View All
          </Link> */}
        </div>

        <div className="badge-row">
          {certs.map((cert, index) => (
            <img
              key={index}
              src={cert.img}
              alt={cert.title}
              className="badge-img"
              onClick={() => window.open(cert.pdf, "_blank")}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default CertBadges;  