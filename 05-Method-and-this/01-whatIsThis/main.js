let user = {
    name: 'John',
    sayHi: function () {
      console.log(this.name);
    }
  };
  
  (user.sayHi)(); // *John เพราะ this ใช้แทนชื่อตัวแปรของobjectที่ใช้ค่าอยู่
  

  