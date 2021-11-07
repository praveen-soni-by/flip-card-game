import pokemon1 from '../assets/images/pokemon/1.png'
import pokemon2 from '../assets/images/pokemon/2.png'
import pokemon3 from '../assets/images/pokemon/3.png'
import pokemon4 from '../assets/images/pokemon/4.png'
import pokemon5 from '../assets/images/pokemon/5.png'
import pokemon6 from '../assets/images/pokemon/6.png'
import pokemon7 from '../assets/images/pokemon/7.png'
import pokemon8 from '../assets/images/pokemon/8.png'
import pokemon9 from '../assets/images/pokemon/9.png'
import pokemon10 from '../assets/images/pokemon/10.png'
import pokemon11 from '../assets/images/pokemon/11.png'
import pokemon12 from '../assets/images/pokemon/12.png'
import pokemon13 from '../assets/images/pokemon/13.png'
import pokemon14 from '../assets/images/pokemon/14.png'
import pokemon15 from '../assets/images/pokemon/15.png'
import naruto1 from '../assets/images/naruto/1.png'
import naruto2 from '../assets/images/naruto/2.png'
import naruto3 from '../assets/images/naruto/3.png'
import naruto4 from '../assets/images/naruto/4.png'
import naruto5 from '../assets/images/naruto/5.png'
import naruto6 from '../assets/images/naruto/6.png'
import naruto7 from '../assets/images/naruto/7.png'
import naruto8 from '../assets/images/naruto/8.png'
import naruto9 from '../assets/images/naruto/9.png'
import naruto10 from '../assets/images/naruto/10.png'
import naruto11 from '../assets/images/naruto/11.png'
import naruto12 from '../assets/images/naruto/12.png'
import naruto13 from '../assets/images/naruto/13.png'
import naruto14 from '../assets/images/naruto/14.png'
import naruto15 from '../assets/images/naruto/15.png'
import horror1 from '../assets/images/horror/1.png'
import horror2 from '../assets/images/horror/2.png'
import horror3 from '../assets/images/horror/3.png'
import horror4 from '../assets/images/horror/4.png'
import horror5 from '../assets/images/horror/5.png'
import horror6 from '../assets/images/horror/6.png'
import horror7 from '../assets/images/horror/7.png'
import horror8 from '../assets/images/horror/8.png'
import horror9 from '../assets/images/horror/9.png'
import horror10 from '../assets/images/horror/10.png'
import horror11 from '../assets/images/horror/11.png'
import horror12 from '../assets/images/horror/12.png'
import horror13 from '../assets/images/horror/13.png'
import horror14 from '../assets/images/horror/14.png'
import horror15 from '../assets/images/horror/15.png'

const POKOMON=[
  {'id':uuid(),'img':pokemon1},
  {'id':uuid(),'img':pokemon2},
  {'id':uuid(),'img':pokemon3},
  {'id':uuid(),'img':pokemon4},
  {'id':uuid(),'img':pokemon5},
  {'id':uuid(),'img':pokemon6},
  {'id':uuid(),'img':pokemon7},
  {'id':uuid(),'img':pokemon8},
  {'id':uuid(),'img':pokemon9},
  {'id':uuid(),'img':pokemon10},
  {'id':uuid(),'img':pokemon11},
  {'id':uuid(),'img':pokemon12},
  {'id':uuid(),'img':pokemon13},
  {'id':uuid(),'img':pokemon14},
  {'id':uuid(),'img':pokemon15}
]

const NARUTO =[
  {'id':uuid(),'img':naruto1},
  {'id':uuid(),'img':naruto2},
  {'id':uuid(),'img':naruto3},
  {'id':uuid(),'img':naruto4},
  {'id':uuid(),'img':naruto5},
  {'id':uuid(),'img':naruto6},
  {'id':uuid(),'img':naruto7},
  {'id':uuid(),'img':naruto8},
  {'id':uuid(),'img':naruto9},
  {'id':uuid(),'img':naruto10},
  {'id':uuid(),'img':naruto11},
  {'id':uuid(),'img':naruto12},
  {'id':uuid(),'img':naruto13},
  {'id':uuid(),'img':naruto14},
  {'id':uuid(),'img':naruto15}
]

const HORROR =[
  {'id':uuid(),'img':horror1},
  {'id':uuid(),'img':horror2},
  {'id':uuid(),'img':horror3},
  {'id':uuid(),'img':horror4},
  {'id':uuid(),'img':horror5},
  {'id':uuid(),'img':horror6},
  {'id':uuid(),'img':horror7},
  {'id':uuid(),'img':horror8},
  {'id':uuid(),'img':horror9},
  {'id':uuid(),'img':horror10},
  {'id':uuid(),'img':horror11},
  {'id':uuid(),'img':horror12},
  {'id':uuid(),'img':horror13},
  {'id':uuid(),'img':horror14},
  {'id':uuid(),'img':horror15}
]

const CARD_DATA ={
  1:POKOMON,
  2:NARUTO,
  3:HORROR

}

   

 export default { CARD_DATA }

function uuid() {
    var u = '', i = 0;
    while (i++ < 36) {
      var c = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'[i - 1], r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      u += (c === '-' || c === '4') ? c : v.toString(16)
    }
    return u;
  }
  