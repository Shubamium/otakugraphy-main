import Media from "../../media/Media";
import "./twoColumns.scss";

type Props = {};

export default function TwoColumns({ ml }: any) {
  return (
    <div id="twoCol">
      <p>2</p>
      <div className="list">
        {ml.map((md: any, j: number) => {
          return <Media data={md} key={md._id + j} />;
        })}
      </div>
    </div>
  );
}
