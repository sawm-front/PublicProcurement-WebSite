$(function() {
   $('.contact-form').submit(function(event) {
      const form = $(this);

      event.preventDefault();

      $.ajax({
         type: form.attr('method'),
         url: form.attr('action'),
         data: form.serialize()
      }).done(function(data) {
         alert(data);
      }).fail(function(data) {});
   });
});