import Her from './src/her';
import intent from './src/intent';
import listen from './src/listen';
import greetings from './greetings';
import sayHello from './sayHello';

const her = new Her()

her.intent(greetings, sayHello)
her.listen('I need an appointment with the dentist tomorrow at 2pm in London')
