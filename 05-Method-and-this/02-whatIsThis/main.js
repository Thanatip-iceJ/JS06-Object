var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser();
console.log(user.ref.name); // Joe เพราะเรียกใช้ฟังก์ชั่นในscope window และ ref: มีค่าเป็น this