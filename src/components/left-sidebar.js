import $ from 'jquery'

$(() => {
  const page = location.pathname;
  let currentPage = page.split('/')[1].split('.')[0];
  if (!currentPage) {
    currentPage = 'index';
  }
  $(`.left-side-inner .nav .${currentPage}`).addClass('active');
})
