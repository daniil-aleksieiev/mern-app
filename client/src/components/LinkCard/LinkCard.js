import React from 'react';

const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Link</h2>

      <p>Your link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
      <p>From: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
      <p>Clicks: {link.clicks}</p>
      <p>Created date: {new Date(link.date).toLocaleDateString()}</p>

    </>
  );
};

export default LinkCard;
