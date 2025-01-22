// document.addEventListener("DOMContentLoaded", function() {
//     const aboutSection = document.querySelector("#about");
//     aboutSection.addEventListener("click", function() {
//         alert("자기소개 섹션을 클릭했습니다!");
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector("#about");
    console.log("aboutSection:", aboutSection);
    if (aboutSection) {
        aboutSection.addEventListener("click", function() {
            alert("자기소개 섹션을 클릭했습니다!");
        });
    } else {
        console.error("#about 섹션을 찾을 수 없습니다!");
    }
});