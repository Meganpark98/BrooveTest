import TrackSearch from "../components/search/tracksearch";
import UnderContents from "../components/undercontents/undercontents";
import TrackList from "../components/recommend/tractlist";

export default function Tracks() {
  return (
    <div>
      <TrackSearch />
      <TrackList />
      <UnderContents />
    </div>
  );
}
