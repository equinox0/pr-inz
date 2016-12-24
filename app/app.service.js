angular.module('app')
  .factory('AppService', AppService);

AppService.$inject = [];

function AppService() {
  var _blocks = [
    {
      type: "function",
      name: "goStraight",
      title: "Idź prosto"
    },
    {
      type: "function",
      name: "turnRight",
      title: "Skręc w prawo"
    },
    {
      type: "function",
      name: "turnLeft",
      title: "Skręc w lewo"
    }
  ];

  var _levels = [
    {
      blocks: [
        _blocks[0],
      ],
      visualisationData: {
        playerStartPosition: {
          x: 3,
          y: 5
        },
        playerStartTurn: 'right',
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
        _blocks[2]
      ],
      visualisationData: {
        playerStartPosition: {
          x: 3,
          y: 5
        },
        playerStartTurn: 'right',
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
