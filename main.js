{
    const inputText = document.getElementById('inputText');
    const button = document.getElementById('button');

    button.addEventListener('click', () => {
        submit();
        clearText();
        alert('通知しました');
    })
    

    function submit() {
        let text = inputText.value;
        const url = "https://hooks.slack.com/services/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";
        const data = {
          text: "@Pen！！　呼んでます　　" + text
        };
      
        const xml = new XMLHttpRequest();
        xml.open("POST", url, false);
        xml.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
        xml.send(`payload=${JSON.stringify(data)}`)
      }

      function clearText() {
        inputText.value = '';
      }

}