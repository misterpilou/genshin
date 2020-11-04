import Wrapper from "../components/Wrapper"
import Visual from "./../components/Visual"
import Content from "./../components/Content"
import TextContent from "./../components/TextContent"

// CHAR
import paimon from "../assets/images/char/paimon.png"
import chibiWow from "../assets/images/chibi/chibiWow.png"
import razorCry from "../assets/images/chibi/razorCry.png"

function Dailies() {
  return (
    <Wrapper>
      <Visual srcLeft={paimon} height="95%" />
      <Content>
        {/* LEVELING */}
        <TextContent
          title="Les voeux"
          src={chibiWow}
          text="Soyez curieux blabla ouvrez les coffres"
        />
        <TextContent
          title="Coupons"
          text="Pas de code cette semaine :("
          //   href="https://genshin.mihoyo.com/fr/gift"
          linkName="ici"
          target="_blank"
          //   src={jeanHeart}
          src={razorCry}
        />
      </Content>
    </Wrapper>
  )
}

export default Dailies