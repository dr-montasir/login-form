const fadeAndMoveFormElements = (() => {
  
  // Add active class
  const handleFocus = (evt) => {
    const target = evt.target;
    target.parentNode.classList.add('active');
  };
  
  // Remove active class
  const handleBlur = (evt) => {
    const target = evt.target;
    if(!target.value) {
      target.parentNode.classList.remove('active');
    }
  };
  
  // Handle Events
  const handleEvents = (element) => {
    const label = element.querySelector('.form__label');
    const input = element.querySelector('.form__input');

    label.classList.toggle('visually-hidden');
    input.setAttribute('placeholder', '');

    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);
  };
  
  // Get Form Elements
  const getFormElements = () => {
    const formField = document.querySelectorAll('.form__field');

    formField.forEach((element) => {

      if (element.querySelector('.form__input').value) {
        element.classList.add('active');
      }

      handleEvents(element);
    });
  };
  
  return {
    getFormElements: getFormElements
  };
})();

fadeAndMoveFormElements.getFormElements();
