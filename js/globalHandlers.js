changePage('home');
$('.carousel').carousel({
    interval: 5000 //changes the speed
})


function changePage(name) {

  $( "#menuContainer" ).children().removeClass( );

  switch (name) {
    case 'about':
      history.pushState({page: name}, '', name);
      $('#aboutOp').addClass('active')
      if($('#bs-example-navbar-collapse-1').attr('aria-expanded') === 'true') {
        $( "#navbarButton" ).click();
      }
      loadAboutPage();
      break;
    case 'services':
      history.pushState({page: name}, '', name);
      $('#servicesOp').addClass('active')
      if($('#bs-example-navbar-collapse-1').attr('aria-expanded') === 'true') {
        $( "#navbarButton" ).click();
      }
      loadServicesPage();
      break;
    case 'projects':
      history.pushState({page: name}, '', name);
      $('#projectsOp').addClass('active')
      if($('#bs-example-navbar-collapse-1').attr('aria-expanded') === 'true') {
        $( "#navbarButton" ).click();
      }
      loadProjectsPage();
      break;
    case 'contact':
      history.pushState({page: name}, '', name);
      $('#contactOp').addClass('active')
      if($('#bs-example-navbar-collapse-1').attr('aria-expanded') === 'true') {
        $( "#navbarButton" ).click();
      }
      loadContactPage();
      break;
    default:
      loadHomePage();
      break;
  }

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

}
