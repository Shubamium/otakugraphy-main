import "./poster.scss";
import Media from "../../media/Media";

type Props = {};

export default function Poster({ ml }: any) {
  return (
    <div id="poster">
      <div className="list">
        {ml.map((md: any, j: number) => {
          return <Media data={md} key={md._id + j} />;
        })}
      </div>
    </div>
  );
}
