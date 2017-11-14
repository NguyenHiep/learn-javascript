/*Khai báo object trong javascript*/

var hcn = {
  x: 10,
  y: 11,
  chuvi: function () {
    return (this.x+this.y)*2;
  },
  dientich: function () {
    return this.x*this.y;
  }
}
/*console.log(hcn.x);
console.log(hcn.y);
console.log(hcn.chuvi());
console.log(hcn.dientich());
console.log('Set thuoc tinh');*/

hcn.x = 20;
hcn.y = 40;
/*

console.log(hcn.x);
console.log(hcn.y);
console.log(hcn.chuvi());
console.log(hcn.dientich());
*/
