import ThumbNail from "../components/thumbnail/thumbnail";
import TrackList from "../components/recommend/tractlist";
import AlbumList from "../components/recommend/albumlist";
import PopularTrack from "../components/recommend/populartrack";
import PopularTrackMaker from "../components/recommend/populartrackmaker";
import UnderContents from "../components/undercontents/undercontents";

export default function Home() {
  return (
    <div>
      <ThumbNail />
      <TrackList />
      <AlbumList />
      <PopularTrack />
      <PopularTrackMaker />
      <UnderContents />
    </div>
  );
}
