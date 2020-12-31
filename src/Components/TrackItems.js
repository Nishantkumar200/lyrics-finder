import React from "react";
import { Link } from "react-router-dom";

export default function TrackItems({ track }) {
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-1 p-4 ">
        <h5 className="card-title text-start ml-3">{track.artist_name}</h5>
        <div className="card-body">
          <div className="card-text">
            <strong>
              <i className="fas fa-play"></i>Track:
              <span>{track.artist_name}</span>
            </strong>
            <br />
            <i>
              {" "}
              <i className="fas fa-compact-disc"></i>
              <strong>Album :</strong>
              {track.album_name}
            </i>
          </div>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-info mt-4 btn-raised"
          >
            <i className="fas fa-chevron-right"></i> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
}
