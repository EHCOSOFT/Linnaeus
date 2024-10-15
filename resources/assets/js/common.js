
$(document).ready(function () {
    // 공통 jQuery 코드 (모바일과 PC 모두에 적용)
    function applyCommonjQuery() {
        $("#header").append(Header());
        $("#footer").append(Footer());

        function Header() {
            return `
              <div class="header-top">
                <div class="container">
                    
                </div>
            </div>
            <div class="header-mo-navbar">
                <button type="button" class="btn-menu-close btn-ico"><img src="img/ico/i-x-lg.svg" alt=""></button>
                <ul class="navbar">
                    <li>
                        <a href="#">PRODUCTS</a>
                    </li>
                    <li>
                        <a href="#">RESOURCES</a>
                    </li>
                    <li>
                        <a href="#">CUSOMER SERVICE</a>
                    </li>
                    <li>
                        <a href="#">ABOUT US</a>
                    </li>
                </ul>
                
            </div>
            <div class="header-wrap">
                <div class="container">
                    <a href="#" class="header-logo">
                        <img src="img/logo.svg" alt="Linnaeus">
                    </a>
                    <ul class="navbar pc">
                        <li>
                            <a href="#">PRODUCTS</a>
                        </li>
                        <li>
                            <a href="#">RESOURCES</a>
                        </li>
                        <li>
                            <a href="#">CUSOMER SERVICE</a>
                        </li>
                        <li>
                            <a href="#">ABOUT US</a>
                        </li>
                    </ul>
                    <ul class="header-menu">
                        <li><a href="#"><img src="img/ico/i-cart.svg" alt=""></a></li>
                        <li><a href="#"><img src="img/ico/i-user.svg" alt=""></a></li>
                        <li>
                            <div class="dropdown">
                                <button class="dropdown-toggle"><img src="img/ico/i-globe.svg" alt=""></button></button>
                                <ul class="dropdown-menu">
                                    <li><a href="#">KO</a></li>
                                    <li><a href="#">EN</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <button type="button" class="btn-menu btn-ico">
                        <img src="img/ico/i-list.svg" alt="">
                    </button>
                </div>
            </div>
            `
        };

        function Footer() {
            return `
            <div class="container">
                <div class="footer-top">
                    <div class="footer-menu-info">
                        <div class="left">
                            <h6>정보</h6>
                            <ul>
                                <li><a href="#">회사소개</a></li>
                                <li><a href="#">서비스</a></li>
                                <li><a href="#">문의하기</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div class="right mo">
                            <h6>약관</h6>
                            <ul>
                                <li><a href="#">개인정보 처리방침</a></li>
                                <li><a href="#">웹 사이트 이용약관</a></li>
                                <li><a href="#">판매 및 환불</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-sns">
                        <ul>
                            <li><a href="#"><img src="img/ico/i-youtube.svg" alt=""></a></li>
                            <li><a href="#"><img src="img/ico/i-in.svg" alt=""></a></li>
                            <li><a href="#"><img src="img/ico/i-x.svg" alt=""></a></li>
                            <li><a href="#"><img src="img/ico/i-insta.svg" alt=""></a></li>
                            <li><a href="#"><img src="img/ico/i-facebook.svg" alt=""></a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-corp">
                        <p>© 2023 Shinhwa Engineering Corporation Limited. All rights reserved.  </p>
                        <ul class="pc">
                            <li><a href="#">개인정보 처리방침</a></li>
                            <li><a href="#">웹 사이트 이용약관</a></li>
                            <li><a href="#">판매 및 환불</a></li>
                        </ul>
                    </div>
                    <h6><span>대표 : 신용탁</span><span>경기도 고양시 덕양구 마상로140번길 54 3층(주교동, 난지빌딩)</span><span>사업자번호 :  110 – 81 – 72095</span><span>팩스 : 031 – 968 – 0445</span></h6>
                </div>
            </div>
            `
        };

        // 모달 열기 버튼 클릭 이벤트
        $(".open-modal").click(function () {
            var modalId = $(this).data("modal-id");
            $("#" + modalId).addClass("active");
            $("body").css("overflow", "hidden");
            // window.addEventListener("wheel", removeDefaultEvent, { passive: false });
        });

        // 모달 닫기 버튼 및 모달 바깥 영역 클릭 이벤트
        $(".btn-modal-close, .modal-wrap").click(function () {
            $(".modal-wrap").removeClass("active");
            $("body").css("overflow", "auto");
            // window.removeEventListener("wheel", removeDefaultEvent);
        });

        // 모달 내부 클릭 시 닫기 방지
        $(".modal-content").click(function (e) {
            e.stopPropagation();
        });

        // #checkAll 체크박스가 변경되면, 모든 개별 체크박스를 체크/체크 해제
        $('#checkAll').on('change', function () {
            $('.individual-check').prop('checked', $(this).prop('checked'));
        });

        // 개별 체크박스가 변경되면, #checkAll의 상태를 업데이트
        $('.individual-check').on('change', function () {
            if ($('.individual-check:checked').length === $('.individual-check').length) {
                $('#checkAll').prop('checked', true);
            } else {
                $('#checkAll').prop('checked', false);
            }
        });


        var detailSwiper01 = new Swiper(".detail-swiper", {
            spaceBetween: 20,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
            autoplay: {          // 자동 재생 옵션 추가
                delay: 3000,     // 슬라이드 간 전환 시간 (밀리초) - 3초
                disableOnInteraction: false,  // 사용자가 슬라이더와 상호작용해도 자동 재생 계속
            },
        });

        var detailSwiper02 = new Swiper(".detail-swiper2", {
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: detailSwiper01,
            },
            autoplay: {          // 자동 재생 옵션 추가
                delay: 3000,     // 슬라이드 간 전환 시간 (밀리초) - 3초
                disableOnInteraction: false,  // 사용자가 슬라이더와 상호작용해도 자동 재생 계속
            },
        });

        // 기본적으로 .active 클래스가 있는 아코디언을 열어두기
        $('.accordion-header.active').next('.accordion-content').show();

        // 아코디언 헤더 클릭 시
        $('.accordion-header').on('click', function () {
            // 현재 클릭된 헤더에 .active 클래스 추가/제거
            $(this).toggleClass('active');

            // 클릭된 헤더 바로 아래에 있는 내용만 토글
            $(this).next('.accordion-content').slideToggle(300);
        });

        // 기본적으로 .active 클래스가 있는 아코디언을 열어두기
        $('.sub-accordion-header.active').next('.sub-accordion-content').show();

        // 아코디언 헤더 클릭 시
        $('.sub-accordion-header').on('click', function () {
            // 현재 클릭된 헤더에 .active 클래스 추가/제거
            $(this).toggleClass('active');

            // 클릭된 헤더 바로 아래에 있는 내용만 토글
            $(this).next('.sub-accordion-content').slideToggle(300);
        });

        // 드롭다운 토글 버튼 클릭 시
        $('.dropdown-toggle').on('click', function () {
            // 드롭다운 메뉴를 열거나 닫기
            $(this).parent('.dropdown').toggleClass('active');
        });

        // 문서의 다른 부분을 클릭하면 드롭다운 닫기
        $(document).on('click', function (e) {
            if (!$(e.target).closest('.dropdown').length) {
                $('.dropdown').removeClass('active');
            }
        });

        // 드롭다운 메뉴의 항목을 클릭하면 드롭다운 닫기
        $('.dropdown-menu li a').on('click', function () {
            // 드롭다운 메뉴 닫기
            $(this).closest('.dropdown').removeClass('active');
        });

        // 메뉴의 a 태그 클릭 시
        $('.navbar li a').on('click', function (e) {
            e.preventDefault(); // a 태그의 기본 동작 방지 (원하지 않을 경우 제거 가능)

            // 모든 li 요소에서 active 클래스 제거
            $('.navbar li').removeClass('active');

            // 클릭된 a 태그의 부모 li에 active 클래스 추가
            $(this).parent('li').addClass('active');
        });

        // Slide in the mobile menu when clicking .btn-menu
    $(document).on('click', '.btn-menu', function () {
        $('.header-mo-navbar').addClass('active');
    });

    // Slide out the mobile menu when clicking .btn-menu-close
    $(document).on('click', '.btn-menu-close', function () {
        $('.header-mo-navbar').removeClass('active');
    });

    // Slide out the menu when clicking on the a tag in the .navbar
    $(document).on('click', '.header-mo-navbar .navbar li a', function () {
        $('.header-mo-navbar').removeClass('active');
    });
    }

    // 반응형 jQuery 코드
    function applyResponsivejQuery() {
    }

    // 공통 jQuery 적용
    applyCommonjQuery();

    // 반응형 jQuery 적용
    applyResponsivejQuery();

    // 창 크기 조정 시 반응형 jQuery 적용
    $(window).resize(applyResponsivejQuery);
});