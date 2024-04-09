async function postMessage() {
  // 阻止表单的默认提交行为
  event.preventDefault();

  // 获取用户输入的数据
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const messageContent = document.getElementById('messageContent').value;

  // 使用fetch API发送数据到后端
  const response = await fetch('http://localhost:5000/message', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
          name: name, 
          email: email, 
          message: messageContent 
      }),
  });

  const responseData = await response.json();

  if (responseData.status === 'success') {
      alert('Message sent successfully!');
      // 清空表单
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('messageContent').value = '';
  } else {
      alert('Failed to send message.');
  }
}