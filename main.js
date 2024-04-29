// const root=document.getElementById('root')



//leer json y pasarlo a js
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
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
      
      
      // const form = document.createElement('form');
      // root.appendChild(form);
      // form.className='formulario';


      //////////////////////////////////////////////
          // const questions = data.questions[0]; // Accede a la lista de preguntas del JSON

          // // Encuentra la pregunta con id 1
          // const questionId1 = questions.find(question => question.id === 1);
          // // Crea un elemento p y agrega la pregunta con id 1
          // const pElement1 = document.createElement('p');
          // pElement1.textContent = questionId1.question;
          // // Agrega el elemento p al cuerpo del formulario
          // form.appendChild(pElement1);
          
          // // Obtiene la segunda pregunta
          // const questionId2 =  questions.find(question => question.id === 2);
          // const pElement2 = document.createElement('p');
          // pElement2.textContent = questionId2.question;
          // // Agrega el elemento p al cuerpo del formulario
          // form.appendChild(pElement2);

          // const questionId3 =  questions.find(question => question.id === 3);
          // const pElement3 = document.createElement('p');
          // pElement3.textContent = questionId3.question;
          // // Agrega el elemento p al cuerpo del formulario
          // form.appendChild(pElement3);

          // const questionId4 =  questions.find(question => question.id === 4);
          // const pElement4 = document.createElement('p');
          // pElement4.textContent = questionId4.question;
          // // Agrega el elemento p al cuerpo del formulario
          // form.appendChild(pElement4);

          // const questionId5 =  questions.find(question => question.id === 5);
          // const pElement5 = document.createElement('p');
          // pElement5.textContent = questionId5.question;
          // // Agrega el elemento p al cuerpo del formulario
          // form.appendChild(pElement5);

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
      });

      
      

  })

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