(function () {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
        },
    });
    const hotProductSwiper = new Swiper('.hot-product__image', {
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
    
    const productsSlider = new Swiper('.products__slider', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 24,
        speed: 2000,
        on: {
            slideChange: function() {
                const arrowButtons = document.querySelectorAll(".swiper-custom-nav-button");
                for(let i of arrowButtons) {
                    const arrowIcon = i.querySelector('.swiper-custom-nav-button-arrow');
                    if(i.classList.contains('swiper-button-disabled')) {
                        arrowIcon.style.fill = "rgb(203, 213, 225)"
                    } else {
                        arrowIcon.style.fill = "#14B8A6"
                    }
                }
            }
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-custom-nav-button-next',
            prevEl: '.swiper-custom-nav-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 24,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            940: {
              slidesPerView: 3,
              spaceBetween: 24
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 24
            }
        }
    });

    const popularProduct = new Swiper('.popular__products-slider', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 24,
        speed: 2000,
        on: {
            slideChange: function() {
                const arrowButtons = document.querySelectorAll(".popular-swiper-custom-nav-button");
                for(let i of arrowButtons) {
                    const arrowIcon = i.querySelector('.swiper-custom-nav-button-arrow');
                    if(i.classList.contains('swiper-button-disabled')) {
                        arrowIcon.style.fill = "rgb(203, 213, 225)"
                    } else {
                        arrowIcon.style.fill = "#14B8A6"
                    }
                }
            }
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.popular-swiper-custom-nav-button-next',
            prevEl: '.popular-swiper-custom-nav-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 24,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            940: {
              slidesPerView: 3,
              spaceBetween: 24
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 24
            }
        }
    });

    const productDetailGallerySlider = new Swiper('.product-detail__images-gallery-slider', {
        direction: "vertical",
        slidesPerView: 4,
        spaceBetween: 24
    });

    if (window.matchMedia("(max-width: 700px)").matches) {
        const productDetailImageSlider = new Swiper('.product-detail__main-image-slider', {
          direction: "horizontal",
          slidesPerView: 1
        });
    }
})();


window.onload = function() {
    $('.mobile-header__hamburger').on('click', function() {
        $('.mobile__right-menu').addClass('is_opened');
        $('html, body').css('overflowY', 'hidden'); 
    });
    
    $('.mobile__right-menu-close-btn').on('click', function() {
        $('.mobile__right-menu').removeClass('is_opened');
        $('html, body').css('overflowY', 'auto'); 
    });
   
    
    if (window.matchMedia("(max-width: 700px)").matches) {
        $('.product-detail__images-gallery-slider-item').on('click', function() {
            const src = $(this).find('img').attr('src');
            $('.product-detail__main-image-slider').find('.swiper-slide.main').each(function() {
                if($(this).hasClass('swiper-slide-active')) {
                    $(this).find('img').attr("src", src);
                }
            })
        });    
    } else {
        $('.product-detail__images-gallery-slider-item').on('click', function() {
            const src = $(this).find('img').attr('src');
            $('.product-detail__main-image-slider').find('.swiper-slide.main').each(function() {
                $(this).find('img').attr("src", src);
            })
        }); 
    }

    
    $('.product-detail__description-text-toggle').on('click', function() {
        $(this).html('Закрыть полное описание');
        const text = $('.product-detail__description-text');
        text.toggleClass('is_opened')
        if(!text.hasClass('is_opened')) {
            $(this).html('Посмотреть полное описание');
        }
    });

    $('.product-detail__description-open-phone').on('click', function() {
        const phone = $('.product-detail__description-phone-hidden');
        phone.toggleClass('opened');
        if(phone.hasClass('opened')) {
            $(this).html('Закрыт номер продавца');
            return $('.product-detail__description-phone').css({"cursor": "pointer", "pointerEvents": "auto"});
        } 
        $(this).html('Показать номер продавца');
        return $('.product-detail__description-phone').css({"cursor": "default", "pointerEvents": "none"});
    });

    $('.product-detail__features-header-feedback').on('click', function() {
        $('.product-detail__features-review').css('display', 'flex');
        $('.product-detail__main-image-slider-item-rating').css('display', 'flex');
        $('.product-detail__features-nav').css('display', 'none');
        $('.product-detail__features-header-chrs').removeClass('is_opened');
        $(this).addClass('is_opened');
    })

    $('.product-detail__features-header-chrs').on('click', function() {
        $('.product-detail__features-nav').css('display', 'block');
        $('.product-detail__features-review').css('display', 'none');
        $('.product-detail__main-image-slider-item-rating').css('display', 'none');
        $('.product-detail__features-header-feedback').removeClass('is_opened');
        $(this).addClass('is_opened');
    });

    $('.footer__mail-form').on('submit', function(e) {
        const value = e.target.email.value;
        e.preventDefault();
        $('html, body').css('overflowY', 'hidden');
        $('.subscribe-modal').css('display', 'flex');
        $('.subscribe-modal__email').html(value);
        $('.subscribe-modal__email-form').val(value);
    });

    $('.subscribe-modal__checkbox-close').on('click', function() {
        $('.subscribe-modal').css('display', 'none');
        $('html, body').css('overflowY', 'auto');
    });

    $('.show_password').on('click', function() {
        const parent = $(this).parent().find('input');
        if(parent.attr('type') === 'text') {
            return parent.attr('type', 'password');
        }
        return parent.attr('type', 'text')
    });

    $('.account__form-images-file').on('change', function(e) {
        const images = e.target.files;
        $('.account__form-images-list').html('');

        for(let image of images) {
            const src = URL.createObjectURL(image);
            $('.account__form-images-list').append(`
                <img src='${src}'/>
            `); 
        }
        
    });

    $('.account__form-image-upload').on('click', function(e) {
        $('.account__form-images-file').click();
    });
    
    $('.account__form-upload-drag').on('dragover', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass('hover');
    });

    $('.account__form-upload-drag').on('dragleave', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).removeClass('hover');
    });

    $('.account__form-upload-drag').on('drop', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const files = e.originalEvent.dataTransfer.files;
        const uploadFile = document.getElementById('upload-file');
        uploadFile.files = files;
        $('.account__form-select-text').html(files[0].name);
        $(this).removeClass('hover');
    });
    
    $('.account__form-product-upload-btn').on('click', function() {
        $('.account__form-modal').css('display', 'flex');
    });

    $('.account__form-modal-cancel').on('click', function() {
        $('.account__form-modal').css('display', 'none');
    });

    $('.account__form-edit-modal-cancel').on('click', function() {
        $('.account__form-edit-chrs-modal').css('display', 'none');
    });

    $('.account__form-bottom-link-edit').on('click', function() {
        $('.account__form-edit-chrs-modal').css('display', 'flex');
    });

    $('.dashboard-header__hamburger').on('click', function() {
        $('.dashboard-right-header__modal').addClass('is_opened');
    });

    $('.dashboard-right-header__close').on('click', function() {
        $('.dashboard-right-header__modal').removeClass('is_opened');
    });

    $('.dashboard-right-header__item').on('click', function() {
        $('.dashboard-logout__modal').css('display', 'flex');
    });

    $('.dashboard__sidebar-logout-button').on('click', function() {
        $('.dashboard-logout__modal').css('display', 'flex');
    });

    $('.dashboard-logout__modal-cancel').on('click', function() {
        $('.dashboard-logout__modal').css('display', 'none');
    });

    $('.admin-add-category-modal-cancel').on('click', function() {
        $('.account-add-category__modal').css('display', 'none');
        $('.account-edit-category__modal').css('display', 'none')
    });

    $('.admin-new-categories-btn').on('click', function() {
        $('.account-add-category__modal.add').css('display', 'flex');
    });


    $('.show-sub-category-edit-modal').on('click', function() {
        $('.account-add-category__modal.edit').css('display', 'flex');
    });

    $('.account__form-add-brand-link').on('click', function() {
        $('.account-add-category__modal').css('display', 'flex');
    });

    $('.show-edit-modal').on('click', function() {
        $('.account-edit-category__modal').css('display', 'flex');
    })

    $('.admin-edit-category-modal-cancel').on('click', function() {
        $('.account-edit-category__modal').css('display', 'none');
    })

    $('.account-add-brand__image-icon').on('click', function() {
        $('.account-add-brand__image-file').click();
    });

    $('.account-add-brand__change-logo').on('click', function() {
        $('.account-add-brand__image-file').click();
    });

    $('.account-add-brand__image-file').on('change', function(e) {
        const image = e.target.files[0];
        const src = URL.createObjectURL(image);
        $('.account-add-brand__image-btn').css('display', 'flex');
        $('.account-add-brand__image-icon').html(`
            <img src='${src}'/>
        `);
    });

    $('.account-add-brand__delete-logo').on('click', function() {
        $(".account-edit-brand__image-file").val(null);
        $('.account-add-brand__image-btn').css('display', 'none');
        $('.account-add-brand__image-icon').html(`
            <img src="./images/upload-icon.svg" alt="upload-icon"/>
            <span>Добавить новый</span>
        `);
    });

    $('.show-edit-modal-brand').on('click', function() {
        $('.account-edit-category__modal').css('display', 'flex');
    });

    $('.dashboard-product__header-item.confirm').on('click', function() {
        $(this).addClass('is_active');
        $('.dashboard-product__header-item.new').removeClass('is_active');
        $('.dashboard-product__header-item.canceled').removeClass('is_active');

        $('.dashboard-content-new-products').css('display', 'none');
        $('.dashboard-content__canceled-products').css('display', 'none');
        $('.dashboard-content__confirmed-products').css('display', 'block');
    });

    $('.dashboard-product__header-item.canceled').on('click', function() {
        $(this).addClass('is_active');
        $('.dashboard-product__header-item.new').removeClass('is_active');
        $('.dashboard-product__header-item.confirm').removeClass('is_active');
        
        $('.dashboard-content-new-products').css('display', 'none');
        $('.dashboard-content__canceled-products').css('display', 'block');
        $('.dashboard-content__confirmed-products').css('display', 'none');
    });

    $('.dashboard-product__header-item.new').on('click', function() {
        $(this).addClass('is_active');
        $('.dashboard-product__header-item.canceled').removeClass('is_active');
        $('.dashboard-product__header-item.confirm').removeClass('is_active');
        
        $('.dashboard-content-new-products').css('display', 'block');
        $('.dashboard-content__canceled-products').css('display', 'none');
        $('.dashboard-content__confirmed-products').css('display', 'none');
    });

    $('.dashboard-product-detail-cancel-btn').on('click', function() {
        $('.dashboard-product-detail__modal-cancel').css('display', 'flex');
    });

    $('.dashboard-product-detail__modal-cancel-btn ').on('click', function() {
        $('.dashboard-product-detail__modal-cancel').css('display', 'none');
    });

    $('.alert-close').on('click', function() {
        $(this).parent().css('display', 'none');
    })

    let itemSubListIndex = 1;

    $('.account-add-category__item-btn').on('click', function() {
        const categoryRU = $('#name-category-ru').val();
        const categoryUZ = $('#name-category-uz').val();
        const categoryEN = $('#name-category-en').val();

        const key = Date.now();

        const list = `
            <div class="account-edit-category__sub-lists" key="${key}">
                <div class="account-edit-category__sub-item">
                    <input class="account-edit-category__sub-item-input" type="text" value="${categoryRU}" name="features-${itemSubListIndex}-data-ru" readonly/>
                </div>
                <div class="account-edit-category__sub-item">
                    <input class="account-edit-category__sub-item-input" type="text" value="${categoryUZ}" name="features-${itemSubListIndex}-data-uz" readonly/>
                </div>
                <div class="account-edit-category__sub-item ">
                    <input class="account-edit-category__sub-item-input" type="text" value="${categoryEN}" name="features-${itemSubListIndex}-data-en" readonly/>
                </div>
                <a class="account-edit-category__item-btn delete" href="#" onClick="deleteCategoryEditItem(${key})">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.15128 1.15128C1.61991 0.682647 2.3797 0.682647 2.84833 1.15128L7.9998 6.30275L13.1513 1.15128C13.6199 0.682647 14.3797 0.682647 14.8483 1.15128C15.317 1.61991 15.317 2.3797 14.8483 2.84833L9.69686 7.9998L14.8483 13.1513C15.317 13.6199 15.317 14.3797 14.8483 14.8483C14.3797 15.317 13.6199 15.317 13.1513 14.8483L7.9998 9.69686L2.84833 14.8483C2.3797 15.317 1.61991 15.317 1.15128 14.8483C0.682647 14.3797 0.682647 13.6199 1.15128 13.1513L6.30275 7.9998L1.15128 2.84833C0.682647 2.3797 0.682647 1.61991 1.15128 1.15128Z" fill="#EF4444"/>
                    </svg>
                </a>
            </div>
        `

        itemSubListIndex++;

        $('.account-edit-category__sub-list').append(list);

        $('#name-category-ru').val('');
        $('#name-category-uz').val('');
        $('#name-category-en').val('');
    });

    $('.link__share-modal-close').on('click', function() {
        $('.link__share-modal').css('display', 'none');
    });

    $('.product__card-share-button').on('click', function() {
        $('.link__share-modal').css('display', 'flex');
        const selfLink = $(this).parent().parent().find('.link__share-links').find('.link__share-self-link').html();
        const facebookLink = $(this).parent().parent().find('.link__share-links').find('.link__share-facebook-link').html();
        const twitterLink = $(this).parent().parent().find('.link__share-links').find('.link__share-twitter-link').html();
        $('.link__share-modal-input').find('input').val(selfLink);
        $('.link__share-facebook-link-icon').attr('href', facebookLink);
        $('.link__share-twitter-link-icon').attr('href', twitterLink);
        
        
    });

    $('.link__share-modal-input .admin-btn-success-out').on('click', function() {
        let $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('.link__share-modal-input').find('input').val()).select();
        document.execCommand("copy");
        $temp.remove();

        $(this).html('Скопирована');
        setTimeout(function() {
            $('.link__share-modal-input .admin-btn-success-out').html('Копировать');
        }, 500);
    });

    $('.account-add-category__item-btn-modal').on('click', function() {
        const categoryRU = $('#add-name-category-ru').val();
        const categoryUZ = $('#add-name-category-uz').val();
        const categoryEN = $('#add-name-category-en').val();

        const key = Date.now();

        const list = `
            <div class="account-edit-category__sub-lists" key="${key}">
                <div class="account-edit-category__sub-item">
                    <input class="account-edit-category__sub-item-input" type="text" value="${categoryRU}" readonly/>
                </div>
                <div class="account-edit-category__sub-item">
                    <input class="account-edit-category__sub-item-input" type="text" value="${categoryUZ}" readonly/>
                </div>
                <div class="account-edit-category__sub-item ">
                    <input class="account-edit-category__sub-item-input" type="text" value="${categoryEN}" readonly/>
                </div>
                <a class="account-edit-category__item-btn delete" href="#" onClick="deleteCategoryAddItem(${key})">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.15128 1.15128C1.61991 0.682647 2.3797 0.682647 2.84833 1.15128L7.9998 6.30275L13.1513 1.15128C13.6199 0.682647 14.3797 0.682647 14.8483 1.15128C15.317 1.61991 15.317 2.3797 14.8483 2.84833L9.69686 7.9998L14.8483 13.1513C15.317 13.6199 15.317 14.3797 14.8483 14.8483C14.3797 15.317 13.6199 15.317 13.1513 14.8483L7.9998 9.69686L2.84833 14.8483C2.3797 15.317 1.61991 15.317 1.15128 14.8483C0.682647 14.3797 0.682647 13.6199 1.15128 13.1513L6.30275 7.9998L1.15128 2.84833C0.682647 2.3797 0.682647 1.61991 1.15128 1.15128Z" fill="#EF4444"/>
                    </svg>
                </a>
            </div>
        `

        $('.account-add-category__sub-list').append(list);

        $('#add-name-category-ru').val('');
        $('#add-name-category-uz').val('');
        $('#add-name-category-en').val('');
    });

    // if ($('.account-edit-category__sub-list').children().length === 0) {
    //     $('.account-edit-category__sub-list').html(`
    //         <svg class="account-edit-category__sub-empty-icon" width="42" height="52" viewBox="0 0 42 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <path d="M12.9999 7.33333H7.66659C4.72107 7.33333 2.33325 9.72115 2.33325 12.6667V44.6667C2.33325 47.6122 4.72107 50 7.66659 50H34.3333C37.2788 50 39.6666 47.6122 39.6666 44.6667V12.6667C39.6666 9.72115 37.2788 7.33333 34.3333 7.33333H28.9999M12.9999 7.33333C12.9999 10.2789 15.3877 12.6667 18.3333 12.6667H23.6666C26.6121 12.6667 28.9999 10.2789 28.9999 7.33333M12.9999 7.33333C12.9999 4.38781 15.3877 2 18.3333 2H23.6666C26.6121 2 28.9999 4.38781 28.9999 7.33333M20.9999 26H28.9999M20.9999 36.6667H28.9999M12.9999 26H13.0266M12.9999 36.6667H13.0266" stroke="#94A3B8" stroke-width="3" stroke-linecap="round"/>
    //         </svg>
    //         <p class="account-edit-category__sub-text">Эта категория пока не имеет субкатегории</p>
    //     `);
    // }

    $('.admin-btn-success.add-user').on('click', function() {
        $('.user-add__modal').css('display', 'flex');
    });

    $('.user-add-btn-cancel').on('click', function() {
        $('.user-add__modal').css('display', 'none');
    });


    $('.product-detail__breadcrumb-sharelink').on('click', function() {
        $('.link__share-modal').css('display', 'flex');
        const selfLink = $('.product-detail__sharelink-self-item').html();
        const facebookLink = $('.product-detail__sharelink-facebook-item').html();
        const twitterLink = $('.product-detail__sharelink-twitter-item').html();
        $('.link__share-modal-input').find('input').val(selfLink);
        $('.link__share-facebook-link-icon').attr('href', facebookLink);
        $('.link__share-twitter-link-icon').attr('href', twitterLink);
    });  

    $('.account-add-slider-images').on('change', function(e) {
        const images = e.target.files;
        
        $('.account-add-category__list').html('');
        $('.account-slider-image-list').html('');

        for(let i = 0; i < images.length; i++) {
            const src = URL.createObjectURL(images[i]);
            $('.account-slider-image-list').append(`
                <img src='${src}'/>
            `);
            $('.account-add-category__list').append(`
                <div class="account-add-category__item mt-24">
                    <label>Название ${i + 1}-го слайда <span>*</span></label>
                    <input class="admin-input" type="text" placeholder="Введите название"/>
                </div>
            `);
        }
       
    });

    $('.account-add-slide__image-icon').on('click', function() {
        $('.account-add-slider-images').click();
    });
};

$(function() {
    $('#all_categories').on('change', function() {
        const _this = this;
        $('.subscribe-modal__checkbox-item').each(function() {
            $(this).children('input').prop('checked', $(_this).is(':checked'));
        })
    })

    $('.subscribe-modal__checkbox-item').children('input').on('change', function() {
        const length = $('.subscribe-modal__checkbox-item').length;
        let checkedLength = 0;
        $('.subscribe-modal__checkbox-item').children('input').each(function() {
            if($(this).is(':checked')) {
                checkedLength++;
            }
        });

        $('#all_categories').prop('checked', length === checkedLength);
    });
});

$(function() {
    if($('.alert').length > 0) {
        setTimeout(function() {
            $('.alert').remove();
        }, 4000);
    }
});

function deleteCategoryAddItem(key) {
    $('.account-add-category__sub-list').children().each(function(e) {
        if ($(this).attr('key') == key) {
            $(this).remove();
        }
    })
}


function deleteCategoryEditItem(key) {
    $('.account-edit-category__sub-list').children().each(function(e) {
        if ($(this).attr('key') == key) {
            $(this).remove();
        }
    })
}
