import Her from './src/her';
import intent from './src/intent';
import listen from './src/listen';
import greetings from './greetings';
import sayHello from './sayHello';
import sayFoo from './sayFoo';

const her = new Her()

her
  .intent(greetings, sayHello)
  // .intent(giftcards, giveInstructions)
  // .intent(categories, askCategory)
  // .intent(brands, [showBrandGeneral, sendGiftcards])
  // .intent(location, [showBrandLocaton, sendGiftcards])
  // .intent(positives, happyReact)
  // .intent(negatives, sadReact)
  // .intent(conclusion, sayGoodbye)

her.listen('We are traveling to Los Angeles 90002')
