import "./fixedA.scss";
import Media from "../../media/Media";

type Props = {};

export default function FixedA({ ml }: any) {
  return (
    <div id="fixedA">
      <div className="list ">
        <div className="l">
          <Media data={ml[0]} />
        </div>
        <div className="r">
          <div className="t">
            <Media data={ml[1]} />
            <Media data={ml[2]} />
          </div>
          <div className="b">
            <Media data={ml[3]} />
            <Media data={ml[4]} />
          </div>
        </div>
      </div>
    </div>
  );
}
