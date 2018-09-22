// var tipsCalaulate = function(pay) {
//     var tips;
//     if(pay <= 50 ) {
//       return tips = ( 20/100 ) * pay;
//     } else if ( pay >= 50 && pay <= 100 ) {
//       return tips = ( 15/100 ) * pay;
//     } else if ( pay >= 200 ) {
//       return tips = ( 10/100 ) * pay;
//     }
// }
//
// var allBill = new Array(35, 50, 245, 999);
// var alltips = new Array();
// var allPrice = new Array();
// var i = 0;
// for (i; i < allBill.length; i++) {
//   alltips.push(tipsCalaulate(allBill[i]));
//   allPrice.push((allBill[i]+alltips[i]));
// }
//
//
// console.log(allBill);
// console.log(alltips);
// console.log(allPrice);
//
// var john = {
//   fullName: 'John Smith',
//   mass: 90, // kg.
//   height: 1.7, // meters.
//   calculateBMI: function() {
//     this.bmi = this.mass / ( this.height * this.height );
//   }
// };
// john.calculateBMI();
//
// var mark = {
//   fullName: 'Mark Walberk',
//   mass: 90, // kg.
//   height: 1.7, // meters.
//   calculateBMI: function() {
//     this.bmi = this.mass / ( this.height * this.height );
//   }
// };
// mark.calculateBMI();
//
// if(mark.bmi != john.bmi) {
//   console.log(mark.bmi > john.bmi ? mark.fullName + ' Mass: '+ mark.mass + ' height ' + mark.height + ' Mark\'s BMI: '+ mark.bmi
//   : john.fullName + ' Mass: '+ john.mass + ' height ' + john.height + ' John\'s BMI: '+ john.bmi);
// }else {
//   console.log('The BMI is the same.');
// }
// console.log(john);
// console.log(mark);



//  Coding challenge 3 !!

var john = {
    family : ['dad', 'mom', 'sister', 'brother'],
    bill : [124, 48, 268, 180, 42],
    tips : new Array(),
    paid : new Array(),
    tipsCalaulate : function() {
      var i = 0;
      for ( i; i < this.bill.length; i++ ) {
        if( this.bill[i] < 50 ) {
          this.tips.push((20/100)*this.bill[i]);
          this.paid.push(this.tips[i]+this.bill[i]);
        } else if ( this.bill[i] >= 50 && this.bill[i] <= 200 ) {
          this.tips.push((15/100)*this.bill[i]);
          this.paid.push(this.tips[i]+this.bill[i]);
        } else {
          this.tips.push((10/100)*this.bill[i]);
          this.paid.push(this.tips[i]+this.bill[i]);
        }
      }
    }
};

var mark = {
    family : ['dad', 'mom', 'sister', 'brother'],
    bill : [77, 375, 110, 45],
    tips : new Array(),
    paid : new Array(),
    tipsCalaulate : function() {
      var i = 0;
      for ( i; i < this.bill.length; i++ ) {
        if( this.bill[i] < 50 ) {
          this.tips.push((20/100)*this.bill[i]);
          this.paid.push(this.tips[i]+this.bill[i]);
        } else if ( this.bill[i] >= 50 && this.bill[i] <= 200 ) {
          this.tips.push((15/100)*this.bill[i]);
          this.paid.push(this.tips[i]+this.bill[i]);
        } else {
          this.tips.push((10/100)*this.bill[i]);
          this.paid.push(this.tips[i]+this.bill[i]);
        }
      }
    }
};

var reducer = ( a, b ) => a + b;

john.tipsCalaulate();
mark.tipsCalaulate();
console.log(john);
console.log(mark);


mark.tips.reduce(reducer) > john.tips.reduce(reducer) ? console.log('Mark\'s family paid more than John\'s family, Mark tips : ' + mark.tips.reduce(reducer)) : console.log('John\'s family paid more than mark\'s family, John tips : ' + mark.tips.reduce(reducer));

// console.log(mark.tips.reduce(reducer));
// console.log(john.tips.reduce(reducer));
