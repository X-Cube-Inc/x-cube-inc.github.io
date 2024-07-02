function toggleDropdown() {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    var pageTitle = document.querySelector('.page-title'); // 페이지 제목 요소 선택

    dropdowns.forEach(function(dropdown) {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
            pageTitle.style.marginTop = '20px'; // 드롭다운이 숨겨질 때 원래 마진으로 복귀
        } else {
            dropdown.classList.add('show');
            pageTitle.style.marginTop = '240px'; // 드롭다운이 표시될 때 마진을 늘림
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var navHeader = document.querySelector('.nav-header');
    navHeader.addEventListener('click', function () {
        toggleDropdown(); // 기존 toggleDropdown 함수 호출
    });
});
