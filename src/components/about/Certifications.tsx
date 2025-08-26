import React from "react";

type Cert = {
  title: string;
  issuer: string;
  year: number;
  link: string;
};

type CertificationsProps = {
  certs: Cert[];
};

export const Certifications: React.FC<CertificationsProps> = ({ certs }) => (
  <div className="p-4 border rounded-xl">
    <h3 className="text-lg font-semibold">Certification</h3>
    <p className="mt-2 opacity-70">
      Proof of study — links to verification / artifacts
    </p>
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
      {(certs && certs.length > 0 ? certs : []).map((c) => (
        <a
          key={c.title}
          href={c.link || "#"}
          className="p-3 border rounded-md hover:shadow-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-sm font-medium">{c.title}</div>
          <div className="text-xs opacity-60">
            {c.issuer} • {c.year}
          </div>
        </a>
      ))}
      {(!certs || certs.length === 0) && (
        <div className="text-sm opacity-60">
          No certificates listed in data/about.json
        </div>
      )}
    </div>
  </div>);
