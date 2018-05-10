import $ from 'jquery'

$(() => {
  const page = location.pathname;
  const currentPage = page.split('/')[1].split('.')[0];
  $(`.left-side-inner .nav .${currentPage}`).addClass('active');
})
