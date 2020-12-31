import React from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import Moment from "react-moment";

class Lyrics extends React.Component {
  state = {
    track: {},
    lyrics: {},
  };

  componentDidMount() {
    // For getting lyrics
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        // console.log(res.data);
        this.setState({ lyrics: res.data.message.body.lyrics });

        // for getting track

        axios
          .get(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
          )
          .then((res) => {

            // console.log(res.data);
            this.setState({ track: res.data.message.body.track });
          });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { lyrics, track } = this.state;
    if (
      lyrics === undefined ||
      track === undefined ||
      Object.keys(lyrics).length === 0 ||
      Object.keys(track) === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <div className="container">
            <Link to="/" className="btn btn-dark">
              GO back
            </Link>
            <div className="card mt-2">
              <div className="card-header">
                <strong>{track.track_name}</strong> by{" "}
                <span>{track.artist_name}</span>
              </div>
              <div className="card-body text-start">
                <div className="card-title">{lyrics.lyrics_body}</div>
              </div>
              <div className="card-footer">
                <strong>Album Name :</strong>
                {track.album_name}
                <br />
                <strong>Updated date :</strong>
                <Moment format="MM/DD/YYYY">{track.updated_time}</Moment>
                <br />
                <strong>Rating:</strong>
                {track.track_rating} out of <strong>100</strong>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Lyrics;
