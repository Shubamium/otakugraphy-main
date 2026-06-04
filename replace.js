const fs = require('fs');

const filePath = "src/app/(otakugraphy)/vps/vps/ourWork/OurWorkSection.tsx";
let content = fs.readFileSync(filePath, 'utf-8');

const oldFunc = `function FeaturedCreators() {
  return (
    <div id="featured-creator">
      <button className="btn btn-name left">
        <GoTriangleLeft />{" "}
      </button>
      <div className="fc-head">
        <h2>OTG Founding Ambassadors</h2>
        <hr />
        <div className="pages">
          <div className="list">
            <button className="btn p"></button>
            <button className="btn p"></button>
            <button className="btn p"></button>
            <button className="btn p"></button>
            <button className="btn p"></button>
          </div>
          <p>1/6</p>
        </div>
      </div>

      <div className="fc-content">
        <div className="art">
          <div className="bg-rect"></div>
          <img src="/gfx/fcplace.png" alt="" className="fc" />
        </div>
        <div className="content">
          <div className="chead">
            <h3>Raki Kazuki</h3>
            <p>Independent Virtual Creator</p>
          </div>
          <div className="desc">
            Explain what you did here with this creator. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat
          </div>
          <PayloadMedia />
          <div className="quotes">
            <div className="q">
              <p>"</p>
            </div>
            <div className="quote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
            <img src="/" alt="" className="pfp" />
          </div>
        </div>
      </div>
      <button className="btn btn-name right">
        <GoTriangleRight />{" "}
      </button>
    </div>
  );
}`;

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

if (content.includes(oldFunc)) {
  content = content.replace(oldFunc, newFunc);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log("✓ File updated successfully!");
  process.exit(0);
} else {
  console.log("✗ Function not found in the file");
  process.exit(1);
}
