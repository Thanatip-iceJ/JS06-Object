const user = {
    email: 'cc@gmail.com',
    isActive: true
  };
  
  user.isActive = false;
  console.log(user); // * email: 'cc@gmail.com isActive: false; เพราะมีการอัพเดทค่าเป็นfalse
  user = {};
  console.log(user); // ** error เพราะ user เป็นค่าconstant ไม่สามารถเปลี่ยนค่าได้
  