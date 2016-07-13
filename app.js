import Her from './src/her';
import intent from './src/intent';
import listen from './src/listen';
import greetings from './intents/greetings';
import sayHello from './actions/sayHello';


// ======== SET UP

const her = new Her()
  // create new instance of Her

her.teach({ name: 'food', terms: 'carrots|tomatos' })
  // teach categories

her
  .classify(['issue'], 'hasIssue')
  .classify(['brand', 'location', 'value'], 'withBrandLocationAndValue')
  .classify(['product', 'location', 'value'], 'withProductLocationAndValue')
  .classify(['brand', 'value'], 'withBrandAndValue')
  .classify(['product', 'value'], 'withProductAndValue')
  .classify(['brand'], 'withBrand')
  .classify(['greetings'], 'sayHi')
  .classify(['positive'], 'reactHappy')
  .classify(['negative'], 'reactSad')
  .classify(['farewell'], 'sayGoodbye')


her
  .intent(withBrandAndLocation, findWithLocation)
  .intent(withBrand, findWithBrand)
  .intent(withBrandAndValue, findWithBrandAndValue)
  .intent(hasIssue, toMemberService)
  // set intents and actions

// ======== RUN

her.listen('Give me best discount for shoes in Chicago')
  // check categories that belong to sentence
  // classify categories with priority and returns intent
