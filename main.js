function createRadioInputs(questionData, formElement) {
  const answers = questionData.answers;
  for (const option in answers) {
      const label = document.createElement('label');
      label.textContent = answers[option];
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `question_${questionData.id}`;
      input.value = option;
      label.appendChild(input);
      formElement.appendChild(label);
  }}
//leer json y pasarlo a js
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    // createHeader(data);
    // pregunta(data.questions);

      const root = document.getElementById('root')
      let h1= document.createElement('h1')
      h1.innerHTML= data.title
      root.appendChild(h1)
      

      let h5= document.createElement('h5')
      h5.innerHTML= data.description
      root.appendChild(h5)
      
      let img = document.createElement('img')
      img.setAttribute ("src","./img/alpajes.jpg")
      img.style.width = '200px';
      root.appendChild(img)
      
///////////////////////////////////////////////
const questions = data.questions[0];
      questions.forEach((question, index) => {
          const formElement = document.createElement('form');
          formElement.id = `formulario-q${index + 1}`; // Añade el ID del formulario
          const questionContainer = document.createElement('div');
          const questionTitle = document.createElement('h3');
          questionTitle.textContent = question.question;
          questionContainer.appendChild(questionTitle);
          createRadioInputs(question, formElement);
          questionContainer.appendChild(formElement);
          document.body.appendChild(questionContainer);

          const button = document.createElement('button');
          button.textContent='responder';
          button.id=`btn-q${index + 1}`
          button.type='button'
          button.onclick= function(){
         checkQuestion(button.id)
         // alert(button.id)
         
          }
          formElement.appendChild(button)
      });

      
  })

  function checkQuestion(id){
  let inputs= document.querySelectorAll(`#${id} input[type=radio]`)
  console.log(inputs)
  
  }
  