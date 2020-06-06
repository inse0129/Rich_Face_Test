//  function LOTTO() {
//     var result = [0, 0, 0, 0, 0, 0];
//     var num;
//     var i =0
//     do{
//       num = Math.floor(Math.random()*45) +1;
//       for (var j = 0; j <= i; j++){
//         if (num == result[j]) break;
//       }
//       if (j < i) continue;
//       result[i] = num;
//       i++;
//     } while (i<6)
//     for (var i = 0; i < 6; i++) (result[i]+" . ");
//    }



function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);
    init().then(function(){
      predict();
    });

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
// $('.image-upload-wrap').bind('dragover', function () {
// 		$('.image-upload-wrap').addClass('image-dropping');
// 	});
// 	$('.image-upload-wrap').bind('dragleave', function () {
// 		$('.image-upload-wrap').removeClass('image-dropping');
// });

// LOTTO

function Lotto() {
        
  var arr45 = [];

  var arr6 = [];

  for (i = 0; i < 45; i++) arr45[i] = i + 1;

  // var xx = exception.value;

  // xx = xx.split(",");

  // for (i = 0; i<xx.length; i++) {

  //   for(j = 0; j<arr45.length; j++) {

  //     if (arr45[j] == xx[i]) arr45.splice(j,1);

  //   }

  // }

  arr45 = reArray(arr45);

  for (i = 0; i < 6; i++) {

    var dex = parseInt(Math.random()*arr45.length);

    arr6[i] = arr45[dex];

    arr45.splice(dex, 1);

  }

  arr6.sort(function(a,b){return a-b});

  document.getElementById("outp").innerHTML = arr6;

}

function reArray(arr) {

  var i = 0;

  var newArray = [];

  while(arr.length > 0) {

    var x = parseInt(Math.random()*arr.length);

    newArray[i] = arr[x];

    i++;

    arr.splice(x,1);

  }

  return newArray;

}

// LOTTO