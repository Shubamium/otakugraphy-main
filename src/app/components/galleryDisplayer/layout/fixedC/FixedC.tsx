import "./fixedC.scss";
import Media from "../../media/Media";

type Props = {};

// 4
export default function FixedC({ ml }: any) {
  return (
    <div id="fixedC">
      <div className="list ">
        <div className="l">
          <Media data={ml[0]} />
        </div>
        <div className="c">
          <Media data={ml[1]} />
          <Media data={ml[2]} />
        </div>
        <div className="r">
          <Media data={ml[3]} />
        </div>
      </div>
    </div>
  );
}
