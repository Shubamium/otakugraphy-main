const fs = require('fs');

const filePath = "src/app/(otakugraphy)/vps/vps/ourWork/OurWorkSection.tsx";
let content = fs.readFileSync(filePath, 'utf-8');

// Find the FeaturedCreators function and replace it
const startIdx = content.indexOf('function FeaturedCreators()');
const endIdx = content.indexOf('}', content.lastIndexOf('className="btn btn-name right"')) + 1;

if (startIdx !== -1 && endIdx !== -1) {
  const oldFunc = content.substring(startIdx, endIdx);
  
  const newFunc = `function FeaturedCreators({
  founding,
}: {
  founding: VpsHome["foundingAmbassador"];
}) {
  const creators =
    founding?.foundingAmbassador?.creatorList ?? [];
  const [activeCreator, setActiveCreator] = useState(0);

  const handleNext = () => {
    setActiveCreator((prev) => (prev + 1) % creators.length);
  };

  const handlePrev = () => {
    setActiveCreator(
      (prev) => (prev - 1 + creators.length) % creators.length,
    );
  };

  const handlePageClick = (index: number) => {
    setActiveCreator(index);
  };

  const currentCreator = creators[activeCreator];
  const mainArtMedia = currentCreator?.mainArt as Media | undefined;
  const pfpMedia = currentCreator?.pfp as Media | undefined;

  if (!currentCreator) {
    return null;
  }

  return (
    <div id="featured-creator">
      <button className="btn btn-name left" onClick={handlePrev}>
        <GoTriangleLeft />{" "}
      </button>
      <div className="fc-head">
        <h2>OTG Founding Ambassadors</h2>
        <hr />
        <div className="pages">
          <div className="list">
            {creators.map((_, index) => (
              <button
                key={index}
                className={\`btn p \${activeCreator === index ? "active" : ""}\`}
                onClick={() => handlePageClick(index)}
              ></button>
            ))}
          </div>
          <p>
            {activeCreator + 1}/{creators.length}
          </p>
        </div>
      </div>

      <div className="fc-content">
        <div className="art">
          <div className="bg-rect"></div>
          <img
            src={mainArtMedia?.sizes?.medium?.url ?? "/gfx/fcplace.png"}
            alt={mainArtMedia?.alt ?? "Creator art"}
            className="fc"
          />
        </div>
        <div className="content">
          <div className="chead">
            <h3>{currentCreator.name}</h3>
            <p>{currentCreator.title}</p>
          </div>
          <div className="desc">{currentCreator.desc}</div>
          <PayloadMedia />
          <div className="quotes">
            <div className="q">
              <p>"</p>
            </div>
            <div className="quote">
              <p>{currentCreator.quote}</p>
            </div>
            <img
              src={pfpMedia?.url ?? "/"}
              alt={pfpMedia?.alt ?? "Profile"}
              className="pfp"
            />
          </div>
        </div>
      </div>
      <button className="btn btn-name right" onClick={handleNext}>
        <GoTriangleRight />{" "}
      </button>
    </div>
  );
}`;

  content = content.replace(oldFunc, newFunc);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log("✓ File updated successfully!");
} else {
  console.log("✗ Could not find function boundaries");
  process.exit(1);
}
