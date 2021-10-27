window.addEventListener('DOMContentLoaded', () => {
   const tabs = document.querySelectorAll('.button__item');
   const tabsContent = document.querySelectorAll('.tabcontent, xyi');
   const tabsParent = document.querySelector('.btn-wrapper');

   const form = document.getElementById('form');




   function hideTabContent() {
      tabsContent.forEach(item => {
         // item.style.display = 'none';
         item.classList.add('hide');
         item.classList.remove('show,', 'fade');
      });

      tabs.forEach(item => {
         item.classList.remove('button__item_active');
      });
   }


   function showTabContent(i = 0) {
      // tabsContent[i].style.display = 'block';
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabs[i].classList.add('button__item_active');
   }

   hideTabContent();
   showTabContent();

   tabsParent.addEventListener('click', (event) => {
      const target = event.target;

      if (target && target.classList.contains('button__item')) {
         tabs.forEach((item, i) => {
            if (target == item) {
               hideTabContent();
               showTabContent(i);
            }
         });
      }
   });
});