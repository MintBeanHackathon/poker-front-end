(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        const deck = require("./assets/scripts/cards.js");
      },
      { "./assets/scripts/cards.js": 2 },
    ],
    2: [
      function (require, module, exports) {
        const path = "public/images/poker-cards/";

        const cards = [
          {
            twoClubs: path + "2_of_clubs.png",
          },
          {
            twoDiamonds: path + "2_of_diamonds.png",
          },
          {
            twohearts: path + "2_of_hearts.png",
          },
          {
            twoSpades: path + "2_of_spades.png",
          },
          {
            threeClubs: path + "3_of_clubs.png",
          },
          {
            threeDiamonds: path + "3_of_diamonds.png",
          },
          {
            threeHearts: path + "3_of_hearts.png",
          },
          {
            threeSpades: path + "3_of_spades.png",
          },
          {
            fourClubs: path + "4_of_clubs.png",
          },
          {
            fourDiamonds: path + "4_of_diamonds.png",
          },
          {
            fourHearts: path + "4_of_hearts.png",
          },
          {
            fourSpades: path + "4_of_spades.png",
          },
          {
            fiveClubs: path + "5_of_clubs.png",
          },
          {
            fiveDiamonds: path + "5_of_diamonds.png",
          },
          {
            fiveHearts: path + "5_of_hearts.png",
          },
          {
            fiveSpades: path + "5_of_spades.png",
          },
          {
            sixClubs: path + "6_of_clubs.png",
          },
          {
            sixDiamonds: path + "6_of_diamonds.png",
          },
          {
            sixHearts: path + "6_of_hearts.png",
          },
          {
            sixSpades: path + "6_of_spades.png",
          },
          {
            sevenClubs: path + "7_of_clubs.png",
          },
          {
            sevenDiamonds: path + "7_of_diamonds.png",
          },
          {
            sevenHearts: path + "7_of_hearts.png",
          },
          {
            sevenSpades: path + "7_of_spades.png",
          },
          {
            eightClubs: path + "8_of_clubs.png",
          },
          {
            eightDiamonds: path + "8_of_diamonds.png",
          },
          {
            eightHearts: path + "8_of_hearts.png",
          },
          {
            eightSpades: path + "8_of_spades.png",
          },
          {
            nineClubs: path + "9_of_clubs.png",
          },
          {
            nineDiamonds: path + "9_of_diamonds.png",
          },
          {
            nineHearts: path + "9_of_hearts.png",
          },
          {
            nineSpades: path + "9_of_spades.png",
          },
          {
            tenClub: path + "10_of_clubs.png",
          },
          {
            tenDiamonds: path + "10_of_diamonds.png",
          },
          {
            tenHearts: path + "10_of_hearts.png",
          },
          {
            tenSpades: path + "10_of_spades.png",
          },
          {
            aceClubs: path + "ace_of_clubs.png",
          },
          {
            aceDiamonds: path + "ace_of_diamonds.png",
          },
          {
            aceHearts: path + "ace_of_hearts.png",
          },
          {
            aceSpades: path + "ace_of_spades.png",
          },
          {
            jackClubs: path + "jack_of_clubs.png",
          },
          {
            jackDiamonds: path + "jack_of_diamonds.png",
          },
          {
            jackHearts: path + "jack_of_hearts.png",
          },
          {
            jackSpades: path + "jack_of_spades.png",
          },
          {
            queenClubs: path + "queen_of_clubs.png",
          },
          {
            queenDiamonds: path + "queen_of_diamonds.png",
          },
          {
            queenHearts: path + "queen_of_hearts.png",
          },
          {
            queenSpades: path + "queen_of_spades.png",
          },
          {
            kingClubs: path + "king_of_clubs.png",
          },
          {
            kingDiamonds: path + "king_of_diamonds.png",
          },
          {
            kingHearts: path + "king_of_hearts.png",
          },
          {
            kingSpades: path + "king_of_spades.png",
          },
        ];

        exports.cards = cards;
      },
      {},
    ],
  },
  {},
  [1]
);
