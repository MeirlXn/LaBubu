import React from "react";

function About() {
  return (
    <div className="container py-5 text-dark">

      <h1 className="text-center mb-3">
        <u className="heading-about">About ArtLoop</u>
      </h1>

      <p className="des-about">
        We created the ArtLoop website because the internet needed a place where artists from all over the world could dump the creations where art enthusiasts and other bored people could find, judge and possibly buy them.
      </p>

      <section className="mb-5">
        <h3 className="title-about">Who is ArtLoop for ?</h3>
        <p style={{fontSize: "18px"}}>
          ArtLoop exists for :
        </p>
        <ol style={{fontSize: "18px", color: "#63310b", fontWeight: "bold"}}>
            <li>Artist who want attention for their art but are too shy to ask.</li>
            <li>Buyers who want to buy art for their home decor but are too bussy to go search for it.</li>
            <li>Random people who love reviewing and somehow become expert art critics at the comment section.</li>
            <li>And you..yes you who you have no real purpose of being here but you still are.</li>
        </ol>
      </section>

      <section className="mb-5">
        <h3 className="title-about">What happens in ArtLoop ?</h3>
       <ol style={{fontSize: "18px", color: "#63310b", fontWeight: "bold"}}>
        <li>Artists post their art.</li>
        <li>People look at it and judge it (sometimes too harshly)</li>
        <li>Some buy the art if its weird enough.</li>
        <li>Artists get paid.</li>
        <li>Artist cry (Usually tears of happiness)</li>
        <li>Repeat !</li>
       </ol>
      </section>

      <section className="mb-5">
        <h3 className="title-about">🤝 For the Community</h3>
        <p style={{fontSize: "18px"}}>
          You are now part of an ecosystem where:
        </p>
        <ul style={{fontSize: "18px", fontWeight: "bold"}}>
          <li>Everyone is an artist</li>
          <li>Everyone is a critic</li>
          <li>Nobody is fully qualified for either role</li>
        </ul>
      </section>

      <section className="mb-5">
        <h3 className="title-about">🚨 Official Disclaimer</h3>
        <p style={{fontSize: "18px", fontWeight: "bold"}}>
          ArtLoop is not responsible for:
        </p>
        <ul style={{fontSize: "18px"}}>
          <li>Random inspiration at 3AM.</li>
          <li>Unhealthy obsession with checking likes.</li>
          <li>Arguing with strangers about color theory.</li>
          <li>Sudden urge to make art even without any artistic talent.</li>
        </ul>
      </section>

      <section className="mb-5">
        <h3 className="title-about">🧠 Our Mission</h3>
        <p style={{fontSize: "18px", fontWeight:"bold"}} className="text-center">
          To connect artists globally, amplify creativity, and occasionally
          confuse people into thinking a banana taped to a wall is profound art.
        </p>
      </section>

      <div className="text-center mt-5">
        <h4 className="heading-about"><u>Welcome to ArtLoop.</u></h4>
        <p>
          Post art. Receive reviews. Get paid.
        </p>
      </div>

    </div>
  );
}

export default About;