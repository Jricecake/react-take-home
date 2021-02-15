import React from 'react';
import Media from './Media';

const Campaign = (props) => {
  const {
    campaign_name,
    campaign_icon_url,
    medias,
    pay_per_install,
  } = props.campaign;
  return (
    <>
      <div className="campaign-header">
        <img className="icon" src={campaign_icon_url}></img>
        <div>
          <h4>{campaign_name}</h4>
          <h5 className="install-price">{pay_per_install} per install</h5>
        </div>
      </div>
      <div className="media-container">
        {medias.map((m) => (
          <Media media={m} />
        ))}
      </div>
    </>
  );
};

export default Campaign;
