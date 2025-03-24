import "./fixedD.scss";
import Media from "../../media/Media";

type Props = {};

// 4
export default function FixedD({ ml }: any) {
  return (
    <div id="fixedD">
      <div className="list ">
        <div className="l">
          <div className="t">
            <Media data={ml[0]} />
            <Media data={ml[1]} />
          </div>

          <div className="b">
            <Media data={ml[2]} />
          </div>
        </div>

        <div className="r">
          <div className="t">
            <Media data={ml[3]} />
          </div>
          <div className="b">
            <Media data={ml[4]} />
            <Media data={ml[5]} />
          </div>
        </div>
      </div>
    </div>
  );
}
