import ArtworkSearch from "../components/search/artworksearch";
import UnderContents from "../components/undercontents/undercontents";
import AlbumList from "../components/recommend/albumlist";

export default function Artworks() {
  return (
    <div>
      <ArtworkSearch />
      <AlbumList />
      <UnderContents />
    </div>
  );
}
