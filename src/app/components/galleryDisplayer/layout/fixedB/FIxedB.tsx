import "./fixedB.scss";
import Media from "../../media/Media";

type Props = {};

export default function FixedB({ ml }: any) {
  return (
    <div id="fixedB">
      <div className="list ">
        <div className="l">
          <Media data={ml[0]} />
        </div>
        <div className="c">
          <div className="t">
            <Media data={ml[1]} />
            <Media data={ml[2]} />
          </div>
          <div className="b">
            <Media data={ml[3]} />
          </div>
        </div>
        <div className="r">
          <Media data={ml[4]} />
          <Media data={ml[5]} />
        </div>
      </div>
    </div>
  );
}
