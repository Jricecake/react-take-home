import React from 'react';
// import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';

const Media = (props) => {
  const { cover_photo_url, tracking_link, download_url } = props.media;
  return (
    <div className="media">
      <img src={cover_photo_url}></img>
      <div className="media-buttons">
        <a className="button" href={tracking_link}>
          Copy Link
        </a>
        <a className="button" href={download_url}>
          Download
        </a>
      </div>
    </div>
  );
};

export default Media;
