lightbox.option({
  'showImageNumberLabel': false,
  })
let arr = [
  'bluebells',
  'canyon',
  'cave',
  'countryside',
  'desert',
  'dunes',
  'fall',
  'hay',
  'iceberg',
  'lake',
  'plantation',
  'sunset'
];

function myFunction() {
  let $text = $('.search_box').val();
  $text = $text.toLowerCase();
  for(let i=0;i<arr.length;i++)
    $('a').eq(i).toggle(arr[i].indexOf($text)>-1);
}
