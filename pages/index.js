import Image from "next/image";

function index() {
  return (
    <>
    <div className = "test"><h1>Testimonials</h1></div>
      <div className="cardmain">
        <div className="card">
          <Image
            className="cardimg"
            src="/images/girl.jpg"
            alt="kay"
            width="120"
            height="120"
          ></Image>
          <span>
            <h1>Maria</h1>
          </span>
          <span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </span>
        </div>

        <div className="card2">
          <Image
            className="cardimg"
            src="/images/man.jpg"
            alt="kay"
            width="120"
            height="120"
          ></Image>
          <span>
            <h1>Robert</h1>
          </span>
          <span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </span>
        </div>

        <div className="card3">
          <Image
            className="cardimg"
            src="/images/women.jpg"
            alt="kay"
            width="120"
            height="120"
          ></Image>
          <span>
            <h1>Linda</h1>
          </span>
          <span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </span>
        </div>
      </div>
    </>
  );
}

export default index;
