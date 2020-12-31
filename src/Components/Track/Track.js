import React from "react";
import { Context } from "../../context";
import Spinner from "../Spinner";
import TrackItem from "../TrackItems";

function Track() {
  return (
    <>
      <Context.Consumer>
        {(Value) => {
          const { track_list, heading } = Value;

          //console.log(Value);
          if (track_list === undefined || track_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <>
                <h1>{heading}</h1>
                <div className="container">
                <div className="row">
                  {track_list.map((item) => (
                    <TrackItem key={item.track.track_id} track={item.track} />
                  ))}
                </div>
                </div>
              </>
            );
          }
        }}
      </Context.Consumer>
    </>
  );
}

export default Track;
