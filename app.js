import Her from './src/her';
import intent from './src/intent';
import listen from './src/listen';
import greetings from './intents/greetings';
import sayHello from './actions/sayHello';

const her = new Her()
her.teach({ name: 'food', terms: 'carrots|tomatos' })

her.intent(greetings, sayHello)
  // .intent(giftcards, giveInstructions)
  // .intent(categories, askCategory)
  // .intent(brands, [showBrandGeneral, sendGiftcards])
  // .intent(location, [showBrandLocaton, sendGiftcards])
  // .intent(positives, happyReact)
  // .intent(negatives, sadReact)
  // .intent(conclusion, sayGoodbye)
  // .track(writeDb)

her.listen('We are traveling to Los Angeles tomatos')
