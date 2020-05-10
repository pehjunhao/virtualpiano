const BLACK = 'black';
const WHITE = 'white';
const keys = [{
  color: WHITE,
  note: 'c-3',
  black: false,
  white: true,
  keyValue: 122
},{
  color: BLACK,
  note: 'c-3-sharp',
  black: true,
  white: false,
  keyValue: 115
},{
  color: WHITE,
  note: 'd-3',
  black: false,
  white: true,
  keyValue: 120
},{
  color: BLACK,
  note: 'e-3-flat',
  black: true,
  white: false,
  keyValue: 100
},{
  color: WHITE,
  note: 'e-3',
  black: false,
  white: true,
  keyValue: 99
},{
  color: WHITE,
  note: 'f-3',
  black: false,
  white: true,
  keyValue: 118
},{
  color: BLACK,
  note: 'f-3-sharp',
  black: true,
  white: false,
  keyValue: 103
},{
  color: WHITE,
  note: 'g-3',
  black: false,
  white: true,
  keyValue: 98
},{
  color: BLACK,
  note: 'g-3-sharp',
  black: true,
  white: false,
  keyValue: 104
},{
  color: WHITE,
  note: 'a-3',
  black: false,
  white: true,
  keyValue: 110
},{
  color: BLACK,
  note: 'b-3-flat',
  black: true,
  white: false,
  keyValue: 106
},{
  color: WHITE,
  note: 'b-3',
  black: false,
  white: true,
  keyValue: 109
}];
const keyValueMap = keys.reduce((acc, curr) => {
  acc[curr.keyValue] = curr.note
  return acc;
}, {});
const playNote = function(note) {
  const audio = new Audio(`public/sounds/${note}.mp3`);
  audio.play();
}

var mainApp = new Vue({
  el: '#main-app',
  data: {
    keys,

  },
  methods: {
    play: (e) => {
      playNote($(e.toElement).attr('data'));
    }
  }
});
$(document).keypress(function(e){
  const note = keyValueMap[e.which];
  console.log(note);
  console.log(e.which);
  if (note) {
      playNote(note);
  }
});
$('.piano-board').css("display", "block");
