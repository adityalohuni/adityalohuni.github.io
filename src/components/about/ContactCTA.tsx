import React from "react";

type ContactCTAProps = {
  email: string;
};

export const ContactCTA: React.FC<ContactCTAProps> = ({ email }) => (
  <div className="p-4 border rounded-xl text-center">
    <div className="text-sm opacity-70">Looking to collaborate?</div>
    {email ? (
      <a
        href={`mailto:${email}?subject=Opportunity`}
        className="mt-3 inline-block px-4 py-2 border rounded-md"
      >
        Say hello
      </a>
    ) : (
      <div className="mt-3 text-sm opacity-60">Contact not configured</div>
    )}
  </div>
);
