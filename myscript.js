function handleSubmit(){
  // Lấy giá trị của input email và chuyển sang in thường
  const emailValue = document.getElementById('email').value.toLocaleLowerCase();
  // lấy element của thẻ hiển thị bị lỗi
  const errorEmail = document.getElementById('error-email');
  // Điều kiện để là một email
  const checkMail = 
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Dùng match để kiểm tra email vừa nhập
  const check = emailValue.match(checkMail);
  //  lấy phần chứa thông tin user
  const personalInfo = document.querySelector('#about .personal-info');
  console.log('check section', personalInfo);
  // lấy element để kiểm soát submit
  const submitControl = document.querySelector('.submit-email');
  if(check){
    personalInfo.style.display = 'block';
    submitControl.style.display='none';
    errorEmail.innerHTML='';

  }else{
    errorEmail.innerHTML='Vui lòng nhập đúng địa chỉ Email'; 
  }
}

  
  