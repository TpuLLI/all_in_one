// // 1
// var str = "I love";
// console.log(str + " my husband!");

// // 2
// console.log("I love \"ololo\" my husband!");

// // 3
// var old = 36,
//     name;

// switch (old) {
//   case 20: name = "Pol";
//     break;
//   case 36: name = "Pit";
//     break;
//   case 40: name = "Jil";
//     break;
//   default: console.log("Ololo");
// }

// console.log(name);
//  // 4
// var a = 7,
//     b = 4;
// if(a > 5 && b > 6) {
//   console.log("First condition");
// } else if (a < 3 && b > 10) {
//   console.log("Second condition");
// } else {
//   console.log("Third condition");
// }

// // 5

// if(a != 5 && b === 4) {
//   console.log("Fifth condition");
// }

// // 6

// var calculator = (function() {
//   var checkNumber = function(arr) {
//     for(i = 0; i < arr.length; i++) {
//       if(typeof arr[i] !== "number") {
//         throw "one of arguments is not a number";
//       }
//     }
//   };

//   var calk = {
//     plus: function() {
//       var sum = 0;
//       for(i = 0; i < arguments.length; i++) {
//         if(typeof arguments[i] == "number") {
//          sum = sum + arguments[i];
//         } else {
//           checkNumber(arguments);
//         };
//       };
//       return sum;
//     },
//     minus: function(firstNumber) {
//       var count = firstNumber;
//       for(r = 1; r < arguments.length; r++) {
//         if(typeof arguments[r] == "number") {
//           count = count - arguments[r];
//         } else {
//           checkNumber(arguments);
//         }
//       };
//       return count;
//     },
//     multipl: function(firstNumber) {
//       var mult = firstNumber;
//       for(q = 1; q < arguments.length; q++) {
//         if(typeof arguments[q] == "number") {
//           mult = mult * arguments[q];
//         } else {
//           checkNumber(arguments);
//         };
//       };
//       return mult;
//     },
//     degree: function(firstNumber) {
//       var deg = firstNumber;
//       for(w = 1; w < arguments.length; w++) {
//         if(typeof arguments[w] == "number") {
//           deg = deg / arguments[w];
//         } else {
//           checkNumber(arguments);
//         }
//       };
//       return deg;
//     }
//   };
//   return calk;
// })();

// console.log(calculator.plus(1,5));
// console.log(calculator.minus(5,9,7,-11));
// console.log(calculator.multipl(9,5,77));
// console.log(calculator.degree(20,4,7));

// 7

$(function() {
  var tabs = [
    {
      name: "tab-1",
      content: "Olol"
    },
    {
      name: "tab-2",
      content: 123
    },
    {
      name: "tab-3",
      content: "Blabla"
    }
  ];

  var activeTab = function(tabName) {
    $("[data-tab]").removeClass('active');

    if (!tabName) {
      $(".textarea").text(tabs[0].content);
      $("div:first.tab").addClass("active");
      return;
    }

    for(i = 0; i < tabs.length; i++) {
      if(tabs[i].name === tabName) {
        $(".textarea").text(tabs[i].content);
        $("[data-tab='"+ tabName +"']").addClass("active");
      }
    };
  };


  $(".tab").click(function() {
    var clickTab = $(this).data("tab");
    activeTab(clickTab);
  });

  activeTab();

});




