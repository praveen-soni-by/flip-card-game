import pokemon1 from '../assets/images/pokemon/1.jpg'
import pokemon2 from '../assets/images/pokemon/2.jpg'
import pokemon3 from '../assets/images/pokemon/3.jpg'
import pokemon4 from '../assets/images/pokemon/4.jpg'
import pokemon5 from '../assets/images/pokemon/5.jpg'
import pokemon6 from '../assets/images/pokemon/6.jpg'
import pokemon7 from '../assets/images/pokemon/7.jpg'
import pokemon8 from '../assets/images/pokemon/8.jpg'
import pokemon9 from '../assets/images/pokemon/9.jpg'
import pokemon10 from '../assets/images/pokemon/10.jpg'
import pokemon11 from '../assets/images/pokemon/11.jpg'
import pokemon12 from '../assets/images/pokemon/12.jpg'
import pokemon13 from '../assets/images/pokemon/13.jpg'
import pokemon14 from '../assets/images/pokemon/14.jpg'
import pokemon15 from '../assets/images/pokemon/15.jpg'
import naruto1 from '../assets/images/naruto/1.jpg'
import naruto2 from '../assets/images/naruto/2.jpg'
import naruto3 from '../assets/images/naruto/3.jpg'
import naruto4 from '../assets/images/naruto/4.jpg'
import naruto5 from '../assets/images/naruto/5.jpg'
import naruto6 from '../assets/images/naruto/6.jpg'
import naruto7 from '../assets/images/naruto/7.jpg'
import naruto8 from '../assets/images/naruto/8.jpg'
import naruto9 from '../assets/images/naruto/9.jpg'
import naruto10 from '../assets/images/naruto/10.jpg'
import naruto11 from '../assets/images/naruto/11.jpg'
import naruto12 from '../assets/images/naruto/12.jpg'
import naruto13 from '../assets/images/naruto/13.jpg'
import naruto14 from '../assets/images/naruto/14.jpg'
import naruto15 from '../assets/images/naruto/15.jpg'


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

const CARD_DATA ={
  1:POKOMON,
  2:NARUTO,

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
  