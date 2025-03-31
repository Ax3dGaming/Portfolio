import SplitText from "../../Components/SplitText";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <SplitText
              text="Bonjour,"
              className="text-2xl font-semibold text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <div className="pierre"> 
              <span className="hero--section-title--color">Je suis Pierre,</span>{" "}
            </div>
          </h1>
          <p className="hero--section-description">
            Je fais du développement depuis ma 5ème,
            <br /> c'est pour moi une passion
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero.png" alt="Hero Section" />
      </div>
    </section>
  );
}
