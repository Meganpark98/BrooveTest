import UnderContents from "../components/undercontents/undercontents";
import TracksUploadComponent from "../components/upload/tracksuploadcomponent";
import Blank from "../components/blank/blank";

export default function TrackUpload() {
  return (
    <div>
      <TracksUploadComponent />
      <Blank />
      <UnderContents />
    </div>
  );
}
