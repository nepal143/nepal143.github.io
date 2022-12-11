$('#bologna-list a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
          })
          const butt=document.querySelector('#buttt');
          const radioButtons = document.querySelectorAll('input[name="flexRadioDefault"]');
          radioButtons.addEventListener(onclick(), () => {
              let selectedSize;
              for (const radioButton of radioButtons) {
                  if (radioButton.checked) {
                      selectedSize = radioButton.value;
                      break;
                  }
              }
              console.log(selectedSize);
