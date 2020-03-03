(function($) {
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");
  var close = document.getElementById("menu-close");

  toggle.addEventListener("click", function(e) {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      menu.classList.add("open");
    }
  });

  close.addEventListener("click", function(e) {
    menu.classList.remove("open");
  });

  // Close menu after click on smaller screens
  $(window).on("resize", function() {
    if ($(window).width() < 846) {
      $(".main-menu a").on("click", function() {
        menu.classList.remove("open");
      });
    }
  });

  $(".owl-carousel").owlCarousel({
    items: 4,
    lazyLoad: true,
    loop: true,
    dots: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $(".hover").mouseleave(function() {
    $(this).removeClass("hover");
  });

  $(".isotope-wrapper").each(function() {
    var $isotope = $(".isotope-box", this);
    var $filterCheckboxes = $('input[type="radio"]', this);

    var filter = function() {
      var type = $filterCheckboxes.filter(":checked").data("type") || "*";
      if (type !== "*") {
        type = '[data-type="' + type + '"]';
      }
      $isotope.isotope({ filter: type });
    };

    $isotope.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "masonry"
    });

    $(this).on("change", filter);
    filter();
  });

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true
  });
})(jQuery);

var ifunc=function(){
  var map=new ol.Map({
    target:'map',
    layers:[
    new ol.layer.Tile({
      title:"华北水利水电大学",
      source:new ol.source.XYZ({
        url:"http://t0.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=81fe8a3427000ad3ccd589267c0627d5",
        attributions:"华北水利水电大学",
        wrapX:true
      }),
      preload:Infinity
    }),
    new ol.layer.Tile({
      title:"okok",
      source:new ol.source.XYZ({
        url:"http://t0.tianditu.com/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=81fe8a3427000ad3ccd589267c0627d5",
        attributions:"华北水利水电大学",
        wrapX:true
      }),
      preload:Infinity
    })
    ],
    view: new ol.View({
      center:[113.787,34.781],
      projection:"EPSG:4326",
      minZoom:16,
      maxZoom:18,
      zoom:16
    })
  });
};
ifunc();