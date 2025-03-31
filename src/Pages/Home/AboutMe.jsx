import SplitText from "../../Components/SplitText";


const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <SplitText
            text="À Propos de moi"
            className="skills--section--heading"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <p className="hero--section-description">
            J'ai fait un BAC STI2D avec spécificité SIN. Je suis intéressé par l'informatique depuis ma 5ème, et j'ai décidé de m'orienter dans cette voie depuis mon stage de 3ème.
          </p>
          <p className="hero--section-description">
            J'ai déjà créé différents projets en informatique, dans différents langages de programmations.
          </p>
        </div>
      </div>
    </section>
  );
}
