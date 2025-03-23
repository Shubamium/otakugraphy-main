import Media from "../../media/Media";
import "./expandingColumns.scss";

type Props = {};

export default function ExpandingColumns({ ml }: any) {
  return (
    <div id="twoCol">
      <div className="list">
        {ml.map((md: any, j: number) => {
          return <Media data={md} key={md._id + j} />;
        })}
      </div>
    </div>
  );
}
