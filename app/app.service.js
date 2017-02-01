angular.module('app')
  .factory('AppService', AppService);

AppService.$inject = [];

function AppService() {
  var _blocks = [
    {
      type: "function",
      name: "goStraight",
      label: "Idź prosto"
    },
    {
      type: "function",
      name: "turnRight",
      label: "Skręc w prawo"
    },
    {
      type: "function",
      name: "turnLeft",
      label: "Skręc w lewo"
    },
    {
      type: "iLoop",
      number: null,
      code: []
    },
    {
      type: "cLoop",
      condition: {
        name: "notCollected",
        label: "Nie zebrano monety"
      },
      code: []
    },
    {
      type: "condition",
      condition: {
        name: "obstacle",
        label: "Przeszkoda"
      },
      code: []
    }
  ];

  var _levels = [
    // {
    //   blocks: [
    //     _blocks[0],
    //     _blocks[1],
    //     _blocks[2],
    //     _blocks[3],
    //     _blocks[4],
    //     _blocks[5],
    //   ],
    //   visualisationData: {
    //     playerPosition: {
    //       x: 3,
    //       y: 5
    //     },
    //     playerTurn: 'right',
    //     coinPosition: {
    //       x: 5,
    //       y: 5
    //     }
    //   }
    // },
    {
      blocks: [
        _blocks[0],
      ],
      visualisationData: {
        playerPosition: {
          x: 3,
          y: 5
        },
        playerTurn: 'right',
        coinPosition: {
          x: 5,
          y: 5
        }
      },
      levelInfo: "<p>Aplikacja, ktorej wlasnie uzywasz ma na celu nauke programowania w oparciu o <strong>bloki</strong>. "
      + "Zacznijmy od prostego przykladu. Zlap blok funkcji przytrzymujac na nim lewy przycisk myszy, a nastepnie przeciagnij go do panelu po prawej stronie."
      + "Powtorz te czynnosc dwa razy i wciśnij przycisk Rozpocznij! aby wykonac swoj program.</p>"
      + "<p>Po zakonczeniu wykonywania wszystkich blokow kodu otrzymac okno z informacja o rezultacie.</p>"
    },
    {
      blocks: [
        _blocks[0],
        _blocks[1],
        _blocks[2],
      ],
      visualisationData: {
        playerPosition: {
          x: 3,
          y: 5
        },
        playerTurn: 'right',
        coinPosition: {
          x: 5,
          y: 3
        }
      },
      levelInfo: "<p>W kolejnej lekcji masz do dyspozycji trzy bloki odpowiadające trzem funkcjom.</p>"
      + "<p><strong>Funkcja</strong> to wydzielona część programu wykonująca jakieś operacje. Funkcje stosuje się, aby uprościć program główny i zwiększyć czytelność kodu.</p>"
      + "<p>Nasze funkcje wykonują pojedyncze operacje jak obiekcie ktorym sterujemy (samochodem):"
      + "<ul><li><strong>Jedz prosto</strong> - porusza obiektem do przodu o jedną kratę w stronę w ktora jest zwrocony</li>"
      + "<li><strong>Skrec w lewo</strong> - obraca obiekt w lewo o 90 stopni</li>"
      + "<li><strong>Skrec w prawo</strong> - obraca obiekt w prawo o 90 stopni</li></ul></p>"
      + "<p>Funkcja z zalozenia powinna miec jak najmniejsza odpowiedzialnosc, dlatego w naszym przypadku kazda z funkcji wykonuje tylko pojedyncza operacje na obiekcie.</p>"
    },
    {
      blocks: [
        _blocks[0],
        _blocks[3]
      ],
      visualisationData: {
        playerPosition: {
          x: 2,
          y: 5
        },
        playerTurn: 'right',
        coinPosition: {
          x: 7,
          y: 5
        }
      },
      levelInfo: "<p>Pewnie zauważyłeś, że gdy chcesz przemieścić obiekt o kilka pól w tym samym kierunku, musisz kilkukrotnie wywołać funkcję <strong>Idź do przodu.</strong></p>"
      + "<p>Żeby zapobiedz wielokrotnemu wywoływaniu tych samych funkcji wprowadzimy teraz pojęcie pętli.</p>"
      + "<p><strong>Pętla</strong> jest konstrukcją umożliwiającą powtarzalne wykonanie ciągu instrukcji określoną liczbę razy, lub do momentu zajścia pewnych warunków</p>"
      + "<p>W tej lekcji skupimy się na <strong>pętli iteracyjnej</strong>, której używamy, gdy z góry wiemy ile razy chcemy powtórzyć wykonanie określonego ciągu instrukcji</p>"
    },
    {
      blocks: [
        _blocks[0],
        _blocks[4]
      ],
      visualisationData: {
        playerPosition: {
          x: 2,
          y: 5
        },
        playerTurn: 'right',
        coinPosition: {
          x: 7,
          y: 5
        }
      },
      levelInfo: "<p>Jak pamiętasz z poprzedniej lekcji, pętle iteracyjne nie są jedynymi rodzajami tych konstrukcji.</p>"
      + "<p>Kolejnym rodzajem jest <strong>pętla warunkowa</strong>, która będzie wykonywana dopóki podany jej warunek będzie prawdziwy.</p>"
      + "<p>Pętla warunkowa różni się od pętli iteracyjnej tym, że nie musimy wiedzieć ile razy pętla powinna się wykonać.</p>"
    },
    {
      blocks: [
        _blocks[0],
        _blocks[1],
        _blocks[2],
        _blocks[4],
        _blocks[5]
      ],
      visualisationData: {
        playerPosition: {
          x: 3,
          y: 5
        },
        playerTurn: 'right',
        coinPosition: {
          x: 8,
          y: 3
        }
      },
      levelInfo: "<p>W tej lekcji poznasz kolejny ważny element języków programowania, jakim jest <strong>instrukcja warunkowa</strong>.</p>"
      + "<p><strong>Instrukcja warunkowa</strong> pozwala na wykonanie pewnego bloku instrukcji w zależności czy podane przez programistę wyrażenie logiczne jest prawdziwe, czy fałszywe.</p>"
      + "<p><strong>Instrukcja warunkowa</strong> jest w pewnym sensie związana z poznaną w poprzedniej lekcji <strong>pętlą warunkową</strong>, ponieważ w obu przypadkach do wykonania podanego ciągu instrukcji wymagane jest, by podane wyrażenie logiczne było prawdzie.</p>"
    }
  ];

  function getLevel(num) {
    num = num || 1;
    if(num > _levels.length) return false;
    return _levels[num - 1];
  }

  function getLevelCount() {
    return _levels.length;
  }

  return {
    getLevel: getLevel,
    getLevelCount: getLevelCount
  }
}
