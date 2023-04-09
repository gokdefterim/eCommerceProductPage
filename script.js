new Promise((resolve,reject)=>{
    var jqueryCdn = document.createElement('script');
    jqueryCdn.onload=resolve;
    jqueryCdn.onerror=reject;
    jqueryCdn.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
    jqueryCdn.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(jqueryCdn);
}).then(product);

function product (){

    var classes = {
        bigPhoto : 'big-photo',
        photo1 : 'photo1',
        photo2 : 'photo2',
        photo3 : 'photo3',
        photo4 : 'photo4',
        photo1Img : 'photo1-img',
        photo2Img : 'photo2-img',
        photo3Img : 'photo3-img',
        photo4Img : 'photo4-img',
        minus : 'minus',
        plus : 'plus',
        number : 'number',
        add : 'add',
        badge : 'badge',
    }

    var selectors = {};

    Object.keys(classes).forEach(function (key) {
        selectors[key] = '.' + classes[key];
    });

    $(selectors.photo1).click(function() {
        $(selectors.bigPhoto).css('background-image', 'url(images/image-product-1.jpg)');
        
        $(selectors.photo1Img).css('opacity', 0.5);
        $(selectors.photo2Img).css('opacity', 1);
        $(selectors.photo3Img).css('opacity', 1);
        $(selectors.photo4Img).css('opacity', 1);
        
        $(selectors.photo1).css('border', '2px solid #ff7d1a');
        $(selectors.photo2).css('border', 'none');
        $(selectors.photo3).css('border', 'none');
        $(selectors.photo4).css('border', 'none');
    });
    $(selectors.photo2).click(function() {
        $(selectors.bigPhoto).css('background-image', 'url(images/image-product-2.jpg)');
        
        $(selectors.photo1Img).css('opacity', 1);
        $(selectors.photo2Img).css('opacity', 0.5);
        $(selectors.photo3Img).css('opacity', 1);
        $(selectors.photo4Img).css('opacity', 1);
        
        $(selectors.photo2).css('border', '2px solid #ff7d1a');
        $(selectors.photo1).css('border', 'none');
        $(selectors.photo3).css('border', 'none');
        $(selectors.photo4).css('border', 'none');
    });
    $(selectors.photo3).click(function() {
        $(selectors.bigPhoto).css('background-image', 'url(images/image-product-3.jpg)');
        
        $(selectors.photo1Img).css('opacity', 1);
        $(selectors.photo2Img).css('opacity', 1);
        $(selectors.photo3Img).css('opacity', 0.5);
        $(selectors.photo4Img).css('opacity', 1);
        
        $(selectors.photo3).css('border', '2px solid #ff7d1a');
        $(selectors.photo2).css('border', 'none');
        $(selectors.photo1).css('border', 'none');
        $(selectors.photo4).css('border', 'none');
    });
    $(selectors.photo4).click(function() {
        $(selectors.bigPhoto).css('background-image', 'url(images/image-product-4.jpg)');
        
        $(selectors.photo1Img).css('opacity', 1);
        $(selectors.photo2Img).css('opacity', 1);
        $(selectors.photo3Img).css('opacity', 1);
        $(selectors.photo4Img).css('opacity', 0.5);
       
        $(selectors.photo4).css('border', '2px solid #ff7d1a');
        $(selectors.photo2).css('border', 'none');
        $(selectors.photo3).css('border', 'none');
        $(selectors.photo1).css('border', 'none');
    });

    var badge = 0;


    var count = 0;

    $(selectors.minus).click(function() {
        count --;
        $(selectors.number).html(`${count}`);
    });
    $(selectors.plus).click(function() {
        count ++;
        $(selectors.number).html(`${count}`);
    });

    $(selectors.add).click(function() {
        badge += count;
        $(selectors.badge).html(`${badge}`);
        $(selectors.badge).css('background-color', '#FF0000');

        count = 0;
        $(selectors.number).html(`${count}`);
    });

    var params = 'width=' + screen.width + ', height=' + screen.height
            + ', top=0, left=0'
            + ',toolbar=no,scrollbars=no,status=no,menubar=no,fullscreen=yes';

    screenServiceFactory.windows[id] = window.open(location, id, params);



}