import { useMediaQuery } from "react-responsive";
import Media from "../../media/Media";
import "./expandingColumns.scss";

type Props = {};

export default function ExpandingColumns({ ml }: any) {
  // const half = useMediaQuery({
  //   query: "(max-width:768px)",
  // });

  // const mid = useMediaQuery({
  //   query: "(max-width:550px)",
  // });

  // const small = useMediaQuery({
  //   query: "(max-width:468px)",
  // });

  // let max = 12;
  // if (half) {
  //   max = 8;
  // }
  // if (mid) {
  //   max = 6;
  // }
  // if (small) {
  //   max = 4;
  // }
  // const torend = ml.slice(0, max);

  return (
    <div id="exCol">
      <div className="list">
        {ml &&
          ml.map((md: any, j: number) => {
            return <Media data={md} key={md._id + j} />;
          })}
      </div>
    </div>
  );
}
